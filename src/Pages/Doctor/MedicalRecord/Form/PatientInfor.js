import React from 'react';
import styled from 'styled-components';

const PatientForm = styled.div`
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
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

const FormSelect = styled.select`
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

function PInfor() {
    return (
        <PatientForm>
            <h1>Patient Information</h1>
            <form>
                <FormLabel>
                    First Name:
                    <FormInput type="text" name="firstName" />
                </FormLabel>
                <FormLabel>
                    Last Name:
                    <FormInput type="text" name="lastName" />
                </FormLabel>
                <FormLabel>
                    Date of Birth:
                    <FormInput type="date" name="dob" />
                </FormLabel>
                <FormLabel>
                    Gender:
                    <FormSelect name="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </FormSelect>
                </FormLabel>
                <FormLabel>
                    Address:
                    <FormInput type="text" name="address" />
                </FormLabel>
                <FormLabel>
                    Contact Info:
                    <FormInput type="tel" name="phone" placeholder="Phone" />
                    <FormInput type="email" name="email" placeholder="Email" />
                </FormLabel>
                <FormLabel>
                    Allergies:
                    <FormTextArea name="allergies"></FormTextArea>
                </FormLabel>
                <FormLabel>
                    Medication History:
                    <FormTextArea name="medicationHistory"></FormTextArea>
                </FormLabel>
                <FormLabel>
                    Surgical History:
                    <FormTextArea name="surgicalHistory"></FormTextArea>
                </FormLabel>
            </form>
        </PatientForm>
    );
}

export default PInfor;