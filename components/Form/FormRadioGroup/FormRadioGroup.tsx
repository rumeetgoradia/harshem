import {
	FormControl,
	FormControlLabel,
	FormHelperText,
	FormLabel,
	Radio,
	RadioGroup,
} from "@material-ui/core"
import { Control, Controller, FieldError } from "react-hook-form"
import useFormRadioGroupStyles from "./FormRadioGroup.styles"

interface FormRadioGroupProps {
	control: Control
	name: string
	label: string
	options: {
		label: string
		value: string
	}[]
	required?: boolean
	schemaError: FieldError | undefined
}

const FormRadioGroup: React.FC<FormRadioGroupProps> = ({
	control,
	label,
	name,
	options,
	required,
	schemaError,
}) => {
	const classes = useFormRadioGroupStyles()

	return (
		<Controller
			name={name}
			control={control}
			render={(props) => (
				<FormControl
					component="fieldset"
					error={!!schemaError}
					variant="outlined"
					fullWidth
				>
					<div className={classes.root}>
						<FormLabel
							component="legend"
							id={`${name}-label`}
							className={classes.label}
							required={required}
						>
							{label}
						</FormLabel>
						<RadioGroup
							aria-label={label}
							name={name}
							id={name}
							value={props.value}
							onChange={(_props) => props.onChange(_props.target.value)}
							onBlur={() => props.onBlur}
							className={classes.radioGroup}
						>
							{options.map((option, index) => (
								<FormControlLabel
									value={option.value}
									control={<Radio color="primary" />}
									label={option.label}
									classes={{ label: classes.radioLabel, root: classes.radio }}
									key={`${name}-radio-option-${index}`}
								/>
							))}
						</RadioGroup>
					</div>
					<FormHelperText>{schemaError?.message}</FormHelperText>
				</FormControl>
			)}
		/>
	)
}

export default FormRadioGroup
