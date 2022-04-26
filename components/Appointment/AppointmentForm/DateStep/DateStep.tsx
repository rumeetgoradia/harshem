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
	Link,
	Text,
	VStack,
} from "@chakra-ui/react"
import { DAYS } from "@constants"
import { DateStepFields, OFFICES } from "@content"
import { convertTo12H, isBetweenTimes } from "@utils"
import NextLink from "next/link"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { AppointmentFormStepProps } from "../AppointmentForm"
type OpenCloseHours = {
	open: string
	close: string
} | null

const DateStep: React.FC<AppointmentFormStepProps> = ({
	appointmentFormData: {
		firstDatePreference,
		firstTimePreference,
		secondDatePreference,
		secondTimePreference,
		officePreference,
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
		watch,
		getValues,
	} = useForm<DateStepFields>({
		mode: "all",
		defaultValues: {
			firstDatePreference,
			firstTimePreference,
			secondDatePreference,
			secondTimePreference,
		},
	})

	const [firstTimeLimits, setFirstTimeLimits] = useState<OpenCloseHours>()
	const [secondTimeLimits, setSecondTimeLimits] = useState<OpenCloseHours>()

	const [watchFirstDatePreference, watchSecondDatePreference] = watch(
		["firstDatePreference", "secondDatePreference"],
		{ firstDatePreference, secondDatePreference }
	)

	const getOpenCloseHours = (datePreference?: string): OpenCloseHours => {
		if (!datePreference) {
			return null
		}

		const date = new Date(datePreference.replace(/-/g, "/"))
		const day = DAYS[date.getDay()]
		const hours = OFFICES.filter(({ title }) => title === officePreference)[0]
			.hours[day]

		if (!hours) {
			return null
		}

		return { ...hours }
	}

	useEffect(() => {
		const calculatedFirstTimeLimits = getOpenCloseHours(
			watchFirstDatePreference
		)
		setFirstTimeLimits(calculatedFirstTimeLimits)
	}, [watchFirstDatePreference])

	useEffect(() => {
		const calculatedSecondTimeLimits = getOpenCloseHours(
			watchSecondDatePreference
		)
		setSecondTimeLimits(calculatedSecondTimeLimits)
	}, [watchSecondDatePreference])

	const onSubmit = (values: DateStepFields) => {
		console.log(values)

		if (isValid) {
			updateAppointmentFormData(values)
			incrementFormStep()
		}
	}

	const goToPrevFormStep = (values: DateStepFields) => {
		updateAppointmentFormData(values)
		decrementFormStep()
	}

	return (
		<Box as="form" onSubmit={handleSubmit(onSubmit)} w="full">
			<Grid w="full" templateColumns="repeat(6, 1fr)" gap={6}>
				<GridItem colSpan={{ base: 6, md: 3 }}>
					<VStack spacing={6}>
						<FormControl
							id="firstDatePreference"
							isInvalid={!!errors.firstDatePreference}
							isRequired
						>
							<FormLabel>Preferred Appointment Date</FormLabel>
							<Input
								variant="outline"
								type="date"
								{...register("firstDatePreference", {
									required: "Please enter your preferred appointment date.",
									pattern: {
										value: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
										message: "Please enter a valid appointment date.",
									},
									validate: {
										isNotInPast: (value) =>
											new Date(value.replace(/-/g, "/")) > new Date()
												? true
												: "Please enter an appointment date no earlier than tomorrow.",
										isOpen: (value) =>
											!getOpenCloseHours(value)
												? `The ${officePreference} office is closed on the selected date.`
												: true,
									},
								})}
							/>
							<FormErrorMessage>
								{errors.firstDatePreference?.message}
							</FormErrorMessage>
						</FormControl>
						<FormControl
							id="firstTimePreference"
							isInvalid={!!errors.firstTimePreference}
							isRequired
						>
							<FormLabel>Preferred Appointment Time</FormLabel>
							<Text mt={-1} mb={2} fontSize="sm" opacity={0.75}>
								{watchFirstDatePreference ? (
									<>
										The {officePreference} office is {}
										{firstTimeLimits ? (
											<>
												open from {convertTo12H(firstTimeLimits.open)} to{" "}
												{convertTo12H(firstTimeLimits.close)}
											</>
										) : (
											<>closed</>
										)}{" "}
										on the selected date.
									</>
								) : (
									<>
										Please select a date to see the {officePreference}{" "}
										office&apos;s hours of operations, or check out{" "}
										<NextLink href="/offices" passHref>
											<Link color="brand.700" title="Offices">
												our office details
											</Link>
										</NextLink>
										.
									</>
								)}
							</Text>
							<Input
								variant="outline"
								type="time"
								disabled={!firstTimeLimits}
								{...register("firstTimePreference", {
									required:
										"Please enter your preferred appointment time for the selected date.",
									validate: {
										inBetweenOpenClose: (value) =>
											firstTimeLimits
												? isBetweenTimes(
														firstTimeLimits.open,
														firstTimeLimits.close,
														value
												  )
													? true
													: "Please select a time during hours of operation for the selected date, and allow 30 minutes before closing for a complete appointment."
												: false,
									},
									disabled: !firstTimeLimits,
								})}
							/>
							<FormErrorMessage>
								{errors.firstTimePreference?.message}
							</FormErrorMessage>
						</FormControl>
					</VStack>
				</GridItem>
				<GridItem colSpan={{ base: 6, md: 3 }}>
					<VStack spacing={6}>
						<FormControl
							id="secondDatePreference"
							isInvalid={!!errors.secondDatePreference}
						>
							<FormLabel>Preferred Appointment Date (Secondary)</FormLabel>
							<Input
								variant="outline"
								type="date"
								{...register("secondDatePreference", {
									pattern: {
										value: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
										message: "Please enter a valid appointment date.",
									},
									validate: {
										isNotInPast: (value) =>
											!value || new Date(value.replace(/-/g, "/")) > new Date()
												? true
												: "Please enter an appointment date no earlier than tomorrow.",
										isOpen: (value) =>
											value && !getOpenCloseHours(value)
												? `The ${officePreference} office is closed on the selected secondary date.`
												: true,
									},
								})}
							/>
							<FormErrorMessage>
								{errors.secondDatePreference?.message}
							</FormErrorMessage>
						</FormControl>
						<FormControl
							id="secondTimePreference"
							isInvalid={
								!!errors.secondTimePreference &&
								!!watchSecondDatePreference &&
								watchSecondDatePreference.trim().length > 0
							}
						>
							<FormLabel>Preferred Appointment Time (Secondary)</FormLabel>
							<Text mt={-1} mb={2} fontSize="sm" opacity={0.75}>
								{watchSecondDatePreference ? (
									<>
										The {officePreference} office is {}
										{secondTimeLimits ? (
											<>
												open from {convertTo12H(secondTimeLimits.open)} to{" "}
												{convertTo12H(secondTimeLimits.close)}
											</>
										) : (
											<>closed</>
										)}{" "}
										on the selected secondary date.
									</>
								) : (
									<>
										Please select a secondary date to see the {officePreference}{" "}
										office&apos;s hours of operations, or check out{" "}
										<NextLink href="/offices" passHref>
											<Link color="brand.700" title="Offices">
												our office details
											</Link>
										</NextLink>
										.
									</>
								)}
							</Text>
							<Input
								variant="outline"
								type="time"
								disabled={!secondTimeLimits}
								{...register("secondTimePreference", {
									required: {
										value:
											watchSecondDatePreference &&
											watchSecondDatePreference.trim().length > 0
												? true
												: false,
										message:
											"Please enter your preferred appointment time for the selected secondary date.",
									},
									validate: {
										inBetweenOpenClose: (value) =>
											secondTimeLimits
												? isBetweenTimes(
														secondTimeLimits.open,
														secondTimeLimits.close,
														value
												  )
													? true
													: "Please select a time during hours of operation for the selected secondary date, and allow 30 minutes before closing for a complete appointment."
												: false,
									},
									disabled: !secondTimeLimits,
								})}
							/>
							<FormErrorMessage>
								{watchSecondDatePreference &&
								watchSecondDatePreference.trim().length > 0
									? errors.secondTimePreference?.message
									: null}
							</FormErrorMessage>
						</FormControl>
					</VStack>
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

export default DateStep
