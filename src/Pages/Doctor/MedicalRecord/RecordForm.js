import { useMultiStepForm } from "./useMultiStepForm";

function RecordForm() {
    const {steps, currentStepIndex, step, isFirstStep, isLastStep, back, next} = useMultiStepForm([
    <div>One</div>,
    <div>Two</div>,
    <div>Three</div>,
    <div>Four</div>,
    ])
    return (
        <div style={{
            position: "relative",
            background: "white",
            border: "1px solid black",
            padding: "2rem",
            margin: "1rem",
            borderRadius: ".5rem",
            fontFamily: "Arial",
        }}>
            <form>
                <div style={{position: "absolute", top: ".5rem", right: ".5rem"}}>
                    {currentStepIndex + 1}/{steps.length}
                </div>
                {step}
                <div style={{marginTop: "1rem", display: "flex", gap: ".5rem", justifyContent: "flex-end"}}>
                    {!isFirstStep && <button type="button" onClick={back}>Previous Page</button>}
                    <button type="button" onClick={next}>{isLastStep ? "Finish" : "Next Page"}</button>
                </div>
            </form>
        </div>
    );
}

export default RecordForm;