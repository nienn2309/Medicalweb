/*
  File: TreatmentPlan.js

  Description:
  This file defines the TreatmentPlan component, which displays details about a patient's treatment plan.
  It utilizes React and CSS for styling. The component includes a table with information about hospitals,
  doctors, and dates of treatment plans. Each row in the table can be toggled to reveal additional details
  using the RowContent component. The data for the table is provided through the 'data' array.

  Components:
  - TreatmentPlan: Functional component managing the overall layout and state.
  - RowContent: Class component rendering additional details for each treatment plan row.
*/

import "./treatment.css";
import { useState } from "react";
import React from "react";

function TreatmentPlan() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="treat-page">
      <h1 className="treat-h1">Your Treatment Detail</h1>
      <div>
        <table className="treat-table">
          <thead className="treat-thead">
            <tr>
              <th className="treat-no-h">.No</th>
              <th className="treat-hospital-h">Hospital</th>
              <th className="treat-name-h">Doctor's Name</th>
              <th className="treat-plan-h">Date of plan</th>
              <th>/</th>
            </tr>
          </thead>

          {data.map((a, i) => (
            <tbody key={i}>
              <tr className="treat-tb-head" onClick={() => toggle(i)}>
                <th className="treat-no-h">{a.no}</th>
                <th className="treat-hospital-h">{a.hospital}</th>
                <th className="treat-name-h">{a.name}</th>
                <th className="treat-plan-h">{a.plan}</th>
                <th>
                  <span>{selected === i ? "-" : "+"}</span>
                </th>
              </tr>
              <tr>
                <td colSpan="4">
                  <div
                    className={
                      selected === i ? "treat-content show" : "treat-content"
                    }
                  >
                    <RowContent index={i} />
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

const data = [
  {
    no: "T001",
    hospital: "City General Hospital",
    name: "Dr. Alice Johnson",
    plan: "02/15/2024",
    details: {
      presentingProblem: "Severe migraines",
      diagnosis: "Migraine with aura",
      goalAndObjective: "Reduce frequency and intensity of migraines",
      treatmentMethod: "Prescription medication, lifestyle changes",
      doctorNote:
        "Patient responded well to initial treatment, follow up in two weeks.",
    },
  },
  {
    no: "T002",
    hospital: "City General Hospital",
    name: "Dr. Michael Rodriguez",
    plan: "03/05/2024",
    details: {
      presentingProblem: "Chronic back pain",
      diagnosis: "Herniated disc",
      goalAndObjective: "Improve mobility and alleviate pain",
      treatmentMethod: "Physical therapy, pain medication",
      doctorNote:
        "Scheduled for MRI to assess the extent of the disc herniation.",
    },
  },
  {
    no: "T003",
    hospital: "City General Hospital",
    name: "Dr. Emily Carter",
    plan: "04/10/2024",
    details: {
      presentingProblem: "Type 2 diabetes",
      diagnosis: "Diabetes mellitus",
      goalAndObjective:
        "Stabilize blood sugar levels, promote lifestyle changes",
      treatmentMethod: "Insulin therapy, dietary counseling",
      doctorNote:
        "Patient requires ongoing monitoring of blood glucose levels.",
    },
  },
  {
    no: "T004",
    hospital: "Unity Wellness Center",
    name: "Dr. James Anderson",
    plan: "05/20/2024",
    details: {
      presentingProblem: "Anxiety and panic attacks",
      diagnosis: "Generalized anxiety disorder",
      goalAndObjective: "Manage anxiety symptoms, improve coping mechanisms",
      treatmentMethod: "Cognitive-behavioral therapy, anti-anxiety medication",
      doctorNote:
        "Encouraging progress in therapy sessions, continue with treatment plan.",
    },
  },
  {
    no: "T005",
    hospital: "Unity Wellness Center",
    name: "Dr. Sophia Lee",
    plan: "06/08/2024",
    details: {
      presentingProblem: "Depression",
      diagnosis: "Major depressive disorder",
      goalAndObjective:
        "Alleviate depressive symptoms, enhance emotional well-being",
      treatmentMethod: "Antidepressant medication, psychotherapy",
      doctorNote:
        "Patient is responding positively to treatment, continue with therapy sessions.",
    },
  },
  {
    no: "T006",
    hospital: "Unity Wellness Center",
    name: "Dr. Benjamin Turner",
    plan: "07/15/2024",
    details: {
      presentingProblem: "Knee injury",
      diagnosis: "Meniscus tear",
      goalAndObjective: "Restore knee functionality, reduce pain",
      treatmentMethod: "Arthroscopic surgery, physical rehabilitation",
      doctorNote:
        "Surgery successful, patient is advised to follow the rehabilitation plan.",
    },
  },
];

class RowContent extends React.Component {
  render() {
    const rowData = data[this.props.index];

    if (!rowData || !rowData.details) {
      return (
        <div>
          <p>No details available</p>
        </div>
      );
    }

    const { details } = rowData;

    return (
      <div>
        <table className="treat-table">
          <tbody className="treat-body">
            <tr>
              <td
                style={{ fontWeight: "bold", backgroundColor: '#f0f0f0' }}
                colSpan="2"
                className="treat-border"
              >
                Presenting Problem | Diagnosis
              </td>
            </tr>
            <tr>
              <td colspan="2" className="treat-border">
                {details.presentingProblem}
              </td>
            </tr>
            <tr>
              <td colspan="2" className="treat-border">
                {details.diagnosis}
              </td>
            </tr>
            <tr>
              <td
                style={{ fontWeight: "bold", backgroundColor: '#f0f0f0' }}
                colSpan="2"
                className="treat-border"
              >
                Goal and Objective | Treatment Method
              </td>
            </tr>
            <tr>
              <td colspan="2" className="treat-border">
                {details.goalAndObjective}
              </td>
            </tr>
            <tr>
              <td colspan="2" className="treat-border">
                {details.treatmentMethod}
              </td>
            </tr>
            <tr>
              <th style={{backgroundColor: '#f0f0f0' }} colspan="2" className="treat-border">
                Doctor Note
              </th>
            </tr>
            <tr>
              <td colspan="2" className="treat-border">
                {details.doctorNote}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TreatmentPlan;
