import { makeStyles } from "@material-ui/core/styles"

interface NavbarStylesProps {
	isScrolled: boolean
}

const useNavbarStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.primary.main,
		padding: `${theme.spacing(1.5)}px ${theme.spacing(4)}px`,
		transition: theme.transitions.create([
			"background-color",
			"padding",
			"box-shadow",
		]),
		[theme.breakpoints.up("md")]: {
			backgroundColor: (props: NavbarStylesProps) =>
				props.isScrolled ? theme.palette.primary.main : "transparent",
			padding: (props: NavbarStylesProps) =>
				props.isScrolled
					? `${theme.spacing(1)}px ${theme.spacing(7.5)}px`
					: `${theme.spacing(2)}px ${theme.spacing(7.5)}px`,
		},
	},
	toolbar: {
		justifyContent: "space-between",
	},
	logo: {
		cursor: "pointer",
		width: "auto",
		height: 48,
		fill: theme.palette.common.white,
		opacity: 0.85,
		transition: theme.transitions.create(["opacity", "fill", "height"]),
		"&:hover": {
			opacity: 1,
		},
		[theme.breakpoints.up("md")]: {
			height: (props: NavbarStylesProps) => (props.isScrolled ? 56 : 80),
		},
	},
	drawer: {
		padding: `${theme.spacing(1) + 84}px 
				${theme.spacing(6.5)}px ${theme.spacing(2)}px`,
		backgroundColor: theme.palette.primary.main,
	},
}))

export default useNavbarStyles
