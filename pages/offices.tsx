import { Grid } from "@chakra-ui/react"
import { Layout } from "@components/Layout"
import { OfficeDisplay } from "@components/Offices"
import { OFFICES } from "@content"
import { NextPage } from "next"

const OfficesPage: NextPage = () => {
	return (
		<Layout title="Offices">
			<Grid
				templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }}
				gap={{ base: 6, md: 10 }}
				w="full"
			>
				{OFFICES.map((office) => (
					<OfficeDisplay
						office={office}
						key={`${office.title}-office-display`}
					/>
				))}
			</Grid>
		</Layout>
	)
}

export default OfficesPage
