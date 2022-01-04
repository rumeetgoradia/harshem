import { Box, Flex } from "@chakra-ui/react"
import LandingImage from "@images/home/landing.jpg"
import type { NextPage } from "next"
import NextImage from "next/image"
import { Background, Parallax } from "react-parallax"

const HomePage: NextPage = () => {
	const h = "65vh"

	return (
		<>
			<Box
				sx={{
					".parallax": {
						bg: "black",
						h,
						w: "full",
						"& .react-parallax-background-children": {
							w: "full",
							h: "full",
						},
					},
				}}
			>
				<Parallax strength={200} className="parallax">
					<Background>
						<Box w="full" h={h} position="relative">
							<NextImage
								src={LandingImage}
								layout="fill"
								objectPosition="center center"
								objectFit="cover"
							/>
						</Box>
					</Background>
					<Flex w="full" h={h}>
						Hello
					</Flex>
				</Parallax>
			</Box>
			<Box h={2000} />
		</>
	)
}

export default HomePage
