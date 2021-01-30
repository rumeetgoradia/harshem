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

export interface Office {
	title: string
	address: string[]
	phone: string
	fax: string
}
