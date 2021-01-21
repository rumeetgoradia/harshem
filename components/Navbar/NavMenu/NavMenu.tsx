import { NAV_ITEMS } from "@/constants"
import { Stack } from "@chakra-ui/react"
import NavMenuDropdown from "./NavMenuDropdown"
import NavMenuItem from "./NavMenuItem"

interface NavMenuProps {
	closeDrawer: () => void
	isScrolled: boolean
}

const NavMenu: React.FC<NavMenuProps> = ({ closeDrawer, isScrolled }) => {
	return (
		<Stack
			as="nav"
			direction={{ base: "column", md: "row" }}
			spacing={{ base: 5, md: 3 }}
		>
			{NAV_ITEMS.map((navItem, index) => {
				if (navItem.dropdownItems) {
					return (
						<NavMenuDropdown
							key={`$nav-item-${index}`}
							navItem={navItem}
							closeDrawer={closeDrawer}
							isScrolled={isScrolled}
						/>
					)
				} else if (navItem.path) {
					return (
						<NavMenuItem
							key={`$nav-item-${index}`}
							navItem={navItem}
							closeDrawer={closeDrawer}
							isScrolled={isScrolled}
						/>
					)
				}
				return null
			})}
		</Stack>
	)
}

export default NavMenu
