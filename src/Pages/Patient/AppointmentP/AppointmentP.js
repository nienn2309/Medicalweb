// AppointmentPage.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 800px;
    margin: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Box = styled.div`
    border: 0.2rem solid var(--green); 
    border-radius: 5px;
    box-shadow: 1rem 1rem 0 rgba(22, 160, 133, 0.3);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const SectionTitle = styled.h2`
    margin-bottom: 10px;
`;

const FormLabel = styled.label`
    display: block;
    margin-bottom: 10px;
`;

const FormInput = styled.input`
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
`;

const FormTextArea = styled.textarea`
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
`;

const SubmitButton = styled.button`
    background-color: #3498db;
    color: #fff;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

function AppointmentPage() {
    const [appointmentData, setAppointmentData] = useState({
        name: "",
        birthdate: "",
        phoneContacts: "",
        appointmentDate: "",
        reasonForVisit: "",
        status: "",
    });

    const handleAppointmentInputChange = (e) => {
        const { name, value } = e.target;
        setAppointmentData({
        ...appointmentData,
        [name]: value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send data to server)
        console.log("Appointment data submitted:", appointmentData);
        // You can redirect to another page or perform other actions as needed
    };

    return (
        <Container>
            <Box>
                <SectionTitle>Make an Appointment</SectionTitle>
                <form onSubmit={handleFormSubmit}>
                <FormLabel>
                    Name:
                    <FormInput
                    type="text"
                    name="name"
                    value={appointmentData.name}
                    onChange={handleAppointmentInputChange}
                    />
                </FormLabel>
                <FormLabel>
                    Birthdate:
                    <FormInput
                    type="text"
                    name="birthdate"
                    value={appointmentData.birthdate}
                    onChange={handleAppointmentInputChange}
                    />
                </FormLabel>
                <FormLabel>
                    Phone Contacts:
                    <FormInput
                    type="text"
                    name="phoneContacts"
                    value={appointmentData.phoneContacts}
                    onChange={handleAppointmentInputChange}
                    />
                </FormLabel>
                <FormLabel>
                    Appointment's Date:
                    <FormInput
                    type="date"
                    name="appointmentDate"
                    value={appointmentData.appointmentDate}
                    onChange={handleAppointmentInputChange}
                    />
                </FormLabel>
                <FormLabel>
                    Reason For Visit:
                    <FormTextArea
                    name="reasonForVisit"
                    value={appointmentData.reasonForVisit}
                    onChange={handleAppointmentInputChange}
                    ></FormTextArea>
                </FormLabel>
                <FormLabel>
                    Status:
                    <FormInput
                    type="text"
                    name="status"
                    value={appointmentData.status}
                    onChange={handleAppointmentInputChange}
                    />
                </FormLabel>
                <SubmitButton type="submit">Submit Appointment</SubmitButton>
                </form>
            </Box>
        </Container>
    );
}

export default AppointmentPage;
