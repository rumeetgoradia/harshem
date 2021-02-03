import { makeStyles } from "@material-ui/core/styles"

const useFormSelectStyles = makeStyles((theme) => ({
	label: {
		textTransform: "uppercase",
		fontSize: theme.typography.fontSize,
		fontWeight: 500,
	},
}))

export default useFormSelectStyles
