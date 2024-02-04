/*
  File: Appointment.js

  Description:
  This file defines the Appointment component, displaying a list of appointments in a table format. 
  It includes information such as Name, Birthdate, Phone Contacts, Appointment's Date, Reason For Visit, Status, and an Edit Appointment button.
  The component uses the 'apointment.scss' stylesheet for styling.

  Components:
  - Appointment: Functional component rendering the appointment list.
*/

import React from 'react';
import "./apointment.scss"; // Assuming you have your custom styles in apointment.scss

function Appointment() {
  return (
    <div className="appointment-doctor">
      <button className="schedule-button">Schedule an appointment</button>
      <div className="appointment-page" style={{ marginTop: '50px', width: '90%', margin: '0 auto' }}>
      <table className="custom-table">
        <thead>
          <tr className="appointmenthead">
            <th>Name</th>
            <th>Birthdate</th>
            <th>Phone Contacts</th>
            <th>Appointment's Date</th>
            <th>Reason For Visit</th>
            <th>Status</th>
            <th className="center-cell">Edit Appointment</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>John Lilki</td>
            <td>13/2/1999</td>
            <td>0912834123</td>
            <td>20/2/2024</td>
            <td>Routine Check-up</td>
            <td>Waiting</td>
            <td className="center-cell">
              <button className="custom-button primary">Edit</button>
            </td>
          </tr>
          <tr>
            <td>John Lilki</td>
            <td>13/2/1999</td>
            <td>0912834123</td>
            <td>20/2/2024</td>
            <td>Routine Check-up</td>
            <td>Waiting</td>
            <td className="center-cell">
              <button className="custom-button primary">Edit</button>
            </td>
          </tr>
          <tr>
            <td>John Lilki</td>
            <td>13/2/1999</td>
            <td>0912834123</td>
            <td>20/2/2024</td>
            <td>Routine Check-up</td>
            <td>Waiting</td>
            <td className="center-cell">
              <button className="custom-button primary">Edit</button>
            </td>
          </tr>
          <tr>
            <td>John Lilki</td>
            <td>13/2/1999</td>
            <td>0912834123</td>
            <td>20/2/2024</td>
            <td>Routine Check-up</td>
            <td>Waiting</td>
            <td className="center-cell">
              <button className="custom-button primary">Edit</button>
            </td>
          </tr>
          <tr>
            <td>John Lilki</td>
            <td>13/2/1999</td>
            <td>0912834123</td>
            <td>20/2/2024</td>
            <td>Routine Check-up</td>
            <td>Waiting</td>
            <td className="center-cell">
              <button className="custom-button primary">Edit</button>
            </td>
          </tr>
          <tr>
            <td>John Lilki</td>
            <td>13/2/1999</td>
            <td>0912834123</td>
            <td>20/2/2024</td>
            <td>Routine Check-up</td>
            <td>Waiting</td>
            <td className="center-cell">
              <button className="custom-button primary">Edit</button>
            </td>
          </tr>
          <tr>
            <td>John Lilki</td>
            <td>13/2/1999</td>
            <td>0912834123</td>
            <td>20/2/2024</td>
            <td>Routine Check-up</td>
            <td>Waiting</td>
            <td className="center-cell">
              <button className="custom-button primary">Edit</button>
            </td>
          </tr>
          <tr>
            <td>John Lilki</td>
            <td>13/2/1999</td>
            <td>0912834123</td>
            <td>20/2/2024</td>
            <td>Routine Check-up</td>
            <td>Waiting</td>
            <td className="center-cell">
              <button className="custom-button primary">Edit</button>
            </td>
          </tr>
          <tr>
            <td>John Lilki</td>
            <td>13/2/1999</td>
            <td>0912834123</td>
            <td>20/2/2024</td>
            <td>Routine Check-up</td>
            <td>Waiting</td>
            <td className="center-cell">
              <button className="custom-button primary">Edit</button>
            </td>
          </tr>
          <tr>
            <td>John Lilki</td>
            <td>13/2/1999</td>
            <td>0912834123</td>
            <td>20/2/2024</td>
            <td>Routine Check-up</td>
            <td>Waiting</td>
            <td className="center-cell">
              <button className="custom-button primary">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    
  );
}

export default Appointment;
