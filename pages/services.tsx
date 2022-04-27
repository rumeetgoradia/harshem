import { Box, Text } from "@chakra-ui/react"
import { Layout } from "@components/Layout"
import { SERVICES } from "@content"
import { NextPage } from "next"
import Masonry from "react-masonry-css"

const ServicesPage: NextPage = () => {
	return (
		<Layout title="Services">
			{Object.entries(SERVICES).map(([key, services]) => (
				<Box
					w="full"
					sx={{
						"& .services-grid": {
							display: "flex",
							ml: -3,
							w: "auto",
							"& .services-grid-col": {
								pl: 3,
								bgClip: "padding-box",
								"& .services-grid-col-item": {
									mb: 3,
								},
							},
						},
					}}
					key={`${key}-service-group`}
				>
					<Text as="h3" textStyle="header">
						{key}
					</Text>
					<Masonry
						className="services-grid"
						columnClassName="services-grid-col"
						breakpointCols={{ default: 3, 768: 2 }}
					>
						{services.map((service) => (
							<Box
								w="full"
								className="services-grid-col-item"
								key={`${key}-service-group-${service}`}
							>
								<Text
									textStyle="paragraph"
									fontSize={{ base: "sm", sm: "md", md: "lg" }}
								>
									{service}
								</Text>
							</Box>
						))}
					</Masonry>
				</Box>
			))}
		</Layout>
	)
}

export default ServicesPage
