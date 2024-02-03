import React, { useState } from "react";
import RecordList from "./RecordList";
import RecordForm from "./RecordForm";
import "./MRecord.scss";

function MedicalRecord() {
  const [active, setActive] = useState("FirstContent");

  return (
    <div className="MR">
      <div className="center-container">
        <div className="switch-buttons">
          <button
            className={active === "FirstContent" ? "active" : ""}
            onClick={() => setActive("FirstContent")}
          >
            Record List
          </button>
          <button
            className={active === "SecondContent" ? "active" : ""}
            onClick={() => setActive("SecondContent")}
          >
            Record Form
          </button>
        </div>
        <div className="content-container">
          {active === "FirstContent" && <RecordList />}
          {active === "SecondContent" && <RecordForm />}
        </div>
      </div>
    </div>
  );
}

export default MedicalRecord;
