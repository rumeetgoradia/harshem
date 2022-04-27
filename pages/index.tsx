import { Button, Container, Link, Text, VStack } from "@chakra-ui/react"
import { Landing } from "@components/Home"
import type { NextPage } from "next"
import NextLink from "next/link"

const HomePage: NextPage = () => {
	return (
		<>
			<Landing />
			<Container maxW="container.lg" px={8} py={16}>
				<Text textStyle="header" as="h3">
					Welcome to Harshem!
				</Text>
				<VStack spacing={4}>
					<Text textStyle="paragraph">
						Harshem Family Practice is an outpatient medical practice for all
						primary care, geriatric, adolescent, and a majority of women&apos;s
						health needs. We have been serving patients in Central and Northern
						New Jersey since 2000 with the goal of providing high-quality modern
						medical care to maintain and improve overall patient health. We
						partner with our patients to provide effective management of chronic
						and acute conditions, all while empowering patients to play an
						active role in their own healthcare.
					</Text>
					<Text textStyle="paragraph">
						We at Harshem Family Practice offer a wide range of healthcare
						services that are preventative, diagnostic, and therapeutic to
						effectively treat a wide range of acute and chronic conditions. Our
						full range of services are designed to offer patients continuity of
						care in the outpatient, inpatient, and nursing home settings.
					</Text>
					<Text textStyle="paragraph">
						We currently have two freestanding offices in New Jersey located in
						Rahway and Elizabeth. We accept a majority of health insurance plans
						and serve patients from a variety of ethnic, racial, and cultural
						backgrounds. Our doctors and staff speak multiple languages and are
						able to provide effective translation for several commonly spoken
						languages. We welcome you to explore our website to learn more about{" "}
						<NextLink href="/providers" passHref>
							<Link color="brand.700" title="Providers">
								our providers
							</Link>
						</NextLink>
						,{" "}
						<NextLink href="/services" passHref>
							<Link color="brand.700" title="Services">
								our full range of services
							</Link>
						</NextLink>
						, and{" "}
						<NextLink href="/insurance" passHref>
							<Link color="brand.700" title="Insurance">
								our accepted insurance plans
							</Link>
						</NextLink>
						.
					</Text>
					<NextLink href="/appointment" passHref>
						<Button as="a" title="Schedule an Appointment" variant="filled">
							Schedule an Appointment
						</Button>
					</NextLink>
				</VStack>
			</Container>
		</>
	)
}

export default HomePage
