export type NavItem = {
	title: string
	path: string
	isCta?: boolean
}

export const NAV_ITEMS: NavItem[] = [
	{
		title: "Home",
		path: "/",
	},
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
	{
		title: "Patient Forms",
		path: "/forms",
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
