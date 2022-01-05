import { Flex, Link } from "@chakra-ui/react"
import { NAV_ITEMS } from "@constants"
import { createTransition } from "@utils"
import NextLink from "next/link"

type DesktopMenuProps = {
	activePath: string
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ activePath }) => {
	return (
		<Flex
			as="nav"
			justify="space-between"
			w="full"
			py={{ md: 4, lg: 8 }}
			display={{ base: "none", md: "flex" }}
		>
			{NAV_ITEMS.map(({ title, path, isCta }) => (
				<NextLink href={path ?? "/"} passHref key={`${title}-nav-item`}>
					<Link
						title={title}
						position="relative"
						fontSize={{ md: "sm", lg: "md" }}
						fontWeight={{ md: "medium", lg: "normal" }}
						px={2}
						transition={createTransition("transform")}
						_hover={{
							textDecoration: "none",
							_after: {
								h: "2px",
								opacity: 1,
							},
						}}
						_focus={{
							textDecoration: "none",
							outline: "none",
							boxShadow: "none",
						}}
						_active={{
							transform: "scale(0.975)",
						}}
						_after={{
							content: '""',
							w: "full",
							h: activePath === path ? "2px" : 0,
							opacity: activePath === path ? 1 : 0,
							bg: "white",
							position: "absolute",
							left: 0,
							bottom: "-2px",
							transition: createTransition(["height", "opacity"]),
						}}
					>
						{title}
					</Link>
				</NextLink>
			))}
		</Flex>
	)
}

export default DesktopMenu
