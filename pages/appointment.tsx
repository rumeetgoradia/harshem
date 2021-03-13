import { AppointmentForm } from "@/components/Appointment"
import { HeroLayout } from "@/components/Layout"
import { Content, Header } from "@/components/Typography"
import { APPOINTMENT_REQUEST_INTRO } from "@/content"
import { Grid, Typography } from "@material-ui/core"

const AppointmentPage: React.FC = () => {
	return (
		<HeroLayout title="Appointment">
			<Grid item xs={12}>
				<Header>Request an Appointment</Header>
				<Content>
					{APPOINTMENT_REQUEST_INTRO.map((paragraph, index) => (
						<Typography
							variant="body1"
							key={`appointment-request-intro-paragraph-${index}`}
						>
							{paragraph}
						</Typography>
					))}
					<AppointmentForm />
				</Content>
			</Grid>
		</HeroLayout>
	)
}

export default AppointmentPage
