import { extendTheme, Theme } from "@chakra-ui/react"
import components from "./components"
import foundations from "./foundations"
import styles, { fontFaces } from "./styles"

export { fontFaces }

const theme: Theme = extendTheme({
	...foundations,
	components,
	styles,
})

export default theme
