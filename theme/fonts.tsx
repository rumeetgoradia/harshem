import { Global } from "@emotion/react"
const Fonts = () => (
	<Global
		styles={`
        @font-face {
            font-family: 'Spline Sans';
            src: url('/fonts/SplineSans.woff2') format('woff2');
            font-weight: 100 900;
            font-display: optional;
            font-style: normal italic;
        }
        `}
	/>
)
export default Fonts
