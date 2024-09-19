import React from 'react';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>date</th>
          <th>insect</th>
          <th>where</th>
          <th>why</th>
          <th>notes</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.date}</td>
            <td>{row.bug}</td>
            <td>{row.where}</td>
            <td>{row.why}</td>
            <td>{row.thoughts}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;