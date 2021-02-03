import * as yup from "yup"

export const APPOINTMENT_CHOICES = {
	office: ["Rahway", "Elizabeth"],
	provider: ["Dr. Goradia", "Dr. Dancel"],
	appointmentType: [
		"Sick Visit",
		"Follow Up",
		"Annual/Wellness",
		"Pre-Op Clearance",
		"Women's Health Issues",
	],
}

export const APPOINTMENT_FORM_SCHEMA = yup.object({
	firstName: yup.string().required("Please enter your first name."),
	lastName: yup.string().required("Please enter your last name."),
	dateOfBirth: yup.string().required("Please enter your date of birth."),
	phone: yup
		.string()
		.required("Please enter your phone number.")
		.matches(
			/^$|^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
			"Please enter a valid phone number."
		),
	email: yup.string().email("Please enter a valid email."),
	newPatient: yup
		.string()
		.required("Please indicate if you are a new or existing patient."),
	appointmentType: yup
		.string()
		.required("Please choose the type of appointment you are requesting."),
	firstDatePreference: yup
		.string()
		.required("Please choose your preferred appointment date and time."),
})
