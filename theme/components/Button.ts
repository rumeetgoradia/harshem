import { createTransition } from "@utils"

export const Button = {
	baseStyle: {
		textTransform: "uppercase",
	},
	variants: {
		filled: {
			backgroundColor: "brand",
			borderRadius: "sm",
			color: "white",
			opacity: 0.8,
			transition: createTransition(["opacity", "transform"]),
			_hover: {
				opacity: 1,
				transform: "scale(1.05)",
			},
			_focus: {
				outline: "none",
				boxShadow: "none",
				opacity: 1,
				transform: "scale(1.05)",
			},
			_active: {
				transform: "scale(0.975)",
			},
		},
	},
	sizes: {
		md: {
			lineHeight: 1,
			fontWeight: 600,
			letterSpacing: 1,
			pt: "3px",
			pl: "16px",
			pr: "15px",
		},
	},
}
