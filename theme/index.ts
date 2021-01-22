import { createMuiTheme } from "@material-ui/core"
import Inter from "../public/fonts/inter.woff2"

const theme = createMuiTheme({
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
	overrides: {
		MuiCssBaseline: {
			"@global": {
				"@font-face": [
					// inter300Italic,
					// inter400,
					// inter400Italic,
					// inter500,
					// inter500Italic,
					// inter600,
					// inter600Italic,
				],
			},
		},
	},
})

const fontFaces = [
	{
		fontFamily: "Inter",
		fontStyle: "normal",
		fontDisplay: "optional",
		fontWeight: 300,
		src: `
						local('Inter'),
						local('Inter-Regular'),
						url(${Inter}) format('woff2')
					  `,
		unicodeRange:
			"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,U+FEFF, U+FFFD",
	},
	{
		fontFamily: "Inter",
		fontStyle: "normal",
		fontDisplay: "optional",
		fontWeight: 400,
		src: `local('Inter'), local('Inter-Regular'), url(${Inter}) format('woff2')`,
		unicodeRange:
			"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,U+FEFF, U+FFFD",
	},

	{
		fontFamily: "Inter",
		fontStyle: "normal",
		fontDisplay: "optional",
		fontWeight: 500,
		src: `
						local('Inter'),
						local('Inter-Regular'),
						url(${Inter}) format('woff2')
					  `,
		unicodeRange:
			"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,U+FEFF, U+FFFD",
	},

	{
		fontFamily: "Inter",
		fontStyle: "normal",
		fontDisplay: "optional",
		fontWeight: 600,
		src: `
						local('Inter'),
						local('Inter-Regular'),
						url(${Inter}) format('woff2')
					  `,
		unicodeRange:
			"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,U+FEFF, U+FFFD",
	},

	{
		fontFamily: "Inter",
		fontStyle: "italic",
		fontDisplay: "optional",
		fontWeight: 300,
		src: `
						local('Inter'),
						local('Inter-Regular'),
						url(${Inter}) format('woff2')
					  `,
		unicodeRange:
			"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,U+FEFF, U+FFFD",
	},

	{
		fontFamily: "Inter",
		fontStyle: "italic",
		fontDisplay: "optional",
		fontWeight: 400,
		src: `
						local('Inter'),
						local('Inter-Regular'),
						url(${Inter}) format('woff2')
					  `,
		unicodeRange:
			"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,U+FEFF, U+FFFD",
	},

	{
		fontFamily: "Inter",
		fontStyle: "italic",
		fontDisplay: "optional",
		fontWeight: 500,
		src: `
						local('Inter'),
						local('Inter-Regular'),
						url(${Inter}) format('woff2')
					  `,
		unicodeRange:
			"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,U+FEFF, U+FFFD",
	},

	{
		fontFamily: "Inter",
		fontStyle: "italic",
		fontDisplay: "optional",
		fontWeight: 600,
		src: `
						local('Inter'),
						local('Inter-Regular'),
						url(${Inter}) format('woff2')
					  `,
		unicodeRange:
			"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,U+FEFF, U+FFFD",
	},
]

export default theme
