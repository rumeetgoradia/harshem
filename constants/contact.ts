import * as yup from "yup"

export const PHONE = "(732) 388-3006"

export const EMAIL = "info@harshemfamilypractice.com"

export const CONTACT_FORM_SCHEMA = yup.object().shape({
	firstName: yup.string().required("Please enter your first name."),
	lastName: yup.string().required("Please enter your last name."),
	phone: yup
		.string()
		.required("Please enter your phone number.")
		.matches(
			/^$|^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
			"Please enter a valid phone number."
		),
	email: yup.string().email("Please enter a valid email."),
	message: yup.string().required("Please enter a message."),
})
