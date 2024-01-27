import React from "react";
export const FooterCell = ({ table }) => {
  const meta = table.options.meta;
  const selectedRows = table.getSelectedRowModel().rows;

  const removeRows = () => {
    meta.removeSelectedRows(
      table.getSelectedRowModel().rows.map((row) => row.index)
    );
    table.resetRowSelection();
  };

  return React.createElement(
    "div",
    { className: "footer-buttons" },
    selectedRows.length > 0
      ? React.createElement(
          "button",
          { className: "remove-button", onClick: removeRows },
          "Remove Selected x"
        )
      : null,
    React.createElement(
      "button",
      { className: "add-button", onClick: meta?.addRow },
      "Add New +"
    )
  );
};
