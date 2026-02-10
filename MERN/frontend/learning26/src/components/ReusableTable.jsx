import React from "react";

const ReusableTable = ({ headers, data }) => {
  return (
    <div>
      <h2>Student Data Table</h2>
      <table border="1">
        <thead>
          <tr>
            {headers.map((head, index) => (
              <th key={index}>{head}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.email}</td>
              <td>{row.password}</td>
              <td>{row.mobile}</td>
              <td>{row.address}</td>
              <td>{row.city}</td>
              <td>{row.state}</td>
              <td>{row.country}</td>
              <td>{row.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReusableTable;
