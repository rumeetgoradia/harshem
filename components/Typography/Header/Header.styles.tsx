import { makeStyles } from "@material-ui/core/styles"

const useHeaderStyles = makeStyles((theme) => ({
	header: {
		marginBottom: theme.spacing(1.5),
		fontSize: theme.typography.fontSize * 2.5,
		fontWeight: "bold",
	},
	divider: {
		width: 60,
		border: `2px solid ${theme.palette.text.primary}`,
		margin: `0 0 ${theme.spacing(3)}px`,
	},
}))

export default useHeaderStyles
