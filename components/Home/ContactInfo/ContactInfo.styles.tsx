import { makeStyles } from "@material-ui/core/styles"

const useContactInfoStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.primary.light,
		padding: `${theme.spacing(4)}px 0`,
	},
	link: {
		fontWeight: 500,
		textAlign: "center",
		textDecoration: "none",
		color: theme.palette.text.primary,
		fontSize: theme.typography.fontSize,
		[theme.breakpoints.up("md")]: {
			fontSize: theme.typography.fontSize * 1.25,
		},
	},
	button: {
		color: theme.palette.primary.light,
		backgroundColor: theme.palette.common.white,
		"&:hover, &:active": {
			backgroundColor: theme.palette.common.white,
		},
	},
}))

export default useContactInfoStyles
