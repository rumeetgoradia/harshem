import { Link, Text, VStack } from "@chakra-ui/react"
import NextLink from "next/link"

type FinishStepProps = {}

const FinishStep: React.FC<FinishStepProps> = ({}) => {
	return (
		<VStack w="full" spacing={6} px={8}>
			<Text textStyle="paragraph">
				Thank you for requesting an appointment! We will reach out to you
				shortly to confirm your appointment date and time.
			</Text>
			<Text textStyle="paragraph">
				If you are a new patient, please take some time to print out and
				complete the first-time registration form, found on our{" "}
				<NextLink href="/forms" passHref>
					<Link color="brand.700" title="Patient Forms">
						patient forms page
					</Link>
				</NextLink>
				.
			</Text>
		</VStack>
	)
}

export default FinishStep
