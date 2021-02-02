import { makeStyles } from "@material-ui/core"

const useMasonryGridStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		marginRight: 0,
		marginLeft: -theme.spacing(1.5),
		marginBottom: -theme.spacing(1.5),
		width: "auto",
	},
	col: {
		paddingLeft: theme.spacing(1.5),
		backgroundClip: "padding-box",
		"& .MuiPaper-root": {
			marginBottom: theme.spacing(1.5),
		},
	},
}))

export default useMasonryGridStyles
