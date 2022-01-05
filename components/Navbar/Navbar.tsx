import { Box, Container, Flex, HStack, Link, Text } from "@chakra-ui/react"
import { Logo } from "@components/Logo"
import { OFFICES } from "@offices"
import { useRouter } from "next/router"
import { DesktopMenu } from "./DesktopMenu"
import { MobileMenu } from "./MobileMenu"

const Navbar: React.FC = () => {
	const router = useRouter()

	return (
		<>
			<Box
				pt={{ md: 4, lg: 8 }}
				bg="brand"
				display={{ base: "none", md: "flex" }}
			>
				<Container maxW="container.lg" color="white" px={8}>
					<Flex w="full" justify="space-between" align="center">
						<Flex align="center">
							<Flex
								align="center"
								justify="center"
								w={{ md: "40px", lg: "50px" }}
								h={{ md: "40px", lg: "50px" }}
								p={1}
								borderRadius="md"
								bg="white"
								mr={4}
							>
								<Logo h="full" w="auto" fill="brand" />
							</Flex>
							<Text
								as="h6"
								fontWeight="medium"
								fontSize={{ md: "3xl", lg: "4xl" }}
								lineHeight={1}
							>
								Harshem Family Practice
							</Text>
						</Flex>
						<HStack spacing={4}>
							{OFFICES.map(({ title, phone }) => (
								<Box key={`${title}-office-phone`}>
									<Text textAlign="right" fontSize="sm">
										{title}
									</Text>
									<Link href={`tel:${phone}`} fontWeight="bold">
										{phone}
									</Link>
								</Box>
							))}
						</HStack>
					</Flex>
				</Container>
			</Box>
			<Box w="full" zIndex="banner" top={0} bg="brand" position="sticky">
				<Container maxW="container.lg" color="white" px={8}>
					<Flex as="header" justify="center" align="center">
						<DesktopMenu activePath={router.pathname} />
						<MobileMenu activePath={router.pathname} />
					</Flex>
				</Container>
			</Box>
		</>
	)
}

export default Navbar
