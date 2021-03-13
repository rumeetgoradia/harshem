import { ContentContainer } from "@/components/Layout"
import { Content, Header, Hyperlink } from "@/components/Typography"
import { MISSION, WHO_WE_ARE } from "@/content"
import Logo from "@/images/logo.svg"
import { Grid, Typography } from "@material-ui/core"
import Link from "next/link"
import useIntroductionStyles from "./Introduction.styles"

const Introduction: React.FC = () => {
	const classes = useIntroductionStyles()

	return (
		<ContentContainer>
			<Grid item xs={12}>
				<Header>Our Mission</Header>
				<Typography variant="body1">{MISSION}</Typography>
			</Grid>
			<Grid item xs={12}>
				<Header>Who We Are</Header>
				<Grid container spacing={4}>
					<Grid item xs={12} md={8}>
						<Content>
							{WHO_WE_ARE.map((paragraph, index) => (
								<Typography
									variant="body1"
									key={`who-we-are-paragraph-${index}`}
								>
									{paragraph}
								</Typography>
							))}
						</Content>
						<Typography variant="body1">
							We currently have two freestanding offices in New Jersey located
							in Rahway and Elizabeth. We accept a majority of health insurance
							plans and serve patients from a variety of ethnic, racial, and
							cultural backgrounds. Our doctors and staff speak multiple
							languages and are able to provide effective translation for
							several commonly spoken languages. We welcome you to explore our
							website to learn more about{" "}
							<Link href="/providers" passHref>
								<Hyperlink>our providers</Hyperlink>
							</Link>
							,{" "}
							<Link href="/services" passHref>
								<Hyperlink>our full range of services</Hyperlink>
							</Link>
							, and{" "}
							<Link href="/services" passHref>
								<Hyperlink>our accepted insurance plans</Hyperlink>
							</Link>
							.{" "}
							<Link href="/services" passHref>
								<Hyperlink>Make an appointment today!</Hyperlink>
							</Link>
						</Typography>
					</Grid>
					<Grid item xs={12} md={4} className={classes.logoContainer}>
						<Logo className={classes.logo} />
					</Grid>
				</Grid>
			</Grid>
		</ContentContainer>
	)
}

export default Introduction
