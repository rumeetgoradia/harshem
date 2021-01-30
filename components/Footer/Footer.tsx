import { EMAIL, NAV_ITEMS, PHONE, SITE_NAME } from "@/constants"
import Logo from "@/images/logo.svg"
import {
	Box,
	Container,
	Grid,
	Link as MuiLink,
	Typography,
} from "@material-ui/core"
import Link from "next/link"
import useFooterStyles from "./Footer.styles"

const Footer: React.FC = () => {
	const classes = useFooterStyles()

	return (
		<Box
			component="footer"
			width="100%"
			bgcolor="primary.dark"
			color="white"
			py={4}
		>
			<Container maxWidth="lg" className={classes.root}>
				<Grid container spacing={4} justify="space-between">
					<Grid item xs={12} md={6}>
						<Box
							display="flex"
							alignItems="center"
							width="100%"
							mb={1}
							className={classes.titleContainer}
						>
							<Logo className={classes.logo} />
							<Typography variant="h5" className={classes.title}>
								{SITE_NAME}
							</Typography>
						</Box>
						<Box
							display="flex"
							flexDirection="column"
							width="100%"
							className={classes.contactContainer}
						>
							<MuiLink href={`mailto:${EMAIL}`} className={classes.contactLink}>
								{EMAIL}
							</MuiLink>
							<MuiLink href={`tel:${PHONE}`} className={classes.contactLink}>
								{PHONE}
							</MuiLink>
						</Box>
					</Grid>
					<Grid item xs={12} md={6} className={classes.navLinksWrapper}>
						<Grid container spacing={2}>
							{NAV_ITEMS.map((navItem, navItemIndex) =>
								navItem.path ? (
									<Grid
										item
										xs={12}
										sm={6}
										className={classes.navLinkContainer}
										key={`footer-nav-${navItemIndex}`}
									>
										<Link href={navItem.path} passHref>
											<MuiLink className={classes.navLink}>
												{navItem.title}
											</MuiLink>
										</Link>
									</Grid>
								) : (
									navItem.dropdownItems?.map(
										(dropdownItem, dropdownItemIndex) => (
											<Grid
												item
												xs={12}
												sm={6}
												className={classes.navLinkContainer}
												key={`footer-nav-${navItemIndex}-dropdown-${dropdownItemIndex}`}
											>
												<Link href={dropdownItem.path} passHref>
													<MuiLink className={classes.navLink}>
														{dropdownItem.title}
													</MuiLink>
												</Link>
											</Grid>
										)
									)
								)
							)}
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}

export default Footer
