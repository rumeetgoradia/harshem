import { Box, Link, Text } from "@chakra-ui/react"
import { Layout } from "@components/Layout"
import { INSURANCE_PLANS } from "@content"
import { NextPage } from "next"
import Masonry from "react-masonry-css"

const InsurancePage: NextPage = () => {
	return (
		<Layout title="Insurance">
			<Box w="full">
				<Text as="h2" textStyle="header">
					Billing
				</Text>
				<Text textStyle="paragraph">
					We participate with most insurance plans. However, it is the
					patient&apos;s responsibility to understand whether his/her insurance
					has limits on the doctors you can see, or the services you can
					receive. If you provide complete and accurate information about your
					health insurance, we will submit claims to your insurance carrier and
					receive payments for services. Depending on your insurance coverage,
					you may be responsible for co-payments, co-insurance, or other
					deductible amounts. Please contact our billing office at{" "}
					<Link
						href="tel:7323883006"
						title="Contact our billing office"
						color="brand.700"
						_hover={{ textDecoration: "underline" }}
						_focus={{}}
					>
						(732) 388-3006
					</Link>{" "}
					or call your insurance carrier for any billing related questions or
					concerns.
				</Text>
			</Box>
			<Box>
				<Text as="h2" textStyle="header">
					Accepted Insurance Plans
				</Text>
				<Box
					w="full"
					sx={{
						"& .insurance-plans-grid": {
							display: "flex",
							ml: -3,
							w: "auto",
							"& .insurance-plans-grid-col": {
								pl: 3,
								bgClip: "padding-box",
								"& .insurance-plans-grid-col-item": {
									mb: 3,
								},
							},
						},
					}}
				>
					<Masonry
						className="insurance-plans-grid"
						columnClassName="insurance-plans-grid-col"
						breakpointCols={{ default: 3, 768: 2 }}
					>
						{INSURANCE_PLANS.map((plan) => (
							<Box
								w="full"
								className="insurance-plans-grid-col-item"
								key={`${plan}-accepted-insurance`}
							>
								<Text
									textStyle="paragraph"
									fontSize={{ base: "sm", sm: "md", md: "lg" }}
								>
									{plan}
								</Text>
							</Box>
						))}
					</Masonry>
				</Box>
			</Box>
		</Layout>
	)
}

export default InsurancePage
