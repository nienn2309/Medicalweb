import { useState } from "react";
import MSDoc from "./Form/MSDoc";
import CreateBill from "./Form/CreateBill";
import TreatmentPlan from "./Form/TreatmentPlan";
import SearchPa from "./Form/SearchPa";
import { useMultiStepForm } from "./Accordion/useMultiStepForm";
import axios from 'axios';

function RecordForm() {
  const [searchCompleted, setSearchCompleted] = useState(false);
  const [customerId, setCustomerId] = useState(null);
  const handleSearchCompleted = (customerId) => {
    setCustomerId(customerId);
    setSearchCompleted(true);
  };

  // State for formData of each table
  const [msDocData, setMsDocData] = useState(null);
  const [treatmentPlanData, setTreatmentPlanData] = useState(null);
  const [createBillData, setCreateBillData] = useState(null);
  const [msDocTableData, setmsDocTableData] = useState([]);

  // Function to handle data update for each table
  const fetchOtherTableData = () => {
    axios.get(`http://localhost:8080/medical_summary`)
      .then((res) => {
        setmsDocTableData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTreatmentPlanDataUpdate = (data) => {
    setTreatmentPlanData(data);
  };

  const handleCreateBillDataUpdate = (data) => {
    setCreateBillData(data);
  };

  const { step, isFirstStep, isLastStep, back, next } = useMultiStepForm([
    <MSDoc customerId={customerId} />,
    <TreatmentPlan customerId={customerId} />,
    <CreateBill customerId={customerId} />,
  ]);

   // Function to handle form submission
   const handleSubmit = () => {
    // Logic to upload data of all three tables
    if (msDocData && treatmentPlanData && createBillData) {
      // Send data to the server for each table
      // Example:
      // axios.post('/api/msdoc', msDocData);
      // axios.post('/api/treatmentplan', treatmentPlanData);
      // axios.post('/api/createbill', createBillData);
    }
  };

  return (
    <div className="record-form-container">
      <form onSubmit={handleSubmit}>
        {!searchCompleted && (
          <SearchPa onSearchCompleted={handleSearchCompleted} />
        )}
        {searchCompleted && (
          <div>
            {step}
            <div className="button-container">
              {!isFirstStep && (
                <button type="button" className="previous-button" onClick={back}>
                  Previous Page
                </button>
              )}
              <button type="button" className="next-button" onClick={isLastStep ? handleSubmit : next}>
                {isLastStep ? "Finish" : "Next Page"}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default RecordForm;
