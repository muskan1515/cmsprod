import React from "react";

export const EditCell = ({ row, table }) => {
  const meta = table.options.meta;
  const validRow = meta?.validRows[row.id];
  const disableSubmit = validRow
    ? Object.values(validRow)?.some((item) => !item)
    : false;

  const setEditedRows = (e) => {
    const elName = e.currentTarget.name;
    meta?.setEditedRows((old) => ({
      ...old,
      [row.id]: !old[row.id],
    }));
    if (elName !== "edit") {
      if (e.currentTarget.name === "cancel") {
        meta?.revertData(row.index);
      } else {
        meta?.updateRow(row.index);
      }
    }
  };

  const removeRow = () => {
    meta?.removeRow(row.index);
  };

  return React.createElement(
    "div",
    { className: "edit-cell-container" },
    meta?.editedRows[row.id]
      ? React.createElement(
          "div",
          { className: "edit-cell-action" },
          React.createElement(
            "button",
            { onClick: setEditedRows, name: "cancel" },
            "⚊"
          ),
          " ",
          React.createElement(
            "button",
            { onClick: setEditedRows, name: "done", disabled: disableSubmit },
            "✔"
          )
        )
      : React.createElement(
          "div",
          { className: "edit-cell-action" },
          React.createElement(
            "button",
            { onClick: setEditedRows, name: "edit" },
            "✐"
          ),
          React.createElement(
            "button",
            { onClick: removeRow, name: "remove" },
            "X"
          )
        ),
    React.createElement("input", {
      type: "checkbox",
      checked: row.getIsSelected(),
      onChange: row.getToggleSelectedHandler(),
    })
  );
};
