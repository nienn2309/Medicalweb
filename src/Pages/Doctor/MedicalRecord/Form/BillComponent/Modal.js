import React, { useState } from "react";
import "./Modal.css";

function Modal({ closeModal, onSubmit, defaultValue }) {
  const [formState, setFormState] = useState(
    defaultValue || {
      bill_desc: "",
      bill_date: "",
      total_cost: "",
      payment_confirmation: false,
    }    
  );

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
    closeModal();
  };

  return (
    <div className="modal-container" onClick={(e) => { if (e.target.className === "modal-container") closeModal(); }} >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="bill_desc">Bill Date</label>
            <input
              name="bill_date"
              onChange={handleChange}
              type="date"
              value={formState.bill_date}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bill_date">Bill Description</label>
            <input
              name="bill_desc"
              onChange={handleChange}
              value={formState.bill_desc}
            />
          </div>
          <div className="form-group">
            <label htmlFor="total_cost">Total Cost</label>
            <input
              name="total_cost"
              onChange={handleChange}
              value={formState.total_cost}
            />
          </div>
          <div className="form-group">
            <label htmlFor="payment_confirmation">Payment Confirmation</label>
            <input
              name="payment_confirmation"
              type="checkbox"
              onChange={(e) =>
                setFormState({
                  ...formState,
                  payment_confirmation: e.target.checked,
                })
              }
              checked={formState.payment_confirmation}
            />
          </div>
          <button className="Mbutton" type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;