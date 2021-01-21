import { createTransition } from "@/utils"
import { Box, Icon } from "@chakra-ui/react"
import { useMemo } from "react"

interface DrawerToggleProps {
	isOpen: boolean
	onToggle: () => void
}

const DrawerToggle: React.FC<DrawerToggleProps> = ({ isOpen, onToggle }) => {
	const transition = useMemo(
		() =>
			createTransition(["stroke-dasharray", "stroke-dashoffset"], {
				duration: "500ms",
			}),
		[]
	)

	return (
		<Box display={{ base: "block", md: "none" }} onClick={onToggle}>
			<Icon
				w={10}
				h={10}
				viewBox="0 0 100 100"
				fill="transparent"
				stroke="white"
				strokeWidth="6"
				cursor="pointer"
				opacity={0.85}
				_hover={{ opacity: 1 }}
				transition={createTransition("opacity")}
			>
				<path
					style={{
						transition,
						strokeDasharray: isOpen ? "90 207" : "60 207",
						strokeDashoffset: isOpen ? -134 : 0,
					}}
					d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
				/>
				<path
					style={{
						transition,
						strokeDasharray: isOpen ? "1 60" : "60 60",
						strokeDashoffset: isOpen ? -30 : 0,
					}}
					d="M 20,50 H 80"
				/>
				<path
					style={{
						transition,
						strokeDasharray: isOpen ? "90 207" : "60 207",
						strokeDashoffset: isOpen ? -134 : 0,
					}}
					d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
				/>
			</Icon>
		</Box>
	)
}

export default DrawerToggle
