import { HStack } from "@chakra-ui/react"
import { NAV_ITEMS } from "@constants"
import NextLink from "next/link"
import { NavDropdown } from "./NavDropdown"

const DesktopMenu: React.FC = () => {
	return (
		<HStack spacing={4}>
			{NAV_ITEMS.map(({ title, path, isCta, dropdownItems }) =>
				dropdownItems ? (
					<NavDropdown title={title} dropdownItems={dropdownItems} />
				) : isCta ? (
					// TODO: Add cta styling
					<NextLink href={path ?? "/"} passHref key={`${title}-nav-item`}>
						{title}
					</NextLink>
				) : (
					<NextLink href={path ?? "/"} passHref key={`${title}-nav-item`}>
						{title}
					</NextLink>
				)
			)}
		</HStack>
	)
}

export default DesktopMenu
