import { ThemeOverride } from "@chakra-ui/react"
import fontFaces from "./font-faces"

const styles: ThemeOverride["styles"] = {
	global: {
		body: {
			background: "gray.100",
			scrollBehavior: "smooth",
		},
	},
}

export { fontFaces }

export default styles
