import { HeroLayout } from "@/components/Layout"
import MasonryGrid, { MasonryGridItem } from "@/components/MasonryGrid"
import { Content, Header } from "@/components/Typography"
import { BILLING, INSURANCE_INTRO, INSURANCE_PLANS } from "@/content"
import { Grid, Typography } from "@material-ui/core"

const InsurancePage: React.FC = () => {
	return (
		<HeroLayout title="Insurance">
			<Grid item xs={12}>
				<Header>Accepted Insurance Plans</Header>
				<Content>
					<Typography variant="body1">{INSURANCE_INTRO}</Typography>
					<MasonryGrid>
						{INSURANCE_PLANS.map((plan, index) => (
							<MasonryGridItem
								title={plan.title}
								note={plan.note}
								key={`insurance-plan-${index}`}
							/>
						))}
					</MasonryGrid>
				</Content>
			</Grid>
			<Grid item xs={12}>
				<Header>Billing</Header>
				<Typography variant="body1">{BILLING}</Typography>
			</Grid>
		</HeroLayout>
	)
}

export default InsurancePage
