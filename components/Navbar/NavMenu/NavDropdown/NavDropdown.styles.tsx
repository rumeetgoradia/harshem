import { fade, makeStyles } from "@material-ui/core/styles"

const useNavDropdownStyles = makeStyles((theme) => ({
	icon: {
		transition: theme.transitions.create(["transform"]),
	},
	invertedIcon: {
		transform: "rotate(180deg)",
	},
	dropdownItem: {
		fontSize: theme.typography.fontSize,
		fontWeight: 500,
		letterSpacing: 1,
		textTransform: "uppercase",
		padding: `${theme.spacing(1)}px ${theme.spacing(3) - 1}px
		${theme.spacing(1)}px ${theme.spacing(3)}px`,
	},
	dropdownItemActive: {
		color: theme.palette.primary.main,
		backgroundColor: fade(theme.palette.primary.main, 0.2),
		"&:hover, &:focus": {
			backgroundColor: fade(theme.palette.primary.main, 0.2),
		},
	},
}))

export default useNavDropdownStyles
