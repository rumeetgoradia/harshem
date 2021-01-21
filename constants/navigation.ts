import { NavItem } from "./interfaces"

export const NAV_ITEMS: NavItem[] = [
	{
		title: "About Us",
		dropdownItems: [
			{
				title: "Providers",
				path: "/providers",
			},
			{
				title: "Offices",
				path: "/offices",
			},
			{
				title: "Services",
				path: "/services",
			},
			{
				title: "Insurance",
				path: "/insurance",
			},
		],
	},
	{
		title: "Patient Forms",
		path: "/forms",
	},
	{
		title: "Contact",
		path: "/contact",
	},
	{
		title: "Book Appointment",
		path: "/appointment",
		isCta: true,
	},
]
