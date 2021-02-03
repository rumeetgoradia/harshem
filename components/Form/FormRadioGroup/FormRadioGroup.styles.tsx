import { makeStyles } from "@material-ui/core/styles"

const useFormRadioGroupStyles = makeStyles((theme) => ({
	label: {
		textTransform: "uppercase",
		fontSize: theme.typography.fontSize,
		fontWeight: 500,
	},
	radioGroup: {
		display: "flex",
		flexDirection: "row",
	},
	radio: {
		marginRight: theme.spacing(6),
	},
	radioLabel: {
		fontSize: theme.typography.fontSize,
	},
}))

export default useFormRadioGroupStyles
