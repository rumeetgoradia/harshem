import { Box, Container, Flex } from "@chakra-ui/react"
import { DesktopMenu } from "./DesktopMenu"

const Navbar: React.FC = () => {
	return (
		<Box position="fixed" w="full" zIndex="banner" top={0} bg="brand">
			<Container maxW="container.lg">
				<Flex as="header" justify="space-between" align="center" py={8}>
					<Box>{/* TODO: Add logo */}</Box>
					<DesktopMenu />
				</Flex>
			</Container>
		</Box>
	)
}

export default Navbar
