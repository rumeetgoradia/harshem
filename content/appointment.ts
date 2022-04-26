export const APPOINTMENT_TYPES = [
	"Sick Visit",
	"Follow Up",
	"Annual/Wellness",
	"Pre-Op Clearance",
	"Women's Health Issues",
]

export type PatientStepFields = {
	firstName: string
	lastName: string
	dateOfBirth: string
	phone: string
	email: string
}

export type AppointmentStepFields = {
	officePreference: string
	providerPreference: string
	appointmentType: string
}

export type DateStepFields = {
	firstDatePreference: string
	firstTimePreference: string
	secondDatePreference?: string
	secondTimePreference?: string
}

export type SubmitStepFields = {
	newPatient: boolean
	agreeToTerms: boolean
}

export type AppointmentFormData = PatientStepFields &
	AppointmentStepFields &
	DateStepFields &
	SubmitStepFields
