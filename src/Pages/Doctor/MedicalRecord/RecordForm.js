import { useMultiStepForm } from "./Accordion/useMultiStepForm";
import PInfor from "./Form/PatientInfor";
import MSDoc from "./Form/MSDoc";
import CreateBill from "./Form/CreateBill";
import TreatmentPlan from "./Form/TreatmentPlan";

function RecordForm() {
  const {step, isFirstStep, isLastStep, back, next } = useMultiStepForm([
    <PInfor />,
    <MSDoc />,
    <TreatmentPlan />,
    <CreateBill />,
  ]);

  return (
    <div className="record-form-container">
      <form>
        {step}
        <div className="button-container">
          {!isFirstStep && (
            <button type="button" className="previous-button" onClick={back}>
              Previous Page
            </button>
          )}
          <button type="button" className="next-button" onClick={next}>
            {isLastStep ? "Finish" : "Next Page"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default RecordForm;
