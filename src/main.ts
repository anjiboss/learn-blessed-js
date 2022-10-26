import bless from "blessed";
import { Log } from "./utils/logger";

const screen = bless.screen();
export const logger = new Log({
  isLogToConsole: false,
});

const childBox = bless.box({
  content: "this is child",
  width: "20%",
  height: "100%",
  top: "0%",
  left: "0%",
  fg: "blue",
  bg: "black",
  border: "line",
  hoverText: "this will appear when you hover",
  style: {
    padding: 0,
    hover: {
      bg: "red",
    },
  },
  children: [],
});

const lineContent = bless.box({
  padding: 0,
  content: "why nothing is shown",
  width: "70%",
  height: "100%",
  top: "0%",
  left: "20%",
  style: {
    padding: 0,
    fg: "green",
    bg: "blue",
    border: "line",
  },
});

const containerBox = bless.box({
  children: [childBox, lineContent],
  width: "100%",
  height: "10%",
  border: "line",
  style: {
    padding: 0,
    fg: "green",
  },
});

const box = bless.box({
  content: "this is a box",
  width: "100%",
  height: "100%",
  border: "line",
  children: [containerBox],
  style: {
    padding: 0,
    fg: "blue",
    bg: "black",
  },
});

screen.append(box);

box.addListener("click", (mouse) => {
  box.setContent("You clicked " + mouse.x + ", " + mouse.y + ".");
  screen.render();
});

screen.key(["escape", "q", "C-c"], function (_, __) {
  return process.exit(0);
});

screen.render();
