import { makeStyles } from "@material-ui/core/styles"

const useProviderDisplayStyles = makeStyles((theme) => ({
	xsImgGridItem: {
		display: "block",
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
	mdImgGridItem: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "block",
		},
	},
	imageContainer: {
		position: "relative",
		overflow: "hidden",
		borderRadius: "50%",
		border: `8px solid ${theme.palette.text.primary}`,
		opacity: 0.85,
		width: "100%",
		maxWidth: 350,
		aspectRatio: "1 / 1",
		margin: "0 auto",
		transition: theme.transitions.create(["border-color", "opacity"]),
		"&:hover": {
			opacity: 1,
			borderColor: theme.palette.primary.main,
		},
		[theme.breakpoints.up("md")]: {
			maxWidth: "none",
			maxHeight: "none",
		},
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
}))

export default useProviderDisplayStyles
