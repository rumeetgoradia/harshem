import { EMAIL, PHONE } from "@/constants"
import {
	Box,
	Button,
	Container,
	Grid,
	Link as MuiLink,
	Typography,
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
						<MuiLink href={`mailto:${EMAIL}`}>
							<Typography align="center" className={classes.link}>
								{EMAIL}
							</Typography>
						</MuiLink>
						<MuiLink href={`tel:${PHONE}`}>
							<Typography align="center" className={classes.link}>
								{PHONE}
							</Typography>
						</MuiLink>
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
