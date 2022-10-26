import BlessedContrib from "blessed-contrib";
const tableOptions: BlessedContrib.Widgets.TableOptions = {
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
const table = BlessedContrib.table(tableOptions);
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

export default table;
