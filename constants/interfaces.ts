interface NavItemBase {
	title: string
}

export interface NavItemRoute extends NavItemBase {
	path: string
	isCta?: boolean
	dropdownItems?: never
}

export interface NavItemDropdown extends NavItemBase {
	dropdownItems: { title: string; path: string }[]
	path?: never
	isCta?: never
}

export type NavItem = NavItemRoute | NavItemDropdown

export interface AppointmentFormInputs {
	firstName: string
	lastName: string
	dateOfBirth: string
	phone: string
	email: string
	officePreference: string
	providerPreference: string
	newPatient: boolean
	appointmentType: string
	firstDatePreference: string
	secondDatePreference: "" | string
	thirdDatePreference: "" | string
}

export interface ContactFormInputs {
	firstName: string
	lastName: string
	email: string
	phone: string
	message: string
}
