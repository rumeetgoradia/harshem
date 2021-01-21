import { NavItemDropdown } from "@/constants"
import {
	Button,
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
						h={10}
						fontWeight={500}
						letterSpacing="1px"
						bg={
							isDropdownActive
								? isScrolled
									? "brand.600"
									: "gray.200"
								: "transparent"
						}
						color={
							isDropdownActive
								? isScrolled
									? "white"
									: "brand.700"
								: isScrolled
								? "white"
								: "black"
						}
						textTransform="capitalize"
						_hover={{
							bg: isScrolled ? "brand.600" : "gray.200",
						}}
						_active={{
							bg: isScrolled ? "brand.600" : "gray.200",
							color: isScrolled ? "white" : "brand.700",
						}}
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
