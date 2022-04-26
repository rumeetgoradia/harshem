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
			open: "09:00",
			close: "14:00",
		},
		Tuesday: {
			open: "15:00",
			close: "19:00",
		},
		Wednesday: {
			open: "09:00",
			close: "14:00",
		},
		Thursday: {
			open: "09:00",
			close: "14:00",
		},
		Friday: {
			open: "15:00",
			close: "19:00",
		},
		Saturday: {
			open: "08:30",
			close: "13:00",
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
				open: "10:00",
				close: "14:00",
			},
			Tuesday: {
				open: "11:00",
				close: "15:00",
			},
			Wednesday: {
				open: "10:00",
				close: "14:00",
			},
			Thursday: {
				open: "10:00",
				close: "14:00",
			},
			Friday: {
				open: "10:00",
				close: "14:00",
			},
			Saturday: null,
			Sunday: null,
		},
		googleMaps: "https://goo.gl/maps/5WqDkB2r7yqtj1nZ7",
	},
])
