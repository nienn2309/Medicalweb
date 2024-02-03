import React, { useState } from 'react';
import styled from 'styled-components';

const MedicalSummaryContainer = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 20px;
    border: none; 
    border-radius: 5px;
    margin-top: 20px;
    display: flex;
    flex-direction: row; 
    justify-content: space-between; 
`;

const LeftSection = styled.div`
    width: 48%;
    border: 0.2rem solid var(--green); 
    border-radius: 5px;
    box-shadow: .6rem .6rem 0 rgba(22, 160, 133, 0.3);
    padding: 20px;
`;

const RightSection = styled.div`
    width: 48%;
    margin-right: 2%;
    border: 0.2rem solid var(--green); 
    border-radius: 5px;
    box-shadow: .6rem .6rem 0 rgba(22, 160, 133, 0.3);
    padding: 20px;
    margin-left: 10%;
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

const EditButton = styled.button`
    background-color: #3498db;
    color: #fff;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

function MedicalSummary() {
  const [isPatientInfoEditable, setPatientInfoEditable] = useState(false);

  const handleEditButtonClick = () => {
      setPatientInfoEditable(!isPatientInfoEditable);
  };

  return (
    <MedicalSummaryContainer>
      <LeftSection>
        <SectionTitle>Patient's Information</SectionTitle>
        <form>
            <FormLabel>
                Patient Name:
                <FormInput type="text" name="patientName" defaultValue="Nguyen Hoang Ngu" />
            </FormLabel>
            <FormLabel>
                Date of Birth:
                <FormInput type="text" name="dob" defaultValue="September 23, 2004" />
            </FormLabel>
            <FormLabel>
                Gender:
                <FormInput type="text" name="gender" defaultValue="Male" />
            </FormLabel>
            <FormLabel>
                Contact Number:
                <FormInput type="text" name="contactNumber" defaultValue="555-1234" />
            </FormLabel>
            {/* Add more patient information fields as needed */}
        </form>
        <EditButton onClick={handleEditButtonClick}>
                {isPatientInfoEditable ? 'Save' : 'Edit Personal Information'}
        </EditButton>
      </LeftSection> 

      <RightSection>
        <SectionTitle>Medical Summary</SectionTitle>
        <form>
          <FormLabel>
            Chief Complaint:
            <FormTextArea name="chiefComplaint" defaultValue="Stomachache" readOnly></FormTextArea>
          </FormLabel>
  
          <SectionTitle>Vital Signs</SectionTitle>
          <FormLabel>
            Blood Pressure:
            <FormInput type="text" name="bloodPressure" defaultValue="120/80" readOnly/>
          </FormLabel>
          <FormLabel>
            Heart Rate:
            <FormInput type="text" name="heartRate" defaultValue="75" readOnly/>
          </FormLabel>
          <FormLabel>
            Respiratory Rate:
            <FormInput type="text" name="respiratoryRate" defaultValue="16" readOnly/>
          </FormLabel>
          <FormLabel>
            Temperature:
            <FormInput type="text" name="temperature" defaultValue="36.7°C" readOnly/>
          </FormLabel>
  
          <SectionTitle>Past Medical History</SectionTitle>
          <FormLabel>
            Chronic Illnesses:
            <FormTextArea name="chronicIllnesses" defaultValue="Hypertension, Diabetes" readOnly></FormTextArea>
          </FormLabel>
          <FormLabel>
            Previous Significant Medical Events:
            <FormTextArea name="previousMedicalEvents" defaultValue="Heart attack in 2018" readOnly></FormTextArea>
          </FormLabel>
  
          <SectionTitle>Diagnostic Test Result</SectionTitle>
          <FormLabel>
            Laboratory Results:
            <FormTextArea name="labResults" defaultValue="Normal range for all tests" readOnly></FormTextArea>
          </FormLabel>
        </form>
      </RightSection>
    </MedicalSummaryContainer>
  );
}
  
export default MedicalSummary;
