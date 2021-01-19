import { ThemeOverride } from "@chakra-ui/react"
import fonts from "./fonts"

export interface FoundationsOverride
	extends Omit<
		ThemeOverride,
		"direction" | "styles" | "components" | "config"
	> {}

const foundations: FoundationsOverride = {
	fonts,
}

export default foundations
