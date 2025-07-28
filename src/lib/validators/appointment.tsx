import { z } from "zod";
import { APPOINTMENT_TYPES, OFFICES, PROVIDERS } from "~/lib/constants";

// Helper arrays for enum validation
const officeNames = OFFICES.map((o) => o.title) as [string, ...string[]];
const providerNames = [
  "No Preference",
  ...PROVIDERS.map((p) => p.name),
] as [string, ...string[]];

// ====== Step Schemas ======
export const step1PatientSchema = z.object({
  firstName: z.string().min(2, "First name is required."),
  lastName: z.string().min(2, "Last name is required."),
  dateOfBirth: z.string().min(1, "Date of birth is required."),
  phone: z.string().min(10, "A valid phone number is required."),
  email: z.string().email("A valid email address is required."),
});

export const step2AppointmentSchema = z.object({
  officePreference: z.enum(officeNames, {
    errorMap: () => ({ message: "Please select an office." }),
  }),
  providerPreference: z.enum(providerNames, {
    errorMap: () => ({ message: "Please select a provider." }),
  }),
  appointmentType: z.enum(APPOINTMENT_TYPES, {
    errorMap: () => ({ message: "Please select an appointment type." }),
  }),
});

export const step3DateSchema = z.object({
  firstDatePreference: z.string().min(1, "Please select a date."),
  firstTimePreference: z.string().min(1, "Please select a time."),
  secondDatePreference: z.string().optional(),
  secondTimePreference: z.string().optional(),
});

export const step4SubmitSchema = z.object({
  newPatient: z.boolean().default(false),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions to proceed.",
  }),
});

// ====== Master Schema ======
export const appointmentFormSchema = step1PatientSchema
  .merge(step2AppointmentSchema)
  .merge(step3DateSchema)
  .merge(step4SubmitSchema)
  .refine(
    (data) => {
      if (data.secondDatePreference && data.secondDatePreference !== "" && !data.secondTimePreference) {
        return false;
      }
      return true;
    },
    {
      message: "Please select a time for your second date preference.",
      path: ["secondTimePreference"],
    }
  );

export type AppointmentFormData = z.infer<typeof appointmentFormSchema>;