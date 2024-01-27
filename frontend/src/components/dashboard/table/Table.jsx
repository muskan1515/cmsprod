import { useEffect, useState } from "react";
import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { columns } from "./Columns";
import { FooterCell } from "./FooterCell";
import useStudents from "./useStudents";

export const Table = () => {
  const {
    data: originalData,
    isValidating,
    addRow,
    updateRow,
    deleteRow,
  } = useStudents();
  const [data, setData] = useState([]);
  const [editedRows, setEditedRows] = useState({});
  const [validRows, setValidRows] = useState({});

  useEffect(() => {
    if (isValidating) return;
    setData([...originalData]);
  }, [isValidating]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: true,
    meta: {
      editedRows,
      setEditedRows,
      validRows,
      setValidRows,
      revertData: (rowIndex) => {
        setData((old) =>
          old.map((row, index) =>
            index === rowIndex ? originalData[rowIndex] : row
          )
        );
      },
      updateRow: (rowIndex) => {
        updateRow(data[rowIndex].id, data[rowIndex]);
      },
      updateData: (rowIndex, columnId, value, isValid) => {
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: value,
              };
            }
            return row;
          })
        );
        setValidRows((old) => ({
          ...old,
          [rowIndex]: { ...old[rowIndex], [columnId]: isValid },
        }));
      },
      addRow: () => {
        const id = Math.floor(Math.random() * 10000);
        const newRow = {
          id,
          studentNumber: id,
          name: "",
          dateOfBirth: "",
          major: "",
        };
        addRow(newRow);
      },
      removeRow: (rowIndex) => {
        deleteRow(data[rowIndex].id);
      },
      removeSelectedRows: (selectedRows) => {
        selectedRows.forEach((rowIndex) => {
          deleteRow(data[rowIndex].id);
        });
      },
    },
  });

  return React.createElement(
    "article",
    { className: "table-container" },
    React.createElement(
      "table",
      null,
      React.createElement(
        "thead",
        null,
        table.getHeaderGroups().map((headerGroup) =>
          React.createElement(
            "tr",
            { key: headerGroup.id },
            headerGroup.headers.map((header) =>
              React.createElement(
                "th",
                { key: header.id },
                header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )
              )
            )
          )
        )
      ),
      React.createElement(
        "tbody",
        null,
        table.getRowModel().rows.map((row) =>
          React.createElement(
            "tr",
            { key: row.id },
            row
              .getVisibleCells()
              .map((cell) =>
                React.createElement(
                  "td",
                  { key: cell.id },
                  flexRender(cell.column.columnDef.cell, cell.getContext())
                )
              )
          )
        )
      ),
      React.createElement(
        "tfoot",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            { colSpan: table.getCenterLeafColumns().length, align: "right" },
            React.createElement(FooterCell, { table: table })
          )
        )
      )
    )
    // Uncomment the line below if you want to display the data in JSON format
    // React.createElement("pre", null, JSON.stringify(data, null, "\t"))
  );
};
