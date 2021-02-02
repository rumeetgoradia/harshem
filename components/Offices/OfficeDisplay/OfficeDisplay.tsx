import { Header } from "@/components/Typography"
import { Office } from "@/content"
import { Box, Button, Grid, Typography } from "@material-ui/core"
import { Fragment } from "react"
import { AiFillPhone } from "react-icons/ai"
import { FaFax } from "react-icons/fa"
import { RiMapPinFill } from "react-icons/ri"
import useOfficeDisplayStyles from "./OfficeDisplay.styles"

interface OfficeDisplayProps {
	office: Office
}

const OfficeDisplay: React.FC<OfficeDisplayProps> = ({ office }) => {
	const classes = useOfficeDisplayStyles()

	return (
		<>
			<Header>{office.title}</Header>
			<Grid container spacing={3} justify="space-between">
				<Grid item xs={12} sm={5} md={4}>
					{office.address.map((addressLine, index) => (
						<Grid container spacing={1} alignItems="center">
							<Grid item xs={1}>
								{index === 0 && <RiMapPinFill />}
							</Grid>
							<Grid item xs={11}>
								<Typography
									variant="body1"
									key={`${office.title}-address-line-${index}`}
								>
									{addressLine}
								</Typography>
							</Grid>
						</Grid>
					))}
					<Box width="75%" mt={1}>
						<Button
							variant="outlined"
							color="primary"
							href={office.googleMaps}
							fullWidth
						>
							Google Maps
						</Button>
					</Box>
				</Grid>
				<Grid item xs={12} sm={5} md={4}>
					<Grid container spacing={1} alignItems="center">
						<Grid item xs={1}>
							<AiFillPhone />
						</Grid>
						<Grid item xs={11}>
							<Typography variant="body1">{office.phone}</Typography>
						</Grid>
					</Grid>
					<Grid container spacing={1} alignItems="center">
						<Grid item xs={1}>
							<FaFax />
						</Grid>
						<Grid item xs={11}>
							<Typography variant="body1">{office.fax}</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid
					item
					xs={12}
					md={4}
					component={Box}
					display="flex"
					justifyContent="center"
				>
					<Grid
						container
						spacing={1}
						component={Box}
						width="100%"
						maxWidth={300}
					>
						<Grid item xs={12} className={classes.hoursTitle}>
							Hours
						</Grid>
						{Object.entries(office.hours).map(([day, hours], index) => (
							<Fragment key={`office-${office.title}-hours-${index}`}>
								<Grid item xs={3} className={classes.day}>
									<Box width="100%" px={1.5}>
										{day}
									</Box>
								</Grid>
								<Grid item xs={9}>
									<Box width="100%" px={1.5}>
										{hours}
									</Box>
								</Grid>
							</Fragment>
						))}
					</Grid>
				</Grid>
			</Grid>
		</>
	)
}

export default OfficeDisplay
