import { makeStyles } from "@material-ui/core/styles"

const useNavMenuStyles = makeStyles((theme) => ({
	root: {
		flexDirection: "column",
		width: "100%",
		[theme.breakpoints.up("md")]: {
			flexDirection: "row",
			width: "auto",
		},
	},
	navItem: {
		color: theme.palette.common.white,
		opacity: 0.85,
		textAlign: "center",
		fontSize: theme.typography.fontSize * 1.25,
		fontWeight: 600,
		letterSpacing: 2,
		textTransform: "uppercase",
		padding: `${theme.spacing(1.25)}px ${theme.spacing(1.5) - 2}px 
					${theme.spacing(1.25)}px ${theme.spacing(1.5)}px`,
		margin: `${theme.spacing(1)}px 0`,
		borderBottom: "2px solid transparent",
		transition: theme.transitions.create(["opacity", "border-bottom-color"]),
		"&:hover": {
			borderBottomColor: theme.palette.common.white,
		},
		"&:hover, &:focus": {
			opacity: 1,
			textDecoration: "none",
		},
		[theme.breakpoints.up("md")]: {
			fontSize: theme.typography.fontSize,
			borderBottom: "2px solid transparent",
			padding: `${theme.spacing(1)}px ${theme.spacing(1.5)}px `,
			margin: `0 ${theme.spacing(1)}px`,
			letterSpacing: 0,
			transition: theme.transitions.create([
				"opacity",
				"border-bottom-color",
				"padding",
				"color",
			]),
		},
	},
	navItemCta: {
		width: 300,
		borderRadius: theme.shape.borderRadius,
		padding: `${theme.spacing(2.5)}px 0 ${theme.spacing(2.5)}px 3px`,
		backgroundColor: theme.palette.common.white,
		color: theme.palette.primary.main,
		borderBottom: "none",
		opacity: 1,
		boxShadow: theme.shadows[2],
		letterSpacing: 3,
		transition: theme.transitions.create("transform"),
		"&:hover": {
			transform: "scale(1.05)",
		},
		"&:active": {
			transform: "scale(0.95)",
		},
		[theme.breakpoints.up("md")]: {
			width: "auto",
			padding: `${theme.spacing(1.5)}px ${theme.spacing(2.5)}px`,
			letterSpacing: 0,
		},
	},
	navItemActive: {
		opacity: 1,
		borderBottomColor: theme.palette.common.white,
		color: theme.palette.common.white,
	},
}))

export default useNavMenuStyles
