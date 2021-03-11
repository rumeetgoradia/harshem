import { makeStyles } from "@material-ui/core/styles"

const useMasonryGridItemStyles = makeStyles((theme) => ({
	root: {
		borderRadius: theme.shape.borderRadius,
		padding: theme.spacing(2),
		marginBottom: theme.spacing(1.5),
		color: theme.palette.text.primary,
		border: `1px solid ${theme.palette.text.primary}`,
		opacity: 0.85,
		transition: theme.transitions.create(["border-color", "color", "opacity"]),
		"&:hover": {
			borderColor: theme.palette.primary.main,
			color: theme.palette.primary.main,
			opacity: 1,
		},
	},
	title: {
		fontWeight: 500,
		fontSize: theme.typography.fontSize * 1.25,
	},
	note: {
		marginTop: theme.spacing(0.75),
		fontSize: theme.typography.fontSize,
		fontStyle: "italic",
		fontWeight: 300,
		lineHeight: 1,
	},
}))

export default useMasonryGridItemStyles
