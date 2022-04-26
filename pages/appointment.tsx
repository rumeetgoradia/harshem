import { Text, VStack } from "@chakra-ui/react"
import { AppointmentForm } from "@components/Appointment"
import { Layout } from "@components/Layout"
import { NextPage } from "next"

const AppointmentPage: NextPage = () => {
	return (
		<Layout title="Book Appointment">
			<VStack spacing={4}>
				<Text textStyle="paragraph">
					If you are having a medical emergency, please call 911 immediately. Do
					NOT use this form if you are having a medical emergency.
				</Text>
				<Text textStyle="paragraph">
					If you need an urgent, same-day, or next-day appointment, please call
					the appropriate office location. Use this form for non-urgent
					appointments only.
				</Text>
			</VStack>
			<AppointmentForm />
		</Layout>
	)
}

export default AppointmentPage
