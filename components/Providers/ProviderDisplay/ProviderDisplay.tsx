import { Header } from "@/components/Typography"
import { Provider } from "@/content"
import { Grid, Typography } from "@material-ui/core"
import Image from "next/image"
import useProviderDisplayStyles from "./ProviderDisplay.styles"

interface ProviderDisplayProps {
	provider: Provider
	imgSrc: string
	imgBase64: string
}

const ProviderDisplay: React.FC<ProviderDisplayProps> = ({
	provider,
	imgSrc,
	imgBase64,
}) => {
	const classes = useProviderDisplayStyles()

	return (
		<Grid container spacing={2}>
			<Grid item xs={12} className={classes.xsImgGridItem}>
				<div className={classes.imageContainer}>
					<img
						aria-hidden="true"
						alt={provider.name}
						src={imgBase64}
						className={classes.blurredImage}
					/>
					<Image
						src={imgSrc}
						layout="fill"
						alt={provider.name}
						title={provider.name}
						quality={30}
						objectFit="cover"
						objectPosition="center center"
					/>
				</div>
			</Grid>
			<Grid item xs={12} md={8}>
				<Header>{provider.name}</Header>
				<Typography variant="body1">{provider.bio}</Typography>
			</Grid>
			<Grid item xs={12} md={4} className={classes.mdImgGridItem}>
				<div className={classes.imageContainer}>
					<img
						aria-hidden="true"
						alt={provider.name}
						src={imgBase64}
						className={classes.blurredImage}
					/>
					<Image
						src={imgSrc}
						layout="fill"
						alt={provider.name}
						title={provider.name}
						quality={30}
						objectFit="cover"
						objectPosition="center center"
					/>
				</div>
			</Grid>
		</Grid>
	)
}

export default ProviderDisplay
