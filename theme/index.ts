import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"

const theme = responsiveFontSizes(
	createMuiTheme({
		palette: {
			primary: {
				100: "#b1ffda",
				200: "#82fdc3",
				300: "#52fcad",
				400: "#2afb95",
				500: "#19e27b",
				600: "#0db060",
				700: "#027d44",
				800: "#004b28",
				900: "#001b0b",
				main: "#027d44",
				light: "#0db060",
				dark: "#004b28",
			},
			common: {
				white: "#EDF2F7",
			},
			background: {
				default: "#EDF2F7",
			},
		},
		typography: {
			fontSize: 16,
			fontFamily: [
				'"Inter"',
				"-apple-system",
				"BlinkMacSystemFont",
				'"Segoe UI"',
				"Roboto",
				'"Helvetica Neue"',
				"Arial",
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(","),
		},
		zIndex: {
			modal: 9998,
			appBar: 9999,
		},
		props: {
			MuiButton: {
				disableRipple: true,
			},
		},
		overrides: {
			MuiButton: {
				contained: {
					transition:
						"transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
					"&:hover": {
						transform: "scale(1.05)",
					},
					"&:active": {
						transform: "scale(0.95)",
					},
				},
			},
		},
	})
)

export default theme
