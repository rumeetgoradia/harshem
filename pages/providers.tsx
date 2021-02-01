import { HeroLayout } from "@/components/Layout"
import { ProviderDisplay } from "@/components/Providers"
import { PROVIDERS } from "@/content"
import { Grid } from "@material-ui/core"
import { getBase64 } from "@plaiceholder/base64"
import { getImage } from "@plaiceholder/next"
import { GetStaticProps } from "next"

interface ProvidersPageProps {
	imgBase64s: string[]
	imgSrcs: string[]
}

const ProvidersPage: React.FC<ProvidersPageProps> = ({
	imgBase64s,
	imgSrcs,
}) => {
	return (
		<HeroLayout title="Providers">
			{PROVIDERS.map((provider, index) => (
				<Grid item xs={12} key={`provider-${index}`}>
					<ProviderDisplay
						provider={provider}
						imgBase64={imgBase64s[index]}
						imgSrc={imgSrcs[index]}
					/>
				</Grid>
			))}
		</HeroLayout>
	)
}

export default ProvidersPage

export const getStaticProps: GetStaticProps = async () => {
	const imgSrcs = []
	const imgBase64s = []

	for (const provider of PROVIDERS) {
		const imgSrc = `/images/providers/${provider.imageId}`
		imgSrcs.push(imgSrc)
		const img = await getImage(imgSrc)
		imgBase64s.push(await getBase64(img))
	}

	return {
		props: {
			imgBase64s,
			imgSrcs,
		},
	}
}
