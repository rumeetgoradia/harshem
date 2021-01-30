import { EMAIL, PHONE } from "@/constants"
import {
	Box,
	Button,
	Container,
	Grid,
	Link as MuiLink,
} from "@material-ui/core"
import Link from "next/link"
import useContactInfoStyles from "./ContactInfo.styles"

const ContactInfo: React.FC = () => {
	const classes = useContactInfoStyles()

	return (
		<Box component="section" width="100%" className={classes.root}>
			<Container maxWidth="md">
				<Grid container spacing={2} alignItems="center">
					<Grid item xs={12} sm={6}>
						<Box
							display="flex"
							flexDirection="column"
							justifyContent="center"
							alignContent="center"
							width="100%"
						>
							<MuiLink href={`mailto:${EMAIL}`} className={classes.link}>
								{EMAIL}
							</MuiLink>
							<MuiLink href={`tel:${PHONE}`} className={classes.link}>
								{PHONE}
							</MuiLink>
						</Box>
					</Grid>

					<Grid item xs={12} sm={6}>
						<Link href="/contact" passHref>
							<Button variant="contained" fullWidth className={classes.button}>
								Contact Us
							</Button>
						</Link>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}

export default ContactInfo
