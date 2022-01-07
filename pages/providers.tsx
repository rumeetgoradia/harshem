import { Grid } from "@chakra-ui/react"
import { Layout } from "@components/Layout"
import { ProviderDisplay } from "@components/Providers"
import { PROVIDERS } from "@content"
import { NextPage } from "next"

const ProvidersPage: NextPage = () => {
	return (
		<Layout title="Providers">
			<Grid
				templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
				gap={{ base: 6, md: 10 }}
				w="full"
			>
				{PROVIDERS.map((provider) => (
					<ProviderDisplay
						provider={provider}
						key={`${provider.name}-provider-display`}
					/>
				))}
			</Grid>
		</Layout>
	)
}

export default ProvidersPage
