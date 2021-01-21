import { NavItemRoute } from "@/constants"
import { Button } from "@chakra-ui/react"
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

	return (
		<Link href={navItem.path}>
			<Button
				isActive={router.pathname === navItem.path}
				onClick={closeDrawer}
				fontSize={{ base: "xl", md: "md" }}
				h={{ base: navItem.isCta ? "auto" : 12, md: 10 }}
				py={{ base: navItem.isCta ? 3 : 0 }}
				fontWeight={500}
				letterSpacing={navItem.isCta ? "2px" : "1px"}
				bg={{
					base: navItem.isCta ? "white" : "transparent",
					md: navItem.isCta
						? isScrolled
							? "white"
							: "brand.700"
						: "transparent",
				}}
				color={{
					base: navItem.isCta ? "brand.700" : "white",
					md: navItem.isCta
						? isScrolled
							? "brand.700"
							: "white"
						: isScrolled
						? "white"
						: "black",
				}}
				textTransform={navItem.isCta ? "uppercase" : "capitalize"}
				boxShadow={navItem.isCta ? "md" : "none"}
				_hover={{
					bg: {
						base: navItem.isCta ? "gray.200" : "brand.600",
						md: navItem.isCta
							? isScrolled
								? "gray.200"
								: "brand.800"
							: isScrolled
							? "brand.600"
							: "gray.200",
					},
				}}
				_active={{
					bg: {
						base: navItem.isCta ? "white" : "brand.800",
						md: navItem.isCta
							? isScrolled
								? "gray.200"
								: "brand.800"
							: isScrolled
							? "brand.600"
							: "gray.200",
					},
					color: {
						base: navItem.isCta ? "black" : "white",
						md: navItem.isCta
							? isScrolled
								? "brand.700"
								: "white"
							: isScrolled
							? "white"
							: "brand.700",
					},
				}}
			>
				{navItem.title}
			</Button>
		</Link>
	)
}

export default NavMenuItem
