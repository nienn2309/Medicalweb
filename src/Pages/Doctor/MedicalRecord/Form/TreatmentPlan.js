import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const TreatmentPlan = ({ customerId }) => {
    const [treatmentPlan, setTreatmentPlan] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/treatmentplan/${customerId}`)
            .then(response => {
                setTreatmentPlan(response.data);
            })
            .catch(error => {
                console.error('Error retrieving treatment plan:', error);
            });
    }, []);

    if (!treatmentPlan) {
        return <div>Loading...</div>;
    }

    return (
        <TreatmentPlanContainer>
            <SectionTitle>Treatment Plan</SectionTitle>
            <form>
                <FormLabel>
                    Medications:
                    <FormTextArea name="medications" value={treatmentPlan.Medications || ''}></FormTextArea>
                </FormLabel>

                <SectionTitle>Therapies</SectionTitle>
                <FormLabel>
                    Physical Therapy:
                    <FormTextArea name="physicalTherapy" value={treatmentPlan.PhysicalTherapy || ''}></FormTextArea>
                </FormLabel>
                <FormLabel>
                    Occupational Therapy:
                    <FormTextArea name="occupationalTherapy" value={treatmentPlan.OccupationalTherapy || ''}></FormTextArea>
                </FormLabel>

                <SectionTitle>Follow-up Instructions</SectionTitle>
                <FormLabel>
                    Recommendations for Follow-up Appointment:
                    <FormTextArea name="followUpRecommendations" value={treatmentPlan.RecFollowUpAppointment || ''}></FormTextArea>
                </FormLabel>
                <FormLabel>
                    Guidance on Monitoring Symptoms:
                    <FormTextArea name="monitoringSymptoms" value={treatmentPlan.GuideMonitorSymtopms || ''}></FormTextArea>
                </FormLabel>
            </form>
        </TreatmentPlanContainer>
    );
};

export default TreatmentPlan;
