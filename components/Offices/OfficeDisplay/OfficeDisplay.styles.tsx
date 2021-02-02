import { makeStyles } from "@material-ui/core/styles"

const useOfficeDisplayStyles = makeStyles((theme) => ({
	hoursContainer: {
		width: "100%",
		maxWidth: 300,
	},
	hoursTitle: {
		fontSize: theme.typography.fontSize,
		fontWeight: 600,
		textTransform: "uppercase",
		textAlign: "center",
		borderBottom: `1px solid ${theme.palette.text.primary}`,
	},
	day: {
		fontWeight: 500,
		textTransform: "capitalize",
		borderRight: `1px solid ${theme.palette.text.primary}`,
	},
}))

export default useOfficeDisplayStyles
