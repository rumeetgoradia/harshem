import { ContactForm } from "@/components/Contact"
import { HeroLayout } from "@/components/Layout"
import { Header } from "@/components/Typography"
import { Grid } from "@material-ui/core"

const ContactPage: React.FC = () => {
	return (
		<HeroLayout title="Contact Us">
			<Grid item xs={12}>
				<Header>Send Us a Message</Header>
				<ContactForm />
			</Grid>
		</HeroLayout>
	)
}

export default ContactPage
