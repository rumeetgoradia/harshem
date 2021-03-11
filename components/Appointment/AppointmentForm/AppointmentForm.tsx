import {
	FormDatePicker,
	FormRadioGroup,
	FormSelect,
	FormTextField,
} from "@/components/Form"
import {
	AppointmentFormInputs,
	APPOINTMENT_CHOICES,
	APPOINTMENT_FORM_SCHEMA,
} from "@/constants"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button, FormHelperText, Grid } from "@material-ui/core"
import axios from "axios"
import { useEffect, useState } from "react"
import "react-datepicker/dist/react-datepicker.css"
import { useForm } from "react-hook-form"
import useAppointmentFormStyles from "./AppointmentForm.styles"

const AppointmentForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		errors,
		formState,
		reset,
		control,
	} = useForm<AppointmentFormInputs>({
		resolver: yupResolver(APPOINTMENT_FORM_SCHEMA),
		mode: "all",
	})
	const { isValid, isSubmitting } = formState
	const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false)

	const onSubmit = (data: AppointmentFormInputs) => {
		axios({
			method: "POST",
			url: process.env.NEXT_PUBLIC_APPOINTMENT_FORM_URL,
			data,
		})
			.then(() => {
				reset({})
				setIsSubmitSuccessful(true)
			})
			.catch(() => {
				alert(
					"There was an issue sending your appointment request. Please try again later!"
				)
				setIsSubmitSuccessful(false)
			})
	}

	useEffect(() => {
		if (isSubmitSuccessful) {
			const timeout = setTimeout(() => {
				setIsSubmitSuccessful(false)
				clearTimeout(timeout)
			}, 30000)
		}
	}, [isSubmitSuccessful])

	const classes = useAppointmentFormStyles()

	return (
		<form onSubmit={handleSubmit(onSubmit)} name="appointment" method="POST">
			<input type="hidden" name="form-name" value="appointment" />
			<Grid container spacing={3}>
				<Grid item xs={12} md={4}>
					<FormTextField
						inputRef={register}
						name="firstName"
						label="First Name"
						required
						schemaError={errors.firstName}
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<FormTextField
						inputRef={register}
						name="lastName"
						label="Last Name"
						required
						schemaError={errors.lastName}
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<FormDatePicker
						control={control}
						label="Date of Birth"
						name="dateOfBirth"
						required
						schemaError={errors.dateOfBirth}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormTextField
						inputRef={register}
						name="email"
						label="Email Address"
						schemaError={errors.email}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormTextField
						inputRef={register}
						name="phone"
						label="Phone Number"
						required
						schemaError={errors.phone}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormRadioGroup
						control={control}
						name="newPatient"
						label="Are you a new patient?"
						required
						options={[
							{ label: "Yes", value: "yes" },
							{ label: "No", value: "no" },
						]}
						schemaError={errors.newPatient}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormSelect
						control={control}
						label="Appointment Type"
						name="appointmentType"
						required
						schemaError={errors.appointmentType}
						choices={APPOINTMENT_CHOICES.appointmentType}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormSelect
						control={control}
						label="Office Preference"
						name="officePreference"
						schemaError={errors.officePreference}
						choices={APPOINTMENT_CHOICES.office}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormSelect
						control={control}
						label="Provider Preference"
						name="providerPreference"
						schemaError={errors.providerPreference}
						choices={APPOINTMENT_CHOICES.provider}
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<FormDatePicker
						control={control}
						required
						label="First Date Preference"
						name="firstDatePreference"
						schemaError={errors.firstDatePreference}
						showTime
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<FormDatePicker
						control={control}
						label="Second Date Preference"
						name="secondDatePreference"
						schemaError={errors.secondDatePreference}
						showTime
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<FormDatePicker
						control={control}
						label="Third Date Preference"
						name="thirdDatePreference"
						schemaError={errors.thirdDatePreference}
						showTime
					/>
				</Grid>
				<Grid item xs={12}>
					<Button
						variant="outlined"
						disabled={!isValid}
						color="primary"
						type="submit"
						fullWidth
					>
						{isSubmitting ? "Submitting..." : "Submit"}
					</Button>
					{isSubmitSuccessful && (
						<FormHelperText className={classes.success}>
							Message sent successfully!
						</FormHelperText>
					)}
				</Grid>
			</Grid>
		</form>
	)
}

export default AppointmentForm
