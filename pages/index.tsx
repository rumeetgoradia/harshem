import { SITE_NAME } from "@/constants"
import { Button } from "@chakra-ui/react"
import { NextSeo } from "next-seo"

const IndexPage: React.FC = () => {
	return (
		<>
			<NextSeo titleTemplate="%s" title={SITE_NAME} />
			<div style={{ height: 2000 }} />
			<Button color="primary">Hello</Button>
		</>
	)
}

export default IndexPage
