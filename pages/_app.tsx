import theme, { fontFaces } from "@/theme"
import { ChakraProvider } from "@chakra-ui/react"
import { Global } from "@emotion/react"
import { DefaultSeo } from "next-seo"
import { AppProps } from "next/app"
import SEO from "../next-seo.config"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<DefaultSeo {...SEO} />
			<ChakraProvider theme={theme}>
				<Global styles={fontFaces} />
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	)
}

export default App
