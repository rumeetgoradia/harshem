import { extendTheme } from "@chakra-ui/react"

const fonts = [
	"*",
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

const theme = extendTheme({})

export default theme

export { default as Fonts } from "./fonts"
