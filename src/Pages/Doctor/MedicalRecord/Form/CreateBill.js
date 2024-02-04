import { useState } from "react";

import Table from "./BillComponent/Table";
import Modal from "./BillComponent/Modal";

// Main component for creating and managing bills
function CreateBill() {
  // State for controlling the visibility of the modal
  const [modalOpen, setModalOpen] = useState(false);

  // State for managing the array of bill rows
  const [rows, setRows] = useState([
    { name: "Paracetamol", description: "A medicine for fever", price: "15.000 VND", status: "Pending" },
    { name: "Paracetamol", description: "A medicine for fever", price: "15.000 VND", status: "Paid" },
    { name: "Paracetamol", description: "A medicine for fever", price: "15.000 VND", status: "Pending" },
    { name: "Paracetamol", description: "A medicine for fever", price: "15.000 VND", status: "Pending" },
    { name: "Paracetamol", description: "A medicine for fever", price: "15.000 VND", status: "Error" },
  ]);

  // State for tracking the index of the row being edited
  const [rowToEdit, setRowToEdit] = useState(null);

  // Function to handle deleting a row
  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  // Function to handle editing a row
  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  // Function to handle form submission from the modal
  const handleSubmit = (newRow) => {
    // If no row is being edited, add the new row to the array
    // Otherwise, replace the row at the specified index with the new row
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;
            return newRow;
          })
        );
  };

  // Render the component
  return (
    <div className="create-bill-container">
      {/* Display the table with bill rows */}
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      
      {/* Button to open the modal for adding a new row */}
      <button type="button" className="Mbutton" onClick={() => setModalOpen(true)}>
        Add
      </button>

      {/* Display the modal if it is open */}
      {modalOpen && (
        <Modal
          closeModal={() => {
            // Close the modal and reset the rowToEdit state
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          // Pass the default value if editing an existing row
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default CreateBill;
