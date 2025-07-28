"use client";

import { useAppointmentForm } from "~/components/appointment/form-context"
import { Progress } from "~/components/ui/progress";

import { Step1PatientInfo } from "./steps/step-1-patient-info";
import { Step2AppointmentDetails } from "./steps/step-2-appointment-details";
import { Step3DateSelection } from "./steps/step-3-date-selection";
import { Step4Confirmation } from "./steps/step-4-confirmation";
import { FinishStep } from "./steps/finish-step";

const stepComponents = [
  Step1PatientInfo,
  Step2AppointmentDetails,
  Step3DateSelection,
  Step4Confirmation,
  FinishStep,
];

const TotalSteps = 4; // Total number of form steps before the "Finish" screen

export function AppointmentFormWrapper() {
  const { state } = useAppointmentForm();
  const { currentStep } = state;

  const progress =
    currentStep >= TotalSteps
      ? 100
      : ((currentStep + 1) / TotalSteps) * 100;

  const ActiveStepComponent = stepComponents[currentStep];

  return (
    <div className="space-y-8 rounded-xl border p-6 shadow-lg md:p-8">
      {/* Hide the progress bar on the final "Finish" screen */}
      {currentStep < TotalSteps && (
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            {currentStep === TotalSteps - 1 // Adjust text for the last interactive step
              ? "Final Step: Review & Submit"
              : `Step ${currentStep + 1} of ${TotalSteps}`}
          </p>
          <Progress value={progress} />
        </div>
      )}

      {/* Render the active component */}
      {ActiveStepComponent ? (
        <div>
          <ActiveStepComponent />
        </div>
      ) : (
        <p>Step component not found.</p> // Fallback
      )}
    </div>
  );
}