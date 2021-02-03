import { makeStyles } from "@material-ui/core/styles"

const useAppointmentFormStyles = makeStyles((theme) => ({
	success: {
		textAlign: "center",
		fontWeight: 600,
		textTransform: "uppercase",
		color: theme.palette.primary.main,
		marginTop: theme.spacing(1.5),
	},
}))

export default useAppointmentFormStyles
