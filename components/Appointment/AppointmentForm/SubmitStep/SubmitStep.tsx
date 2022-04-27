import {
	Box,
	Button,
	Checkbox,
	Flex,
	FormControl,
	FormErrorMessage,
	Text,
	useToast,
	UseToastOptions,
	VStack,
} from "@chakra-ui/react"
import { AppointmentFormStepProps } from "@components/Appointment/AppointmentForm/AppointmentForm"
import { PRIMARY_OFFICE, SubmitStepFields } from "@content"
import { Controller, useForm } from "react-hook-form"
import { BsArrowLeft } from "react-icons/bs"
import redaxios from "redaxios"

const SubmitStep: React.FC<AppointmentFormStepProps> = ({
	appointmentFormData,
	decrementFormStep,
	incrementFormStep,
	updateAppointmentFormData,
}) => {
	const {
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
		control,
		getValues,
	} = useForm<SubmitStepFields>({
		mode: "all",
		defaultValues: {
			newPatient: appointmentFormData.newPatient,
			agreeToTerms: appointmentFormData.agreeToTerms,
		},
	})

	const toast = useToast()
	const toastOptions: UseToastOptions = {
		duration: 5000,
		isClosable: true,
		position: "top-right",
	}

	const onSubmit = async (values: SubmitStepFields) => {
		if (isValid) {
			updateAppointmentFormData(values)
			await redaxios
				.post("/api/appointment", appointmentFormData)
				.then((res) => {
					if (res.status === 200) {
						incrementFormStep()
					} else {
						throw new Error()
					}
				})
				.catch(() =>
					toast({
						title: "Something went wrong.",
						description: `There was an issue processing your appointment request. Please try again later, or give us a call instead at ${PRIMARY_OFFICE.phone}.`,
						status: "error",
						...toastOptions,
					})
				)
		}
	}
	const goToPrevFormStep = (values: SubmitStepFields) => {
		updateAppointmentFormData(values)
		decrementFormStep()
	}

	return (
		<Box as="form" onSubmit={handleSubmit(onSubmit)} w="full">
			<VStack spacing={6} px={8}>
				<FormControl id="newPatient" isInvalid={!!errors.newPatient}>
					<Controller
						control={control}
						name="newPatient"
						render={({ field: { onChange, value, ref } }) => (
							<Checkbox
								onChange={onChange}
								ref={ref}
								isChecked={value}
								colorScheme="brand"
							>
								<Text textStyle="paragraph" ml={2}>
									I am a new patient at Harshem Family Practice.
								</Text>
							</Checkbox>
						)}
					/>
				</FormControl>
				<FormControl
					id="agreeToTerms"
					isInvalid={!!errors.agreeToTerms}
					isRequired
				>
					<Controller
						control={control}
						name="agreeToTerms"
						rules={{
							required:
								"Please agree to the terms and conditions for Harshem Family Practice.",
						}}
						render={({ field: { onChange, value, ref } }) => (
							<Checkbox
								onChange={onChange}
								ref={ref}
								isChecked={value}
								isInvalid={!!errors.agreeToTerms}
								colorScheme="brand"
							>
								<Text textStyle="paragraph" ml={2}>
									I agree to Harshem Family Practice&apos;s terms and
									conditions.{" "}
									<Box as="span" color="red.500">
										*
									</Box>
								</Text>
							</Checkbox>
						)}
					/>
					<FormErrorMessage>{errors.agreeToTerms?.message}</FormErrorMessage>
				</FormControl>
			</VStack>
			<Flex justify="space-between" w="full" mt={6}>
				<Button
					onClick={() => goToPrevFormStep(getValues())}
					type="button"
					variant="outline"
					leftIcon={<BsArrowLeft />}
					flex="25% 0 1"
				>
					Back
				</Button>
				<Button
					disabled={!isValid || isSubmitting}
					isLoading={isSubmitting}
					loadingText="Submitting"
					type="submit"
					variant="filled"
					flex="25% 0 1"
				>
					Submit
				</Button>
			</Flex>
		</Box>
	)
}

export default SubmitStep
