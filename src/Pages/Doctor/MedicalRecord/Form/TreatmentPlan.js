import React from 'react';
import styled from 'styled-components';

const TreatmentPlanContainer = styled.div`
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

const FormTextArea = styled.textarea`
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
`;

const TreatmentPlan = () => {
    return (
        <TreatmentPlanContainer>
            <SectionTitle>Treatment Plan</SectionTitle>
            <form>
                <FormLabel>
                    Medications:
                    <FormTextArea name="medications"></FormTextArea>
                </FormLabel>

                <SectionTitle>Therapies</SectionTitle>
                <FormLabel>
                    Physical Therapy:
                    <FormTextArea name="physicalTherapy"></FormTextArea>
                </FormLabel>
                <FormLabel>
                    Occupational Therapy:
                    <FormTextArea name="occupationalTherapy"></FormTextArea>
                </FormLabel>

                <SectionTitle>Follow-up Instructions</SectionTitle>
                <FormLabel>
                    Recommendations for Follow-up Appointment:
                    <FormTextArea name="followUpRecommendations"></FormTextArea>
                </FormLabel>
                <FormLabel>
                    Guidance on Monitoring Symptoms:
                    <FormTextArea name="monitoringSymptoms"></FormTextArea>
                </FormLabel>
            </form>
        </TreatmentPlanContainer>
    );
};

export default TreatmentPlan;
