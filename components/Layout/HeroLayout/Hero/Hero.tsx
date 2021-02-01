import { SITE_NAME } from "@/constants"
import { Box, Container, Typography } from "@material-ui/core"
import Image from "next/image"
import { Background, Parallax } from "react-parallax"
import useHeroStyles from "./Hero.styles"

interface HeroProps {
	title: string
}

const Hero: React.FC<HeroProps> = ({ title }) => {
	const classes = useHeroStyles()

	return (
		<Parallax
			strength={200}
			className={classes.root}
			contentClassName={classes.content}
		>
			<Background>
				<Image
					src="/images/hero.jpg"
					alt={SITE_NAME}
					layout="fill"
					objectFit="cover"
					objectPosition="center center"
					priority
				/>
			</Background>
			<Container maxWidth="lg">
				<Box
					component="section"
					display="flex"
					justifyContent="center"
					width="100%"
					height="100%"
				>
					<Typography variant="h1" align="center" className={classes.title}>
						{title}
					</Typography>
				</Box>
			</Container>
		</Parallax>
	)
}

export default Hero
