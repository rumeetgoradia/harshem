import { Box } from "@chakra-ui/react"
import {
	AppointmentFormData,
	AppointmentStepFields,
	DateStepFields,
	PatientStepFields,
	SubmitStepFields,
} from "@content"
import { useState } from "react"
import { AppointmentStep } from "./AppointmentStep"
import { DateStep } from "./DateStep"
import { PatientStep } from "./PatientStep"
import { SubmitStep } from "./SubmitStep"

type AppointmentFormProps = {}

const AppointmentForm: React.FC<AppointmentFormProps> = ({}) => {
	const [formStep, setFormStep] = useState<number>(0)

	const incrementFormStep = () => {
		setFormStep((prev) => prev + 1)
	}

	const decrementFormStep = () => {
		setFormStep((prev) => prev - 1)
	}

	const [appointmentFormData, setAppointmentFormData] =
		// @ts-ignore
		useState<AppointmentFormData>({})

	const updateAppointmentFormData = (
		formStepData:
			| PatientStepFields
			| AppointmentStepFields
			| DateStepFields
			| SubmitStepFields
	) => {
		setAppointmentFormData((prev) => ({ ...prev, ...formStepData }))
	}

	const displayFormStep = () => {
		const appointmentFormStepProps: AppointmentFormStepProps = {
			appointmentFormData,
			updateAppointmentFormData,
			incrementFormStep,
			decrementFormStep,
		}

		switch (formStep) {
			case 0: {
				return <PatientStep {...appointmentFormStepProps} />
			}
			case 1: {
				return <AppointmentStep {...appointmentFormStepProps} />
			}
			case 2: {
				return <DateStep {...appointmentFormStepProps} />
			}
			case 3: {
				return <SubmitStep {...appointmentFormStepProps} />
			}
			case 4: {
				return <>finished</>
			}
		}
	}

	return <Box w="full">{displayFormStep()}</Box>
}

export default AppointmentForm

export type AppointmentFormStepProps = {
	appointmentFormData: AppointmentFormData
	updateAppointmentFormData: (
		formStepData:
			| PatientStepFields
			| AppointmentStepFields
			| DateStepFields
			| SubmitStepFields
	) => void
	incrementFormStep: () => void
	decrementFormStep: () => void
}
