import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	Flex,
	IconButton,
	Link,
	useDisclosure,
	VStack,
} from "@chakra-ui/react"
import { Logo } from "@components/Logo"
import { NAV_ITEMS } from "@constants"
import { createTransition } from "@utils"
import NextLink from "next/link"
import { useRef } from "react"
import { HiOutlineMenu } from "react-icons/hi"
import { VscChromeClose } from "react-icons/vsc"

type MobileMenuProps = {
	activePath: string
}

const MobileMenu: React.FC<MobileMenuProps> = ({ activePath }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const openMenuBtnRef = useRef<HTMLButtonElement>(null)

	return (
		<>
			<Flex
				w="full"
				py={4}
				justify="space-between"
				align="center"
				display={{ base: "flex", md: "none" }}
			>
				<NextLink href="/" passHref>
					<Link
						_hover={{
							textDecoration: "none",
							" svg": { transform: "scale(1.1)" },
						}}
						_focus={{
							textDecoration: "none",
							boxShadow: "none",
							outline: "none",
						}}
						_active={{ " svg": { transform: "scale(0.975)" } }}
					>
						<Logo
							h="40px"
							w="auto"
							fill="white"
							transition={createTransition("transform")}
						/>
					</Link>
				</NextLink>
				<IconButton
					icon={<HiOutlineMenu />}
					aria-label="Open navigation menu"
					variant="unstyled"
					fontSize="2xl"
					display="flex"
					justifyContent="center"
					alignItems="center"
					p={0}
					onClick={onOpen}
				/>
			</Flex>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={openMenuBtnRef}
			>
				<DrawerOverlay display={{ base: "block", md: "none" }} />
				<DrawerContent
					bg="brand"
					color="white"
					py={4}
					px={8}
					display={{ base: "block", md: "none" }}
				>
					<Flex w="full" justifyContent="flex-end">
						<IconButton
							icon={<VscChromeClose />}
							onClick={onClose}
							aria-label="Close navigation menu"
							variant="unstyled"
							fontSize="2xl"
							fontWeight="medium"
							display="flex"
							justifyContent="center"
							alignItems="center"
							p={0}
							_focus={{}}
						/>
					</Flex>

					<DrawerBody py={16}>
						<VStack spacing={4}>
							{NAV_ITEMS.map(({ title, path }) => (
								<NextLink href={path} passHref key={`${title}-drawer-nav-link`}>
									<Link
										onClick={onClose}
										title={title}
										position="relative"
										fontSize="xl"
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
						</VStack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default MobileMenu
