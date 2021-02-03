import { fade, makeStyles } from "@material-ui/core/styles"

const useHeroStyles = makeStyles((theme) => ({
	root: {
		height: "35vh",
		width: "100%",
		background: theme.palette.primary.main,
		"& .react-parallax-background-children": {
			width: "100%",
			height: "100%",
		},
		[theme.breakpoints.up("md")]: {
			height: "45vh",
		},
	},
	background: {
		height: "100%",
		width: "100%",
		position: "relative",
		overflow: "hidden",
	},
	content: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
		textShadow: `2px 2px 6px ${fade(theme.palette.common.black, 0.4)}`,
		backgroundColor: fade(theme.palette.common.black, 0.45),
		padding: `84px ${theme.spacing(2.5)}px 42px`,
		[theme.breakpoints.up("md")]: {
			padding: `0 ${theme.spacing(2.5)}px`,
		},
		[theme.breakpoints.up("lg")]: {
			padding: `0 ${theme.spacing(2)}px`,
		},
	},
	title: {
		color: theme.palette.common.white,
		fontWeight: 500,
		textTransform: "uppercase",
		fontSize: theme.typography.fontSize * 2.5,
		[theme.breakpoints.up("sm")]: {
			fontSize: theme.typography.fontSize * 4,
		},
		[theme.breakpoints.up("md")]: {
			fontSize: theme.typography.fontSize * 5,
		},
		[theme.breakpoints.up("lg")]: {
			fontSize: theme.typography.fontSize * 6,
		},
	},
}))

export default useHeroStyles
