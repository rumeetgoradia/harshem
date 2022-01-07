import { DAYS } from "@constants"

export type Office = {
	title: string
	address: string[]
	phone: string
	fax: string
	hours: {
		[K in typeof DAYS[number]]: {
			open: string
			close: string
		} | null
	}

	googleMaps: string
}

export const PRIMARY_OFFICE: Office = {
	title: "Rahway",
	address: ["1003 St. Georges Ave.", "Rahway, NJ 07065"],
	phone: "(732) 388-3006",
	fax: "(732) 388-9878",
	hours: {
		Monday: {
			open: "9:00am",
			close: "2:00pm",
		},
		Tuesday: {
			open: "3:00pm",
			close: "7:00pm",
		},
		Wednesday: {
			open: "9:00am",
			close: "2:00pm",
		},
		Thursday: {
			open: "9:00am",
			close: "2:00pm",
		},
		Friday: {
			open: "3:00pm",
			close: "7:00pm",
		},
		Saturday: {
			open: "8:30am",
			close: "1:00pm",
		},
		Sunday: null,
	},
	googleMaps: "https://goo.gl/maps/5WqDkB2r7yqtj1nZ7",
}

export const OFFICES: Office[] = [PRIMARY_OFFICE].concat([
	{
		title: "Elizabeth",
		address: ["700 N. Broad St.", "Suite 102", "Elizabeth, NJ 07208"],
		phone: "(908) 469-1500",
		fax: "(908) 469-1501",
		hours: {
			Monday: {
				open: "10:00am",
				close: "2:00pm",
			},
			Tuesday: {
				open: "11:00pm",
				close: "3:00pm",
			},
			Wednesday: {
				open: "10:00am",
				close: "2:00pm",
			},
			Thursday: {
				open: "10:00am",
				close: "2:00pm",
			},
			Friday: {
				open: "10:00am",
				close: "2:00pm",
			},
			Saturday: null,
			Sunday: null,
		},
		googleMaps: "https://goo.gl/maps/5WqDkB2r7yqtj1nZ7",
	},
])
