import { Box, Container, Flex, Text, useTheme } from "@chakra-ui/react"
import { transparentize } from "@chakra-ui/theme-tools"
import LandingImage from "@images/home/landing.jpg"
import NextImage from "next/image"
import { Background, Parallax } from "react-parallax"

type LandingProps = {}

const Landing: React.FC<LandingProps> = ({}) => {
	const theme = useTheme()

	return (
		<Box
			sx={{
				".parallax": {
					bg: "black",
					h: "45vh",
					w: "full",
					"& .react-parallax-background-children": {
						w: "full",
						h: "full",
					},
				},
			}}
		>
			<Parallax strength={300} className="parallax">
				{/* @ts-ignore */}
				<Background>
					<Box w="full" h="65vh" position="relative" zIndex={1}>
						<NextImage
							src={LandingImage}
							layout="fill"
							objectPosition="center center"
							objectFit="cover"
							placeholder="blur"
						/>
					</Box>
					<Box
						w="full"
						h="85vh"
						position="absolute"
						top={0}
						zIndex={2}
						bg={transparentize("black", 0.55)(theme)}
					/>
				</Background>
				<Container maxW="container.lg" px={8} h="45vh">
					<Flex flexDirection="column" justify="center" w="full" h="full">
						<Text
							as="h1"
							fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
							color="brand.700"
							fontWeight={700}
							lineHeight={1}
							mb={2}
						>
							Harshem Family Practice
						</Text>
						<Text
							as="h2"
							fontSize={{ base: "2xl", md: "4xl" }}
							color="white"
							fontWeight={500}
							mb={8}
						>
							Dr. Rita U. Goradia, MDPC
						</Text>
					</Flex>
				</Container>
			</Parallax>
		</Box>
	)
}

export default Landing
