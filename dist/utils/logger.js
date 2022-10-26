"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const config_1 = require("../config/config");
const defaultLogOptions = {
    isLogToConsole: true,
};
class Log {
    constructor(options = defaultLogOptions) {
        this.logName = "";
        this.isLogToConsole = true;
        this.path = path_1.default.join(__dirname, "..", "..", config_1.DEFAULT_LOG_PATH);
        this.isLogToConsole = options.isLogToConsole;
        this.updateName();
    }
    log(...things) {
        if (this.isLogToConsole) {
            console.log(things);
        }
        let data = `[${new Date().toUTCString()} LOG]: \n`;
        data = this.convertArgsToString(things);
        data += "-------------***********-------------\n";
        fs_1.default.appendFileSync(`${this.path}/${this.logName}`, `${data}`);
    }
    error(...things) {
        if (this.isLogToConsole) {
            console.log(things);
        }
        let data = `[${new Date().toUTCString()} Error]: \n`;
        data = this.convertArgsToString(things);
        data += "-------------***********-------------\n";
        fs_1.default.appendFileSync(`${this.path}/${this.logName}`, `${data}`);
    }
    /**
     * Convert any thing passed to 1 string
     * @param things anything
     * @returns conveted things to 1 long string
     */
    convertArgsToString(things) {
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
    updateName() {
        // FIXME: Use cron to update name at 00:00 everyday
        this.logName = `${new Date().toDateString()}.log`;
    }
}
exports.Log = Log;
