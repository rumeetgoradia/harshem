import { makeStyles } from "@material-ui/core/styles"

const useFormTextFieldStyles = makeStyles((theme) => ({
	label: {
		textTransform: "uppercase",
		fontSize: theme.typography.fontSize,
		fontWeight: 500,
		lineHeight: 1,
	},
}))

export default useFormTextFieldStyles
