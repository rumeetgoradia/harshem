import { makeStyles } from "@material-ui/core/styles"

const useIntroductionStyles = makeStyles((theme) => ({
	logoContainer: {
		textAlign: "center",
	},
	logo: {
		width: "100%",
		height: "auto",
		maxWidth: 250,
		fill: theme.palette.text.primary,
		transition: theme.transitions.create("fill"),
		"&:hover": {
			fill: theme.palette.primary.main,
		},
		[theme.breakpoints.up("md")]: {
			maxWidth: "none",
		},
	},
}))

export default useIntroductionStyles
