import React, { useState } from "react";
import RecordList from "./RecordList";
import RecordForm from "./RecordForm";
import "./MRecord.scss"; // Assuming MRecord.scss contains styles for this component.

// React functional component for managing medical records
function MedicalRecord() {
  // State to track the active content (Record List or Record Form)
  const [active, setActive] = useState("FirstContent");

  return (
    <div className="MR">
      {/* Main container for the Medical Record component */}
      <div className="center-container">
        {/* Switch buttons to toggle between Record List and Record Form */}
        <div className="switch-buttons">
          {/* Button for Record List */}
          <button
            className={active === "FirstContent" ? "active" : ""}
            onClick={() => setActive("FirstContent")}
          >
            Record List
          </button>
          {/* Button for Record Form */}
          <button
            className={active === "SecondContent" ? "active" : ""}
            onClick={() => setActive("SecondContent")}
          >
            Record Form
          </button>
        </div>

        {/* Container for displaying the active content (Record List or Record Form) */}
        <div className="content-container">
          {/* Render Record List if active is "FirstContent" */}
          {active === "FirstContent" && <RecordList />}
          
          {/* Render Record Form if active is "SecondContent" */}
          {active === "SecondContent" && <RecordForm />}
        </div>
      </div>
    </div>
  );
}

// Export the component
export default MedicalRecord;
