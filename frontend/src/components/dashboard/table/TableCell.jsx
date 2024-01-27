import React, { useState, useEffect } from "react";
// import "./table.css";

const TableCell = ({ value, onChange }) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={() => {}}
    />
  );
};

const Table = () => {
  const [data, setData] = useState([
    {
      studentId: 1111,
      name: "Bahar Constantia",
      dateOfBirth: "1984-01-04",
      major: "Business",
    },
    {
      studentId: 2222,
      name: "Harold Nona",
      dateOfBirth: "1961-05-10",
      major: "Communications",
    },
    {
      studentId: 3333,
      name: "Raginolf Arnulf",
      dateOfBirth: "1991-10-12",
      major: "Business",
    },
    {
      studentId: 4444,
      name: "Marvyn Wendi",
      dateOfBirth: "1978-09-24",
      major: "Business",
    },
  ]);

  const updateData = (rowIndex, columnId, value) => {
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
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Full Name</th>
            <th>Date Of Birth</th>
            <th>Major</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <TableCell
                  value={row.studentId}
                  onChange={(value) => updateData(rowIndex, "studentId", value)}
                />
              </td>
              <td>
                <TableCell
                  value={row.name}
                  onChange={(value) => updateData(rowIndex, "name", value)}
                />
              </td>
              <td>
                <TableCell
                  value={row.dateOfBirth}
                  onChange={(value) =>
                    updateData(rowIndex, "dateOfBirth", value)
                  }
                />
              </td>
              <td>
                <TableCell
                  value={row.major}
                  onChange={(value) => updateData(rowIndex, "major", value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <pre>{JSON.stringify(data, null, "\t")}</pre>
    </>
  );
};

export default Table;
