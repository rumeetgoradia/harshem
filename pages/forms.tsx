import { Box, Button, Link, Text } from "@chakra-ui/react"
import { Layout } from "@components/Layout"
import { NextPage } from "next"
import NextLink from "next/link"

const FormsPage: NextPage = () => {
	return (
		<Layout title="Patient Forms">
			<Box>
				<Text textStyle="header">First-Time Registration Form</Text>
				<Text textStyle="paragraph" mb={3}>
					If you are a first-time patient, please fill out the form below and
					bring it with you for your appointment. If you haven&apos;t made an
					appointment yet, please visit our{" "}
					<NextLink href="/appointment" passHref>
						<Link color="brand.700" title="Book Appointment">
							appointments page
						</Link>
					</NextLink>{" "}
					or give us a call at{" "}
					<Link href="tel:7323883006" color="brand.700" title="Call Us">
						(732) 388-3006
					</Link>
					.
				</Text>
				<Link
					href="/forms/registration.pdf"
					isExternal
					title="Registration Form"
					_hover={{}}
				>
					<Button variant="filled">Registration Form</Button>
				</Link>
			</Box>
		</Layout>
	)
}

export default FormsPage
