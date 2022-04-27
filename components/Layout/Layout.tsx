import { Container, Text, VStack } from "@chakra-ui/react"
import { NextSeo } from "next-seo"

type LayoutProps = {
	title: string
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
	return (
		<>
			<NextSeo title={title} />
			<Container
				maxW="container.lg"
				px={8}
				py={12}
				minH="calc(100vh - 88px - 82px - 424px)"
			>
				<VStack spacing={6} justify="flex-start" align="flex-start">
					<Text as="h1" fontWeight={600} fontSize="5xl">
						{title}
					</Text>
					{children}
				</VStack>
			</Container>
		</>
	)
}

export default Layout
