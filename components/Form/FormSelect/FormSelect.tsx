import {
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
} from "@material-ui/core"
import { Control, Controller, FieldError } from "react-hook-form"
import useFormSelectStyles from "./FormSelect.styles"

interface FormSelectProps {
	control: Control
	name: string
	label: string
	choices: string[]
	required?: boolean
	schemaError: FieldError | undefined
}

const FormSelect: React.FC<FormSelectProps> = ({
	control,
	name,
	label,
	choices,
	required,
	schemaError,
}) => {
	const classes = useFormSelectStyles()

	return (
		<Controller
			name={name}
			control={control}
			defaultValue=""
			render={(props) => (
				<FormControl fullWidth error={!!schemaError} variant="outlined">
					<InputLabel
						id={`${name}-label`}
						className={classes.label}
						required={required}
					>
						{label}
					</InputLabel>
					<Select
						labelId={`${name}-label`}
						id={name}
						value={props.value}
						label={label}
						onChange={(_props) => {
							props.onChange(_props.target.value)
						}}
						onBlur={() => props.onBlur()}
					>
						<MenuItem value="">None</MenuItem>
						{choices.map((choice, index) => (
							<MenuItem value={choice} key={`${name}-select-choice-${index}`}>
								{choice}
							</MenuItem>
						))}
					</Select>
					<FormHelperText>{schemaError?.message}</FormHelperText>
				</FormControl>
			)}
		/>
	)
}

export default FormSelect
