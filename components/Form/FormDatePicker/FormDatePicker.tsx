import { BaseTextFieldProps } from "@material-ui/core"
import DatePicker from "react-datepicker"
import { Control, Controller, FieldError } from "react-hook-form"
import { FormTextField } from ".."
import useFormDatePickerStyles from "./FormDatePicker.styles"

interface FormDatePickerProps extends BaseTextFieldProps {
	control: Control
	name: string
	label: string
	schemaError: FieldError | undefined
	showTime?: boolean
}

const FormDatePicker: React.FC<FormDatePickerProps> = ({
	control,
	label,
	name,
	schemaError,
	showTime,
	required,
}) => {
	const classes = useFormDatePickerStyles()

	return (
		<div className={classes.root}>
			<Controller
				name={name}
				control={control}
				render={(props) => (
					<DatePicker
						onChange={(date) => props.onChange(date?.toLocaleString())}
						onBlur={() => props.onBlur()}
						required={required}
						selected={props.value ? new Date(props.value) : undefined}
						showTimeSelect={showTime}
						dateFormat={showTime ? "MM/dd/yyyy h:mm aa" : "MM/dd/yyyy"}
						timeFormat="h:mm aa"
						customInput={
							<FormTextField
								name={name}
								label={label}
								schemaError={schemaError}
							/>
						}
					/>
				)}
			/>
		</div>
	)
}

export default FormDatePicker
