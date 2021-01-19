import { renderSvg } from "@/utils"
import { useEffect, useState } from "react"

export const useDynamicSvgGeneration = (
	path: string,
	props?: React.SVGProps<SVGSVGElement>
): JSX.Element | undefined => {
	const [svg, setSvg] = useState<JSX.Element>()

	useEffect(() => {
		let mounted = true
		if (mounted) {
			renderSvg(path, props).then((value) => setSvg(value))
		}
		return () => {
			mounted = false
		}
	}, [])

	return svg
}
