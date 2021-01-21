import { createTransition } from "@/utils"
import { Flex, useBreakpointValue, useDisclosure } from "@chakra-ui/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Logo from "../Logo"
import DrawerToggle from "./DrawerToggle"
import NavDrawer from "./NavDrawer"
import NavMenu from "./NavMenu"

const Navbar: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false)
	const isSmallScreen = useBreakpointValue({ base: true, md: false })
	const { isOpen, onToggle, onClose } = useDisclosure()

	const handleScroll = () => {
		setIsScrolled(window.pageYOffset > 100)
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		handleScroll()
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<Flex
			as="header"
			align="center"
			justify="space-between"
			position="fixed"
			zIndex={9999}
			top="0"
			left="0"
			wrap="wrap"
			w="100%"
			px={12}
			py={{ base: 3, md: isScrolled ? 3 : 6 }}
			bg={{ base: "brand.700", md: isScrolled ? "brand.700" : "white" }}
			boxShadow={{
				base: isOpen ? "none" : "lg",
				md: isScrolled ? "lg" : "none",
			}}
			transition={createTransition([
				"background-color",
				"box-shadow",
				"padding",
			])}
		>
			<Link href="/">
				<Logo
					w="auto"
					h={isScrolled ? 12 : 16}
					fill={{ base: "white", md: isScrolled ? "white" : "brand.700" }}
					cursor="pointer"
					opacity={0.85}
					_hover={{ opacity: 1 }}
					transition={createTransition(["opacity", "fill", "height"])}
					onClick={onClose}
				/>
			</Link>
			<DrawerToggle isOpen={isOpen} onToggle={onToggle} />
			{isSmallScreen ? (
				<NavDrawer isOpen={isOpen} onClose={onClose}>
					<NavMenu closeDrawer={onClose} isScrolled={isScrolled} />
				</NavDrawer>
			) : (
				<NavMenu closeDrawer={onClose} isScrolled={isScrolled} />
			)}
		</Flex>
	)
}

export default Navbar
