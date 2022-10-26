"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const blessed_1 = __importDefault(require("blessed"));
const logger_1 = require("./utils/logger");
const screen = blessed_1.default.screen();
exports.logger = new logger_1.Log({
    isLogToConsole: false,
});
const childBox = blessed_1.default.box({
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
const lineContent = blessed_1.default.box({
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
const containerBox = blessed_1.default.box({
    children: [childBox, lineContent],
    width: "100%",
    height: "10%",
    border: "line",
    style: {
        padding: 0,
        fg: "green",
    },
});
const box = blessed_1.default.box({
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
