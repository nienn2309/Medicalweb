import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from "./BillComponent/Table";
import Modal from "./BillComponent/Modal";

function CreateBill({ customerId }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [bills, setBills] = useState([]);
  const [rowToEdit, setRowToEdit] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/get-bills/${customerId}`)
      .then(response => {
        setBills(response.data);
        console.log('Customer ID:', customerId);
      })
      .catch(error => {
        console.error('Error retrieving treatment plan:', error);
      });
  }, []);

  const handleDeleteRow = (targetIndex) => {
    setBills(bills.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    const userId = sessionStorage.getItem('userId');
    rowToEdit === null ? setBills([...bills, newRow]) : setBills(
      bills.map((currRow, idx) => {
        if (idx !== rowToEdit) return currRow;
        return newRow;
      })
    );
  };

  const billRows = bills.map((bill, index) => ({
    date: bill.bill_date,
    description: bill.bill_desc,
    price: bill.total_cost,
    status: bill.payment_confirmation ? 'Paid' : 'Pending',
    index,
  }));

  return (
    <div className="create-bill-container">
      <Table rows={billRows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button type="button" className="Mbutton" onClick={() => setModalOpen(true)}>
        Add
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && billRows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default CreateBill;