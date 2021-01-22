import Button from "@/components/Button"
import { NavItemRoute } from "@/constants"
import { useBreakpointValue } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"

interface NavMenuItemProps {
	navItem: NavItemRoute
	closeDrawer: () => void
	isScrolled?: boolean
}

const NavMenuItem: React.FC<NavMenuItemProps> = ({
	closeDrawer,
	navItem,
	isScrolled,
}) => {
	const router = useRouter()
	const isInverted = useBreakpointValue({ base: true, md: isScrolled })

	return (
		<Link href={navItem.path}>
			<Button
				onClick={closeDrawer}
				isInverted={isInverted}
				isActive={router.pathname === navItem.path}
				variant={navItem.isCta ? "cta" : "nav"}
			>
				{navItem.title}
			</Button>
		</Link>
	)
}

export default NavMenuItem
