import { EMAIL, NAV_ITEMS, PHONE, SITE_NAME } from "@/constants"
import Logo from "@/images/logo.svg"
import {
	Box,
	Container,
	Grid,
	IconButton,
	Link as MuiLink,
	Typography,
} from "@material-ui/core"
import Link from "next/link"
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
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
				<Grid container spacing={4}>
					<Grid item xs={12}>
						<Box display="flex" className={classes.header}>
							<Box
								display="flex"
								alignItems="center"
								className={classes.titleContainer}
							>
								<Logo className={classes.logo} />
								<Typography variant="h5" className={classes.title}>
									{SITE_NAME}
								</Typography>
							</Box>
							<Box
								display="flex"
								justifyContent="center"
								alignItems="center"
								className={classes.contactContainer}
							>
								<IconButton
									href={`mailto:${EMAIL}`}
									className={classes.contactButton}
								>
									<AiOutlineMail />
								</IconButton>
								<IconButton
									href={`tel:${PHONE}`}
									className={classes.contactButton}
								>
									<AiOutlinePhone />
								</IconButton>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={12}>
						<Box py={2}>
							<Grid container spacing={2}>
								{NAV_ITEMS.map((navItem, navItemIndex) =>
									navItem.path ? (
										<Grid
											item
											xs={12}
											sm={6}
											md={4}
											lg={3}
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
													md={4}
													lg={3}
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
						</Box>
					</Grid>
					<Grid item xs={12}>
						<Typography align="center" className={classes.copyright}>
							© {new Date().getFullYear()} {SITE_NAME}
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}

export default Footer
