import { theme, ThemingProps } from "@chakra-ui/react"

const baseStyle = {
	...theme.components.Button,
	fontWeight: 500,
}

function variantCta(props: ThemingProps) {
	const isInverted = props.colorScheme === "inverted"

	return {
		h: { base: "auto", md: 10 },
		py: 3,
		letterSpacing: "2px",
		textTransform: "uppercase",
		fontSize: { base: "xl", md: "md" },
		bg: isInverted ? "white" : "brand.700",
		color: isInverted ? "brand.700" : "white",
		boxShadow: "md",
		_hover: {
			bg: isInverted ? "gray.200" : "brand.800",
		},
		_focus: {
			bg: isInverted ? "gray.200" : "brand.800",
		},
		_active: {
			bg: isInverted ? "gray.200" : "brand.800",
			color: isInverted ? "brand.700" : "gray.200",
		},
	}
}

function variantNav(props: ThemingProps) {
	const isInverted = props.colorScheme === "inverted"

	return {
		h: { base: 12, md: 10 },
		letterSpacing: "1px",
		textTransform: "capitalize",
		fontSize: { base: "xl", md: "md" },
		bg: "transparent",
		color: isInverted ? "white" : "black",
		_hover: {
			bg: isInverted ? "brand.600" : "gray.200",
		},
		_focus: {
			bg: isInverted ? "brand.600" : "gray.200",
		},
		_active: {
			bg: isInverted ? "brand.800" : "gray.200",
			color: isInverted ? "white" : "brand.700",
		},
	}
}

function variantOutline() {
	return {
		border: "1px solid",
		borderColor: "brand.700",
		color: "brand.700",
		bg: "transparent",
		_hover: {
			bg: "brand.50",
		},
		_active: {
			bg: " brand.100",
		},
	}
}

const variants = {
	cta: variantCta,
	nav: variantNav,
	outline: variantOutline,
}

const defaultProps = {
	variant: "outline",
	size: "md",
	colorScheme: "brand",
}

const Button = {
	baseStyle,
	variants,
	defaultProps,
}

export default Button
