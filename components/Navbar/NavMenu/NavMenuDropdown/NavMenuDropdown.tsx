import Button from "@/components/Button"
import { NavItemDropdown } from "@/constants"
import {
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useBreakpointValue,
} from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { FaChevronDown } from "react-icons/fa"
import NavMenuItem from "../NavMenuItem"

interface NavMenuDropdownProps {
	navItem: NavItemDropdown
	closeDrawer: () => void
	isScrolled: boolean
}

const NavMenuDropdown: React.FC<NavMenuDropdownProps> = ({
	closeDrawer,
	navItem,
	isScrolled,
}) => {
	const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false)
	const router = useRouter()
	const isSmallScreen = useBreakpointValue({ base: true, md: false })

	useEffect(() => {
		setIsDropdownActive(
			navItem.dropdownItems.some(
				(dropdownItem) => dropdownItem.path === router.pathname
			)
		)
	}, [router.pathname])

	return (
		<>
			{isSmallScreen ? (
				<>
					{navItem.dropdownItems.map((dropdownItem, index) => (
						<NavMenuItem
							key={`nav-${navItem.title}-dropdown-item-${index}`}
							navItem={dropdownItem}
							closeDrawer={closeDrawer}
						/>
					))}
				</>
			) : (
				<Menu>
					<MenuButton
						as={Button}
						rightIcon={<FaChevronDown />}
						variant="nav"
						isActive={isDropdownActive}
						isInverted={isScrolled}
					>
						{navItem.title}
					</MenuButton>
					<MenuList>
						{navItem.dropdownItems.map((dropdownItem, index) => (
							<Link
								key={`nav-${navItem.title}-dropdown-item-${index}`}
								href={dropdownItem.path}
							>
								<MenuItem
									px={4}
									bg={
										router.pathname === dropdownItem.path
											? "brand.800"
											: "transparent"
									}
									color={
										router.pathname === dropdownItem.path ? "white" : "black"
									}
									_hover={{
										bg:
											router.pathname === dropdownItem.path
												? "brand.800"
												: "brand.700",
										color: "white",
									}}
									_focus={{
										bg:
											router.pathname === dropdownItem.path
												? "brand.800"
												: "brand.700",
										color: "white",
									}}
								>
									{dropdownItem.title}
								</MenuItem>
							</Link>
						))}
					</MenuList>
				</Menu>
			)}
		</>
	)
}

export default NavMenuDropdown
