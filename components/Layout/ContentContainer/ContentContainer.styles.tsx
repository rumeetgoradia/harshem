import { makeStyles } from "@material-ui/core/styles"

const useContentContainerStyles = makeStyles((theme) => ({
	root: {
		paddingTop: theme.spacing(7),
		paddingBottom: theme.spacing(7),
		[theme.breakpoints.up("md")]: {
			paddingTop: theme.spacing(10),
			paddingBottom: theme.spacing(10),
		},
	},
}))

export default useContentContainerStyles
