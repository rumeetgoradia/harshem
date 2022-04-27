import { ContactForm } from "@components/Contact"
import { Layout } from "@components/Layout"
import { NextPage } from "next"

const ContactPage: NextPage = () => {
	return (
		<Layout title="Contact Us">
			<ContactForm />
		</Layout>
	)
}

export default ContactPage
