import { Office } from "./interfaces"

export const OFFICES: Office[] = [
	{
		title: "Rahway",
		address: ["1003 St. Georges Ave.", "Rahway, NJ 07065"],
		phone: "(732) 388-3006",
		fax: "(732) 388-9878",
		hours: {
			mon: "9:00am — 2:00pm",
			tue: "3:00pm — 7:00pm",
			wed: "9:00am — 2:00pm",
			thu: "9:00am — 2:00pm",
			fri: "3:00am — 7:00pm",
			sat: "8:30am — 1:00pm",
			sun: "Closed",
		},
		googleMaps: "https://goo.gl/maps/5WqDkB2r7yqtj1nZ7",
	},
	{
		title: "Elizabeth",
		address: ["700 N. Broad St.", "Suite 102", "Elizabeth, NJ 07208"],
		phone: "(908) 469-1500",
		fax: "(908) 469-1501",
		hours: {
			mon: "10:00am — 2:00pm",
			tue: "11:00am — 3:00pm",
			wed: "10:00am — 2:00pm",
			thu: "10:00am — 2:00pm",
			fri: "10:00am — 2:00pm",
			sat: "Closed",
			sun: "Closed",
		},
		googleMaps: "https://goo.gl/maps/5WqDkB2r7yqtj1nZ7",
	},
]
