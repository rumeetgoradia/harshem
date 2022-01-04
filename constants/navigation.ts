export type NavItem = { title: string } & (
	| {
			path: string
			isCta?: boolean
			dropdownItems?: never
	  }
	| {
			path?: never
			isCta?: never
			dropdownItems: { title: string; path: string }[]
	  }
)

export const NAV_ITEMS: NavItem[] = [
	{
		title: "About Us",
		dropdownItems: [
			{ title: "Who We Are", path: "about" },
			{ title: "Our Providers", path: "/providers" },
			{ title: "Our Offices", path: "/offices" },
		],
	},
	{
		title: "Patient Info",
		dropdownItems: [
			{ title: "Our Services", path: "/services" },
			{ title: "Accepted Insurance", path: "/insurance" },
			{ title: "Patient Forms", path: "/forms" },
		],
	},
	{
		title: "Contact Us",
		path: "/contact",
	},
	{
		title: "Book Appointment",
		path: "/appointment",
		isCta: true,
	},
]
