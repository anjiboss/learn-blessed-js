"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blessed_contrib_1 = __importDefault(require("blessed-contrib"));
const tableOptions = {
    keys: true,
    fg: "white",
    selectedFg: "white",
    selectedBg: "blue",
    label: "Anji's Todo List",
    width: "80%",
    height: "80%",
    border: { type: "line", fg: "cyan" },
    columnSpacing: 10,
    columnWidth: [16, 12, 12],
    clickable: true,
    vi: true,
};
const table = blessed_contrib_1.default.table(tableOptions);
table.setData({
    headers: ["col1", "col2", "col3"],
    data: [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["4", "5", "6"],
        ["4", "5", "6"],
        ["4", "5", "6"],
        ["4", "5", "6"],
    ],
});
exports.default = table;
