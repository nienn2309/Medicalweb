import React from 'react';
import styled from 'styled-components';

// Styled component for the container of the medical summary form
const MedicalSummaryContainer = styled.div`
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 20px;
`;

// Styled component for section titles in the form
const SectionTitle = styled.h2`
    margin-bottom: 10px;
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

// Styled component for textareas in the form
const FormTextArea = styled.textarea`
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
`;

// React functional component representing the medical summary form
const MSDoc = () => {
    return (
        <MedicalSummaryContainer>
            {/* Section for the Medical Summary */}
            <SectionTitle>Medical Summary</SectionTitle>

            {/* Form for entering medical information */}
            <form>
                {/* Chief Complaint */}
                <FormLabel>
                    Chief Complaint:
                    <FormTextArea name="chiefComplaint"></FormTextArea>
                </FormLabel>

                {/* Section for Vital Signs */}
                <SectionTitle>Vital Signs</SectionTitle>
                <FormLabel>
                    Blood Pressure:
                    <FormInput type="text" name="bloodPressure" />
                </FormLabel>
                <FormLabel>
                    Heart Rate:
                    <FormInput type="text" name="heartRate" />
                </FormLabel>
                <FormLabel>
                    Respiratory Rate:
                    <FormInput type="text" name="respiratoryRate" />
                </FormLabel>
                <FormLabel>
                    Temperature:
                    <FormInput type="text" name="temperature" />
                </FormLabel>

                {/* Section for Past Medical History */}
                <SectionTitle>Past Medical History</SectionTitle>
                <FormLabel>
                    Chronic Illnesses:
                    <FormTextArea name="chronicIllnesses"></FormTextArea>
                </FormLabel>
                <FormLabel>
                    Previous Significant Medical Events:
                    <FormTextArea name="previousMedicalEvents"></FormTextArea>
                </FormLabel>

                {/* Section for Diagnostic Test Result */}
                <SectionTitle>Diagnostic Test Result</SectionTitle>
                <FormLabel>
                    Laboratory Results:
                    <FormTextArea name="labResults"></FormTextArea>
                </FormLabel>
            </form>
        </MedicalSummaryContainer>
    );
};

// Export the component
export default MSDoc;
