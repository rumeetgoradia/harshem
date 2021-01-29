import { NAV_ITEMS } from "@/constants"
import { Box, Link as MuiLink, Theme, useMediaQuery } from "@material-ui/core"
import clsx from "clsx"
import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import NavDropdown from "./NavDropdown"
import useNavMenuStyles from "./NavMenu.styles"

interface NavMenuProps {
	closeDrawer: () => void
}

const NavMenu: React.FC<NavMenuProps> = ({ closeDrawer }) => {
	const router = useRouter()
	const classes = useNavMenuStyles()
	const isMediumScreen = useMediaQuery((theme: Theme) =>
		theme.breakpoints.up("md")
	)

	return (
		<Box
			component="nav"
			display="flex"
			alignItems="center"
			height="100%"
			className={classes.root}
		>
			{NAV_ITEMS.map((navItem, navItemIndex) =>
				navItem.path ? (
					<Link href={navItem.path} passHref key={`nav-item-${navItemIndex}`}>
						<MuiLink
							onClick={closeDrawer}
							className={clsx(
								classes.navItem,
								navItem.isCta && classes.navItemCta,
								router.pathname === navItem.path &&
									!navItem.isCta &&
									classes.navItemActive
							)}
						>
							{navItem.title}
						</MuiLink>
					</Link>
				) : isMediumScreen ? (
					<NavDropdown
						navItem={navItem}
						className={clsx(
							classes.navItem,
							navItem.dropdownItems?.some(
								(item) => router.pathname === item.path
							) && classes.navItemActive
						)}
					/>
				) : (
					navItem.dropdownItems?.map((dropdownItem, dropdownIndex) => (
						<Link
							href={dropdownItem.path}
							passHref
							key={`nav-item-${navItemIndex}-dropdown-item-${dropdownIndex}`}
						>
							<MuiLink
								onClick={closeDrawer}
								className={clsx(
									classes.navItem,
									router.pathname === dropdownItem.path && classes.navItemActive
								)}
							>
								{dropdownItem.title}
							</MuiLink>
						</Link>
					))
				)
			)}
		</Box>
	)
}

export default NavMenu
