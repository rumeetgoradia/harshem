import { makeStyles } from "@material-ui/core/styles"

const useFooterStyles = makeStyles((theme) => ({
	root: {
		padding: `0 ${theme.spacing(4.5)}px`,
		opacity: 0.75,
	},
	titleContainer: {
		justifyContent: "center",
		[theme.breakpoints.up("sm")]: {
			justifyContent: "flex-start",
		},
	},
	logo: {
		fill: theme.palette.common.white,
		width: "auto",
		marginRight: theme.spacing(2),
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
			height: 40,
		},
	},
	title: {
		fontWeight: 700,
		fontSize: theme.typography.fontSize * 1.25,
		textAlign: "center",
		[theme.breakpoints.up("sm")]: {
			fontSize: theme.typography.fontSize * 1.75,
		},
		[theme.breakpoints.up("md")]: {
			fontSize: theme.typography.fontSize * 2,
		},
	},
	contactContainer: {
		justifyContent: "center",
		[theme.breakpoints.up("sm")]: {
			justifyContent: "flex-start",
		},
	},
	contactLink: {
		fontWeight: 500,
		textAlign: "center",
		textDecoration: "none",
		color: theme.palette.common.white,
		fontSize: theme.typography.fontSize,
		"&:first-child": {
			marginBottom: theme.spacing(1),
		},
		[theme.breakpoints.up("sm")]: {
			textAlign: "left",
		},
		[theme.breakpoints.up("md")]: {
			fontSize: theme.typography.fontSize * 1.25,
		},
	},
	navLinksWrapper: {
		[theme.breakpoints.up("md")]: {
			marginTop: theme.spacing(6.75),
		},
	},
	navLinkContainer: {
		textAlign: "center",
		[theme.breakpoints.up("sm")]: {
			textAlign: "left",
		},
	},
	navLink: {
		fontWeight: 500,
		textDecoration: "none",
		color: theme.palette.common.white,
		fontSize: theme.typography.fontSize,
		textTransform: "uppercase",
	},
}))

export default useFooterStyles
