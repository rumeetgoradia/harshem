import {
	Button as ChakraButton,
	ButtonProps,
	useStyleConfig,
} from "@chakra-ui/react"

interface CustomButtonProps extends ButtonProps {
	isInverted?: boolean
}

const Button: React.FC<CustomButtonProps> = ({
	size,
	variant,
	isInverted,
	children,
	...props
}) => {
	const styles = useStyleConfig("Button", {
		size,
		variant,
		colorScheme: isInverted ? "inverted" : "brand",
	})

	return (
		<ChakraButton sx={styles} {...props}>
			{children}
		</ChakraButton>
	)
}

export default Button
