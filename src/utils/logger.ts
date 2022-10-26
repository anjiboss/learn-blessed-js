import fs from "fs";
import Path from "path";
import { DEFAULT_LOG_PATH } from "../config/config";

interface LogOptions {
  isLogToConsole: boolean;
}

const defaultLogOptions: LogOptions = {
  isLogToConsole: true,
};

export class Log {
  private path: string;
  private logName: string = "";
  private isLogToConsole: boolean = true;

  constructor(options: LogOptions = defaultLogOptions) {
    this.path = Path.join(__dirname, "..", "..", DEFAULT_LOG_PATH);
    this.isLogToConsole = options.isLogToConsole;
    this.updateName();
  }

  log(...things: any[]) {
    if (this.isLogToConsole) {
      console.log(things);
    }
    let data = `[${new Date().toUTCString()} LOG]: \n`;
    data = this.convertArgsToString(things);
    data += "-------------***********-------------\n";

    fs.appendFileSync(`${this.path}/${this.logName}`, `${data}`);
  }

  error(...things: any[]) {
    if (this.isLogToConsole) {
      console.log(things);
    }
    let data = `[${new Date().toUTCString()} Error]: \n`;
    data = this.convertArgsToString(things);
    data += "-------------***********-------------\n";

    fs.appendFileSync(`${this.path}/${this.logName}`, `${data}`);
  }

  /**
   * Convert any thing passed to 1 string
   * @param things anything
   * @returns conveted things to 1 long string
   */
  private convertArgsToString(things: any[]) {
    let data = "";
    things.forEach((thing) => {
      switch (typeof thing) {
        case "object":
          data += `${JSON.stringify(thing, null, "\t")} \n`;
          break;
        case "string":
          data += thing + "\n";
          break;
        case "function":
          data += "[function]" + "\n";
          break;
        case "undefined":
          data += "undefined" + "\n";
          break;
        default:
          data += String(thing) + "\n";
      }
    });
    return data;
  }

  private updateName() {
    // FIXME: Use cron to update name at 00:00 everyday
    this.logName = `${new Date().toDateString()}.log`;
  }
}
