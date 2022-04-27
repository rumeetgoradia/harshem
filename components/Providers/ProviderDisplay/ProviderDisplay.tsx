import { Box, Flex, Text } from "@chakra-ui/react"
import { Provider } from "@content"
import NextImage from "next/image"

type ProviderDisplayProps = {
	provider: Provider
}

const ProviderDisplay: React.FC<ProviderDisplayProps> = ({
	provider: { name, bio, image },
}) => {
	return (
		<Box mb={-4}>
			<Text as="h2" textStyle="header">
				{name}
			</Text>
			<Flex
				justify="center"
				w="full"
				mb={4}
				display={{ base: "flex", sm: "none", md: "flex", lg: "none" }}
			>
				<Box h="300px" w={{ base: "full", sm: "200px" }} position="relative">
					<NextImage
						src={image}
						layout="fill"
						objectFit="cover"
						objectPosition="center center"
						placeholder="blur"
					/>
				</Box>
			</Flex>
			<Text textStyle="paragraph" mb={4}>
				<Box
					float="left"
					h="300px"
					w="200px"
					mr={4}
					mb={4}
					position="relative"
					display={{ base: "none", sm: "block", md: "none", lg: "block" }}
				>
					<NextImage
						src={image}
						layout="fill"
						objectFit="cover"
						objectPosition="center center"
						placeholder="blur"
					/>
				</Box>
				{bio}
			</Text>
		</Box>
	)
}

export default ProviderDisplay
