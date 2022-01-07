import {
	Box,
	Container,
	Flex,
	Grid,
	Link,
	Text,
	VStack,
} from "@chakra-ui/react"
import { Logo } from "@components/Logo"
import { NAV_ITEMS, SITE_NAME } from "@constants"
import { OFFICES } from "@content"
import { createTransition } from "@utils"
import NextLink from "next/link"

type FooterProps = {}

const Footer: React.FC<FooterProps> = ({}) => {
	return (
		<Flex justify="center" bg="gray.100">
			<Container as="footer" maxW="container.lg" px={8} pt={8} pb={4}>
				<VStack spacing={8} justify="flex-start" align="flex-start" w="full">
					<Flex justify="space-between" w="full">
						<VStack spacing={4} justify="flex-start" align="flex-start">
							<Text
								as="h6"
								fontSize={{ base: "2xl", sm: "3xl" }}
								opacity={0.6}
								fontWeight={500}
							>
								Harshem Family Practice
							</Text>
							<Flex gap={{ base: 4, sm: 8 }} w="full">
								{OFFICES.map(({ address, phone }) => (
									<Box
										key={`${address[0]}-footer-office`}
										fontSize={{ base: "sm", md: "md" }}
										opacity={0.6}
									>
										{address.map((line) => (
											<Text key={`${address[0]}-footer-office-${line}-line`}>
												{line}
											</Text>
										))}
										<Link
											href={`tel:${phone}`}
											as="span"
											transition={createTransition("color")}
											_hover={{ color: "brand" }}
											_focus={{}}
										>
											<Text>{phone}</Text>
										</Link>
									</Box>
								))}
							</Flex>
						</VStack>

						<Logo
							h="157px"
							w="auto"
							fill="black"
							opacity={0.6}
							display={{ base: "none", md: "block" }}
						/>
					</Flex>
					<Box as="hr" borderTopColor="gray.300" w="full" />
					<Grid
						gap={4}
						templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
						w="full"
					>
						{NAV_ITEMS.map(({ title, path }) => (
							<Box as="span" key={`${title}-footer-link`}>
								<NextLink href={path} passHref>
									<Link
										title={title}
										opacity={0.4}
										textTransform="uppercase"
										fontSize="sm"
										lineHeight={1}
										transition={createTransition(["opacity", "color"])}
										_hover={{
											color: "brand",
											opacity: 1,
										}}
										_focus={{}}
									>
										{title}
									</Link>
								</NextLink>
							</Box>
						))}
					</Grid>
					<Text
						opacity={0.4}
						fontWeight={300}
						fontSize="xs"
					>{`© ${new Date().getFullYear()} ${SITE_NAME}`}</Text>
				</VStack>
			</Container>
		</Flex>
	)
}

export default Footer
