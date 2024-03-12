import React, {useState} from 'react';
import "./AppPatient.css";

function AppointmentPage() {   
    const [confirmationStatus, setConfirmationStatus] = useState(Array(10).fill(false));

    const handleEditButtonClick = (index) => {
        const updatedConfirmationStatus = [...confirmationStatus];
        updatedConfirmationStatus[index] = !updatedConfirmationStatus[index];
        setConfirmationStatus(updatedConfirmationStatus);
    };

    return (
        <div className="appointment-patient">
            <div className="appointment-page" style={{ marginTop: '150px', width: '90%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
                <table className="custom-table">
                    <thead>
                        <tr className="appointmenthead">
                            <th>Name</th>
                            <th>Birthdate</th>
                            <th>Phone Contacts</th>
                            <th>Appointment's Date</th>
                            <th>Reason For Visit</th>
                            <th>Status</th>
                            <th className="center-cell">Confirmation</th>
                        </tr>
                    </thead>

                    <tbody>
                        {[...Array(10)].map((_, index) => (
                            <tr key={index}>
                                <td>Pham Tuan Bach</td>
                                <td>13/2/1999</td>
                                <td>0912834123</td>
                                <td>20/2/2024</td>
                                <td>Routine Check-up</td>
                                <td>{confirmationStatus[index] ? 'Confirmed' : 'Upcoming'}</td>
                                <th className="confirmButton" onClick={() => handleEditButtonClick(index)}>
                                    {confirmationStatus[index] ? 'Confirmed' : 'Confirm'}
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AppointmentPage;
