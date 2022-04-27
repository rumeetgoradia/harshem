import {
	Box,
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Grid,
	GridItem,
	Select,
} from "@chakra-ui/react"
import {
	AppointmentStepFields,
	APPOINTMENT_TYPES,
	OFFICES,
	PROVIDERS,
} from "@content"
import { useForm } from "react-hook-form"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { AppointmentFormStepProps } from "../AppointmentForm"
const AppointmentStep: React.FC<AppointmentFormStepProps> = ({
	appointmentFormData: {
		officePreference,
		providerPreference,
		appointmentType,
	},
	updateAppointmentFormData,
	incrementFormStep,
	decrementFormStep,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		control,
		getValues,
	} = useForm<AppointmentStepFields>({
		mode: "all",
		defaultValues: {
			officePreference,
			providerPreference,
			appointmentType,
		},
	})

	const onSubmit = (values: AppointmentStepFields) => {
		if (isValid) {
			updateAppointmentFormData(values)
			incrementFormStep()
		}
	}
	const goToPrevFormStep = (values: AppointmentStepFields) => {
		updateAppointmentFormData(values)
		decrementFormStep()
	}

	return (
		<Box as="form" onSubmit={handleSubmit(onSubmit)} w="full">
			<Grid w="full" templateColumns="repeat(6, 1fr)" gap={6}>
				<GridItem colSpan={{ base: 6, md: 2 }}>
					<FormControl
						id="officePreference"
						isInvalid={!!errors.officePreference}
						isRequired
					>
						<FormLabel>Office Preference</FormLabel>
						<Select
							variant="outline"
							placeholder=" "
							{...register("officePreference", {
								required: "Please select the preferred office for your visit.",
							})}
						>
							{OFFICES.map(({ title }) => (
								<option value={title} key={`${title}-office-preference`}>
									{title}
								</option>
							))}
						</Select>
						<FormErrorMessage>
							{errors.officePreference?.message}
						</FormErrorMessage>
					</FormControl>
				</GridItem>
				<GridItem colSpan={{ base: 6, md: 2 }}>
					<FormControl
						id="providerPreference"
						isInvalid={!!errors.providerPreference}
						isRequired
					>
						<FormLabel>Provider Preference</FormLabel>
						<Select
							variant="outline"
							placeholder=" "
							{...register("providerPreference", {
								required:
									"Please select the preferred provider for your visit.",
							})}
						>
							{PROVIDERS.map(({ name }) => (
								<option value={name} key={`${name}-provider-preference`}>
									{name}
								</option>
							))}
							<option value="No Preference">No Preference</option>
						</Select>
						<FormErrorMessage>
							{errors.providerPreference?.message}
						</FormErrorMessage>
					</FormControl>
				</GridItem>
				<GridItem colSpan={{ base: 6, md: 2 }}>
					<FormControl
						id="appointmentType"
						isInvalid={!!errors.appointmentType}
						isRequired
					>
						<FormLabel>Appointment Type</FormLabel>
						<Select
							variant="outline"
							placeholder=" "
							{...register("appointmentType", {
								required:
									"Please select the type of appointment you are requesting.",
							})}
						>
							{APPOINTMENT_TYPES.map((appointmentType) => (
								<option
									value={appointmentType}
									key={`${appointmentType}-appointment-type`}
								>
									{appointmentType}
								</option>
							))}
						</Select>
						<FormErrorMessage>
							{errors.appointmentType?.message}
						</FormErrorMessage>
					</FormControl>
				</GridItem>
			</Grid>
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

export default AppointmentStep
