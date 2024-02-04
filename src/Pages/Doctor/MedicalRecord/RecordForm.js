import { useMultiStepForm } from "./Accordion/useMultiStepForm";
import PInfor from "./Form/PatientInfor";
import MSDoc from "./Form/MSDoc";
import CreateBill from "./Form/CreateBill";
import TreatmentPlan from "./Form/TreatmentPlan";

// React functional component for the Record Form
function RecordForm() {
  // Use the custom hook useMultiStepForm to manage multi-step form functionality
  const { step, isFirstStep, isLastStep, back, next } = useMultiStepForm([
    <PInfor />,
    <MSDoc />,
    <TreatmentPlan />,
    <CreateBill />,
  ]);

  return (
    <div className="record-form-container">
      {/* Form container with steps */}
      <form>
        {step}

        {/* Button container for navigation between form steps */}
        <div className="button-container">
          {/* Render "Previous Page" button if not on the first step */}
          {!isFirstStep && (
            <button type="button" className="previous-button" onClick={back}>
              Previous Page
            </button>
          )}

          {/* Render "Next Page" or "Finish" button based on the step */}
          <button type="button" className="next-button" onClick={next}>
            {isLastStep ? "Finish" : "Next Page"}
          </button>
        </div>
      </form>
    </div>
  );
}

// Export the component
export default RecordForm;
