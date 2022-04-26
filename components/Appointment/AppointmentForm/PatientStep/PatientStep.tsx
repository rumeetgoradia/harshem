import {
	Box,
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Grid,
	GridItem,
	Input,
} from "@chakra-ui/react"
import { PatientStepFields } from "@content"
import { useForm } from "react-hook-form"
import { BsArrowRight } from "react-icons/bs"
import { AppointmentFormStepProps } from "../AppointmentForm"

const PatientStep: React.FC<AppointmentFormStepProps> = ({
	appointmentFormData: { firstName, lastName, dateOfBirth, phone, email },
	updateAppointmentFormData,
	incrementFormStep,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<PatientStepFields>({
		mode: "all",
		defaultValues: {
			firstName,
			lastName,
			dateOfBirth,
			phone,
			email,
		},
	})

	const onSubmit = (values: PatientStepFields) => {
		console.log(values)

		if (isValid) {
			updateAppointmentFormData(values)
			incrementFormStep()
		}
	}

	return (
		<Box as="form" onSubmit={handleSubmit(onSubmit)} w="full">
			<Grid w="full" templateColumns="repeat(6, 1fr)" gap={6}>
				<GridItem colSpan={{ base: 6, sm: 3, md: 2 }}>
					<FormControl id="firstName" isInvalid={!!errors.firstName} isRequired>
						<FormLabel>First Name</FormLabel>
						<Input
							variant="outline"
							{...register("firstName", {
								required: "Please enter your first name.",
							})}
						/>
						<FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
					</FormControl>
				</GridItem>
				<GridItem colSpan={{ base: 6, sm: 3, md: 2 }}>
					<FormControl id="lastName" isInvalid={!!errors.lastName} isRequired>
						<FormLabel>Last Name</FormLabel>
						<Input
							variant="outline"
							{...register("lastName", {
								required: "Please enter your last name.",
							})}
						/>
						<FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
					</FormControl>
				</GridItem>
				<GridItem colSpan={{ base: 6, md: 2 }}>
					<FormControl
						id="dateOfBirth"
						isInvalid={!!errors.dateOfBirth}
						isRequired
					>
						<FormLabel>Date of Birth</FormLabel>
						<Input
							variant="outline"
							type="date"
							{...register("dateOfBirth", {
								required: "Please enter your date of birth.",
								pattern: {
									value: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
									message: "Please enter a valid date of birth.",
								},
							})}
						/>
						<FormErrorMessage>{errors.dateOfBirth?.message}</FormErrorMessage>
					</FormControl>
				</GridItem>
				<GridItem colSpan={{ base: 6, sm: 3 }}>
					<FormControl id="phone" isInvalid={!!errors.phone} isRequired>
						<FormLabel>Phone Number</FormLabel>
						<Input
							variant="outline"
							{...register("phone", {
								required: "Please enter your primary phone number.",
								pattern: {
									value:
										/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
									message: "Please enter a valid phone number.",
								},
							})}
						/>
						<FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
					</FormControl>
				</GridItem>
				<GridItem colSpan={{ base: 6, sm: 3 }}>
					<FormControl id="email" isInvalid={!!errors.email} isRequired>
						<FormLabel>Email Address</FormLabel>
						<Input
							variant="outline"
							{...register("email", {
								required: "Please enter your primary email address.",
								pattern: {
									value:
										/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
									message: "Please enter a valid email address.",
								},
							})}
						/>
						<FormErrorMessage>{errors.email?.message}</FormErrorMessage>
					</FormControl>
				</GridItem>
			</Grid>
			<Flex justify="flex-end" w="full" mt={6}>
				<Button
					disabled={!isValid}
					type="submit"
					variant="filled"
					rightIcon={<BsArrowRight />}
					flex="25% 0 1"
				>
					Next
				</Button>
			</Flex>
		</Box>
	)
}

export default PatientStep
