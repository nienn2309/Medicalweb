import React from 'react';
import styled from 'styled-components';

const MedicalSummaryContainer = styled.div`
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 20px;
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

const MSDoc = () => {
    return (
        <MedicalSummaryContainer>
            <SectionTitle>Medical Summary</SectionTitle>
            <form>
                <FormLabel>
                    Chief Complaint:
                    <FormTextArea name="chiefComplaint"></FormTextArea>
                </FormLabel>

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

                <SectionTitle>Past Medical History</SectionTitle>
                <FormLabel>
                    Chronic Illnesses:
                    <FormTextArea name="chronicIllnesses"></FormTextArea>
                </FormLabel>
                <FormLabel>
                    Previous Significant Medical Events:
                    <FormTextArea name="previousMedicalEvents"></FormTextArea>
                </FormLabel>

                <SectionTitle>Diagnostic Test Result</SectionTitle>
                <FormLabel>
                    Laboratory Results:
                    <FormTextArea name="labResults"></FormTextArea>
                </FormLabel>
            </form>
        </MedicalSummaryContainer>
    );
};

export default MSDoc;
