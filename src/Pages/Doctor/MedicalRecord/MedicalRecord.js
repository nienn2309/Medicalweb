import RecordList from "./RecordList";
import RecordForm from "./RecordForm";
import './MRecord.scss'; 
import React, {useState} from "react";

function MedicalRecord() {
    const [active, setActive] = useState("FirstContent");
    return (
        <div className="MR">
            <nav>
                <button onClick={() => setActive("FirstContent")}>Record List</button>
                <button onClick={() => setActive("SecondContent")}>Record Form</button>
            </nav>
            <div>
                {active === "FirstContent" && <RecordList/>}
                {active === "SecondContent" && <RecordForm/>}
            </div>
        </div>
    );
}

export default MedicalRecord;