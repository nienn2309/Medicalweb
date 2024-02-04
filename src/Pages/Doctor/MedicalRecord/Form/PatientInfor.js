import React from 'react';
import styled from 'styled-components';

// Styled component for the container of the patient information form
const PatientForm = styled.div`
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

// Styled component for form labels
const FormLabel = styled.label`
    display: block;
    margin-bottom: 10px;
`;

// Styled component for text input fields
const FormInput = styled.input`
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
`;

// Styled component for select dropdowns
const FormSelect = styled.select`
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
`;

// Styled component for textareas in the form
const FormTextArea = styled.textarea`
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
`;

// React functional component representing the patient information form
function PInfor() {
    return (
        <PatientForm>
            {/* Heading for the Patient Information section */}
            <h1>Patient Information</h1>

            {/* Form for entering patient information */}
            <form>
                {/* Form fields for personal information */}
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
                    {/* Dropdown for selecting gender */}
                    <FormSelect name="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </FormSelect>
                </FormLabel>

                {/* Form fields for contact information */}
                <FormLabel>
                    Address:
                    <FormInput type="text" name="address" />
                </FormLabel>
                <FormLabel>
                    Contact Info:
                    {/* Input fields for phone and email */}
                    <FormInput type="tel" name="phone" placeholder="Phone" />
                    <FormInput type="email" name="email" placeholder="Email" />
                </FormLabel>

                {/* Form fields for medical history */}
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

// Export the component
export default PInfor;
