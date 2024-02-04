import React from "react";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import "./Table.css";

// Table component for displaying and managing rows of data
function Table({ rows, deleteRow, editRow }) {
  return (
    // Wrapper div for styling purposes
    <div className="table-CBill-wrapper">
      {/* Actual HTML table element */}    
      <table className="table-CBill">
        {/* Table header */}
        <thead>
          <tr>
            <th>Name</th>
            <th className="expand">Description</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* Table body containing dynamic rows */}
        <tbody>
          {/* Map through each row in the 'rows' array */}
          {rows.map((row, idx) => {
            // Capitalize the first letter of the status for display
            const statusText =
              row.status.charAt(0).toUpperCase() + row.status.slice(1);

            // Display each row in the table
            return (
              <tr key={idx}>
                <td>{row.name}</td>
                <td className="expand">{row.description}</td>
                <td>{row.price}</td>
                <td>
                  {/* Display status with corresponding CSS class */}
                  <span className={`labelT label-${row.status}`}>
                    {statusText}
                  </span>
                </td>
                <td className="fit">
                  {/* Action buttons for deleting and editing rows */}
                  <span className="action-button">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(idx)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
