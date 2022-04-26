import { extendTheme } from "@chakra-ui/react"
import { StyleFunctionProps } from "@chakra-ui/theme-tools"
import { components } from "./components/index"

const fonts = [
	"Spline Sans",
	"ui-sans-serif",
	"system-ui",
	"-apple-system",
	"BlinkMacSystemFont",
	"Segoe UI",
	"Roboto",
	"Helvetica Neue",
	"Arial",
	"Noto Sans",
	"sans-serif",
	"Apple Color Emoji",
	"Segoe UI Emoji",
	"Segoe UI Symbol",
	"Noto Color Emoji",
].join(",")

const theme = extendTheme({
	styles: {
		global: (props: StyleFunctionProps) => ({
			"html, body": {
				scrollBehavior: "smooth",
				fontFamily: fonts,
				bg: "white",
				color: "black",
			},
		}),
	},
	colors: {
		brand: {
			50: "#027d44",
			100: "#027d44",
			200: "#027d44",
			300: "#027d44",
			400: "#027d44",
			500: "#027d44",
			600: "#027d44",
			700: "#027d44",
			800: "#027d44",
			900: "#027d44",
		},
	},
	fonts: {
		heading: fonts,
		body: fonts,
	},
	textStyles: {
		header: {
			fontSize: "3xl",
			fontWeight: 400,
			mb: 4,
		},
		paragraph: {
			fontSize: "lg",
			fontWeight: 300,
			lineHeight: 1.6,
		},
	},
	components,
})

export default theme

export { default as Fonts } from "./fonts"
