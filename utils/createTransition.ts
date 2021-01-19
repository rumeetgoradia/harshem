import theme from "@/theme"
import { theme as defaultTheme } from "@chakra-ui/theme"

interface Options {
	duration?: string
	easing?: string
	delay?: string
}

export const createTransition = (
	properties: string | string[],
	options?: Options
): string => {
	const _properties = ([] as string[]).concat(properties)
	const _options = {
		duration:
			options?.duration ||
			theme?.transition.duration["normal"] ||
			defaultTheme.transition.duration["normal"],
		easing:
			options?.easing ||
			theme?.transition.easing["ease-in-out"] ||
			defaultTheme.transition.easing["ease-in-out"],
		delay: options?.delay || "0ms",
	}

	return _properties
		.map(
			(property) =>
				`${property} ${_options.duration} ${_options.easing} ${_options.delay}`
		)
		.join(", ")
}
