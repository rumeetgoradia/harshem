export interface Provider {
	name: string
	bio: string
	imageId: `${string}.png` | `${string}.jpg`
}

export interface Office {
	title: string
	address: string[]
	phone: string
	fax: string
	hours: {
		mon: string
		tue: string
		wed: string
		thu: string
		fri: string
		sat: string
		sun: string
	}
	googleMaps: `https://goo.gl/maps/${string}`
}
