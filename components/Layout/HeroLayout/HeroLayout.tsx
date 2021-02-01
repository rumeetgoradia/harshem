import { Box } from "@material-ui/core"
import { NextSeo } from "next-seo"
import ContentContainer from "../ContentContainer"
import Hero from "./Hero/Hero"

interface HeroLayoutProps {
	title: string
}

const HeroLayout: React.FC<HeroLayoutProps> = ({ title, children }) => {
	return (
		<>
			<NextSeo title={title} />
			<Box component="main" minHeight="100vh">
				<Hero title={title} />
				<ContentContainer>{children}</ContentContainer>
			</Box>
		</>
	)
}

export default HeroLayout
