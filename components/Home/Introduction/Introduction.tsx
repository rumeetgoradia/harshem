import { ContentContainer } from "@/components/Layout"
import { Content, Header } from "@/components/Typography"
import { MISSION, WHO_WE_ARE } from "@/content"
import Logo from "@/images/logo.svg"
import { Grid, Typography } from "@material-ui/core"
import useIntroductionStyles from "./Introduction.styles"

const Introduction: React.FC = () => {
	const classes = useIntroductionStyles()

	return (
		<ContentContainer>
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
					</Grid>
					<Grid item xs={12} md={4} className={classes.logoContainer}>
						<Logo className={classes.logo} />
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<Header>Our Mission</Header>
				<Typography variant="body1">{MISSION}</Typography>
			</Grid>
		</ContentContainer>
	)
}

export default Introduction
