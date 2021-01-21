import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
} from "@chakra-ui/react"

interface NavDrawerProps {
	isOpen: boolean
	onClose: () => void
}

const NavDrawer: React.FC<NavDrawerProps> = ({ isOpen, onClose, children }) => {
	return (
		<Drawer isOpen={isOpen} placement="top" onClose={onClose}>
			<DrawerOverlay>
				<DrawerContent bg="brand.700" zIndex={9998} pt="88px" pb={6}>
					<DrawerBody>{children}</DrawerBody>
				</DrawerContent>
			</DrawerOverlay>
		</Drawer>
	)
}

export default NavDrawer
