import { type AppointmentFormData } from "~/lib/validators/appointment";

export interface FormState {
  currentStep: number;
  formData: Partial<AppointmentFormData>;
}

export type FormAction =
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "UPDATE_FORM_DATA"; payload: Partial<AppointmentFormData> }
  | { type: "RESET" };