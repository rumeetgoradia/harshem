import { BaseTextFieldProps, TextField } from "@material-ui/core"
import { FieldError } from "react-hook-form"
import useFormTextFieldStyles from "./FormTextField.styles"

interface FormTextFieldProps extends BaseTextFieldProps {
	name: string
	label: string
	inputRef?: React.Ref<any>
	schemaError: FieldError | undefined
}

const FormTextField: React.FC<FormTextFieldProps> = ({
	name,
	label,
	inputRef,
	schemaError,
	...props
}) => {
	const classes = useFormTextFieldStyles()

	return (
		<TextField
			inputRef={inputRef}
			name={name}
			id={name}
			label={label}
			fullWidth
			error={!!schemaError}
			InputLabelProps={{
				className: classes.label,
			}}
			helperText={schemaError?.message}
			variant="outlined"
			{...props}
		/>
	)
}

export default FormTextField
