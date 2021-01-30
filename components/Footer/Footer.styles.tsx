import { fade, makeStyles } from "@material-ui/core/styles"

const useFooterStyles = makeStyles((theme) => ({
	root: {
		padding: `0 ${theme.spacing(4.5)}px`,
	},
	header: {
		width: "100%",
		justifyContent: "center",
		[theme.breakpoints.up("md")]: {
			justifyContent: "flex-start",
		},
	},
	titleContainer: {
		paddingRight: theme.spacing(3.5),
		[theme.breakpoints.up("sm")]: {
			justifyContent: "flex-start",
		},
	},
	logo: {
		fill: theme.palette.common.white,
		width: "auto",
		height: 100,
		[theme.breakpoints.up("sm")]: {
			height: 70,
			marginRight: theme.spacing(1.5),
		},
	},
	title: {
		fontWeight: 700,
		display: "none",
		fontSize: theme.typography.fontSize * 1.25,
		textAlign: "center",
		[theme.breakpoints.up("sm")]: {
			display: "block",
			fontSize: theme.typography.fontSize * 1.75,
		},
		[theme.breakpoints.up("md")]: {
			fontSize: theme.typography.fontSize * 2,
		},
	},
	contactContainer: {
		flexDirection: "column",
		paddingLeft: theme.spacing(3.5),
		borderLeft: `1px solid ${fade(theme.palette.primary.main, 0.7)}`,
		[theme.breakpoints.up("md")]: {
			flexDirection: "row",
		},
	},
	contactButton: {
		color: theme.palette.primary.light,
		height: 51.72,
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
		opacity: 0.85,
		color: theme.palette.common.white,
		fontSize: theme.typography.fontSize,
		textTransform: "uppercase",
		borderBottom: "2px solid transparent",
		paddingBottom: theme.spacing(0.5),
		transition: theme.transitions.create(["opacity", "border-bottom-color"]),
		"&:hover, &:focus": {
			textDecoration: "none",
			borderBottomColor: theme.palette.common.white,
			opacity: 1,
		},
	},
	copyright: {
		fontSize: theme.typography.fontSize * 0.75,
		opacity: 0.75,
	},
}))

export default useFooterStyles
