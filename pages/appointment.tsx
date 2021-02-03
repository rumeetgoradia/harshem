import { AppointmentForm } from "@/components/Appointment"
import { HeroLayout } from "@/components/Layout"
import { Content, Header } from "@/components/Typography"
import { Grid, Typography } from "@material-ui/core"

const AppointmentPage: React.FC = () => {
	return (
		<HeroLayout title="Appointment">
			<Grid item xs={12}>
				<Header>Request an Appointment</Header>
				<Content>
					<Typography variant="body1">
						Walk-ins are welcome! If you need an urgent, same-day, or next-day
						appointment, please call the appropriate office location. We look
						forward to seeing you soon!
					</Typography>
					<Typography variant="body1">
						Use this form for non-urgent appointments only.
					</Typography>
					<AppointmentForm />
				</Content>
			</Grid>
		</HeroLayout>
	)
}

export default AppointmentPage
