import { HeroLayout } from "@/components/Layout"
import { OfficeDisplay } from "@/components/Offices"
import { OFFICES } from "@/content"
import { Grid } from "@material-ui/core"

const OfficesPage = () => {
	return (
		<HeroLayout title="Offices">
			{OFFICES.map((office, index) => (
				<Grid item xs={12} key={`office-${index}`}>
					<OfficeDisplay office={office} />
				</Grid>
			))}
		</HeroLayout>
	)
}

export default OfficesPage
