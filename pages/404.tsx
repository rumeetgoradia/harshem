import { Button, Text, VStack } from "@chakra-ui/react"
import { Layout } from "@components/Layout"
import type { NextPage } from "next"
import NextLink from "next/link"

const _404Page: NextPage = () => {
	return (
		<Layout title="404">
			<VStack spacing={6}>
				<Text textStyle="paragraph">There&apos;s nothing here.</Text>
				<NextLink href="/" passHref>
					<Button as="a" title="Home" variant="filled">
						Return Home
					</Button>
				</NextLink>
			</VStack>
		</Layout>
	)
}

export default _404Page
