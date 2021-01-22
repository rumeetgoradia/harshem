import Navbar from "@/components/Navbar"
import theme from "@/theme"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"
import { DefaultSeo } from "next-seo"
import { AppProps } from "next/app"
import { useEffect } from "react"
import SEO from "../next-seo.config"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side")
		if (jssStyles) {
			jssStyles.parentElement?.removeChild(jssStyles)
		}
	}, [])

	return (
		<>
			<DefaultSeo {...SEO} />
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Navbar />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}

export default App
