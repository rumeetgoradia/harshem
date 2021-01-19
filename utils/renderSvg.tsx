export const renderSvg = async (
	path: string,
	props?: React.SVGProps<SVGSVGElement>
): Promise<JSX.Element> => {
	const Svg: React.FC<React.SVGProps<SVGSVGElement>> = (
		await import("images/" + path + ".svg")
	).default
	return <Svg {...props} />
}
