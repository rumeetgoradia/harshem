import { HeroLayout } from "@/components/Layout"
import { Content, Header, Hyperlink } from "@/components/Typography"
import { Button, Grid, Typography } from "@material-ui/core"
import Link from "next/link"

const FormsPage: React.FC = () => {
	return (
		<HeroLayout title="Patient Forms">
			<Grid item xs={12}>
				<Header>First-Time Registration Form</Header>
				<Content>
					<Typography variant="body1">
						If you are a first-time patient, please fill out the form below and
						bring it with you for your appointment. If you haven't made an
						appointment yet, please visit our{" "}
						<Link href="/appointment" passHref>
							<Hyperlink>appointments page</Hyperlink>
						</Link>{" "}
						or give us a call at <Hyperlink>(732) 388-3006</Hyperlink>.
					</Typography>
					<Button
						href="/Harshem First-Time Patient Registration"
						target="_blank"
						rel="noopener"
						variant="contained"
						color="primary"
					>
						Registration Form
					</Button>
				</Content>
			</Grid>
		</HeroLayout>
	)
}

export default FormsPage
