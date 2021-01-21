import { ThemeOverride } from "@chakra-ui/react"
import colors from "./colors"
import fonts from "./fonts"
export interface FoundationsOverride extends ThemeOverride {
	direction?: never
	styles?: never
	components?: never
	config?: never
}

const foundations: FoundationsOverride = {
	fonts,
	colors,
}

export default foundations
