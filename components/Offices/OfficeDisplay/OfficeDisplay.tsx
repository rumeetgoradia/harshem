import { Box, Grid, GridItem, Link, Text } from "@chakra-ui/react"
import { DAYS } from "@constants"
import { Office } from "@content"
import { createTransition } from "@utils"

type OfficeDisplayProps = {
	office: Office
}

const OfficeDisplay: React.FC<OfficeDisplayProps> = ({
	office: { title, address, phone, fax, hours, googleMaps },
}) => {
	return (
		<Box>
			<Text as="h2" textStyle="header">
				{title}
			</Text>
			<Grid gap={4} templateColumns="repeat(5, 1fr)">
				<GridItem colSpan={1}>
					<Text
						textStyle="paragraph"
						fontSize={{ base: "sm", md: "md", lg: "lg" }}
						fontWeight={400}
					>
						Address
					</Text>
				</GridItem>
				<GridItem colSpan={4}>
					<Link
						href={googleMaps}
						title={`View ${title} office on Google Maps`}
						transition={createTransition("color")}
						_hover={{ color: "brand", textDecoration: "underline" }}
						_focus={{}}
					>
						{address.map((line) => (
							<Text
								textStyle="paragraph"
								fontSize={{ base: "sm", md: "md", lg: "lg" }}
								key={`${title}-office-display-${line}-address-line`}
							>
								{line}
							</Text>
						))}
					</Link>
				</GridItem>
				<GridItem colSpan={1}>
					<Text
						textStyle="paragraph"
						fontSize={{ base: "sm", md: "md", lg: "lg" }}
						fontWeight={400}
					>
						Phone
					</Text>
				</GridItem>
				<GridItem colSpan={4}>
					<Link
						href={`tel:${phone}`}
						title={`Call ${title} office`}
						textStyle="paragraph"
						fontSize={{ base: "sm", md: "md", lg: "lg" }}
						transition={createTransition("color")}
						_hover={{ color: "brand", textDecoration: "underline" }}
						_focus={{}}
					>
						{phone}
					</Link>
				</GridItem>
				<GridItem colSpan={1}>
					<Text
						textStyle="paragraph"
						fontSize={{ base: "sm", md: "md", lg: "lg" }}
						fontWeight={400}
					>
						Fax
					</Text>
				</GridItem>
				<GridItem colSpan={4}>
					<Text
						textStyle="paragraph"
						fontSize={{ base: "sm", md: "md", lg: "lg" }}
					>
						{fax}
					</Text>
				</GridItem>
				<GridItem colSpan={1}>
					<Text
						textStyle="paragraph"
						fontSize={{ base: "sm", md: "md", lg: "lg" }}
						fontWeight={400}
					>
						Hours
					</Text>
				</GridItem>
				<GridItem colSpan={4}>
					<Grid templateColumns="repeat(3, 1fr)" w="full">
						{DAYS.map((day) => {
							const dayHours = hours[day]
							return (
								<>
									<GridItem colSpan={1}>
										<Text
											textStyle="paragraph"
											fontSize={{ base: "sm", lg: "lg" }}
											mr={4}
										>
											{day}
										</Text>
									</GridItem>
									<GridItem colSpan={2}>
										<Text
											textStyle="paragraph"
											fontSize={{ base: "sm", md: "md", lg: "lg" }}
											fontStyle="italic"
										>
											{dayHours ? (
												<>
													{dayHours.open} &ndash; {dayHours.close}
												</>
											) : (
												"CLOSED"
											)}
										</Text>
									</GridItem>
								</>
							)
						})}
					</Grid>
				</GridItem>
			</Grid>
		</Box>
	)
}

export default OfficeDisplay
