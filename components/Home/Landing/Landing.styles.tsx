import { fade, makeStyles } from "@material-ui/core/styles"

const useLandingStyles = makeStyles((theme) => ({
	root: {
		height: "65vh",
		width: "100%",
		"& .react-parallax-background-children": {
			width: "100%",
			height: "100%",
		},
	},
	background: {
		height: "100%",
		width: "100%",
		position: "relative",
		overflow: "hidden",
	},
	blurredImage: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		width: "100%",
		height: "100%",
		objectFit: "cover",
		objectPosition: "center",
		filter: "blur(2rem)",
		transform: "scale(1.2)",
	},
	content: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
		color: theme.palette.common.white,
		textShadow: `2px 2px 6px ${fade(theme.palette.common.black, 0.4)}`,
		backgroundColor: fade(theme.palette.common.black, 0.35),
		padding: `0 ${theme.spacing(2.5)}px`,
		[theme.breakpoints.up("lg")]: {
			padding: `0 ${theme.spacing(2)}px`,
		},
	},
	title: {
		fontWeight: 600,
		fontSize: "calc(3rem + 2.5vw)",
		marginBottom: theme.spacing(2),
		letterSpacing: 1,
	},
	subtitle: {
		fontSize: "calc(1rem + 1.5vw)",
		fontStyle: "italic",
		marginBottom: theme.spacing(1),
		"& span": {
			fontWeight: "500",
		},
	},
}))

export default useLandingStyles
