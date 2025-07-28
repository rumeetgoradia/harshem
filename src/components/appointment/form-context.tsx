"use client";

import {
  createContext,
  useContext,
  useReducer,
  type Dispatch,
  type ReactNode,
} from "react";
import {
  type FormState,
  type FormAction,
} from "~/lib/types/appointment-form";

// Initial state for our form
const initialState: FormState = {
  currentStep: 0,
  formData: {},
};

// The reducer function handles all state updates
function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, currentStep: state.currentStep + 1 };
    case "PREV_STEP":
      return { ...state, currentStep: state.currentStep - 1 };
    case "UPDATE_FORM_DATA":
      return {
        ...state,
        formData: { ...state.formData, ...action.payload },
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

// Create the context with a default value
const FormContext = createContext<{
  state: FormState;
  dispatch: Dispatch<FormAction>;
} | null>(null);

// Create the provider component
export function AppointmentFormProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}

// Custom hook for easy access to the context
export function useAppointmentForm() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error(
      "useAppointmentForm must be used within an AppointmentFormProvider",
    );
  }
  return context;
}