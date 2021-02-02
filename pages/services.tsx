import { HeroLayout } from "@/components/Layout"
import MasonryGrid, { MasonryGridItem } from "@/components/MasonryGrid"
import { Header } from "@/components/Typography"
import { Grid } from "@material-ui/core"
import { SERVICES } from "content/services"

const ServicesPage: React.FC = () => {
	return (
		<HeroLayout title="Services">
			{SERVICES.map((serviceGroup, serviceGroupIndex) => (
				<Grid item xs={12} key={`service-group-${serviceGroupIndex}`}>
					<Header>{serviceGroup.title}</Header>
					<MasonryGrid>
						{serviceGroup.services.map((service, serviceIndex) => (
							<MasonryGridItem
								title={service.title}
								note={service.note}
								key={`service-group-${serviceGroupIndex}-service-${serviceIndex}`}
							/>
						))}
					</MasonryGrid>
				</Grid>
			))}
		</HeroLayout>
	)
}

export default ServicesPage
