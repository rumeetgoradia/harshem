import { fade, makeStyles } from "@material-ui/core/styles"

const useFormDatePickerStyles = makeStyles((theme) => ({
	root: {
		"& .react-datepicker-wrapper": {
			width: "100%",
		},
		"& .react-datepicker": {
			fontFamily: theme.typography.fontFamily,
			backgroundColor: theme.palette.common.white,
			"&-popper": {
				zIndex: 999,
				'&[data-placement^="top"] .react-datepicker__triangle': {
					borderTopColor: theme.palette.common.white,
				},
				'&[data-placement^="bottom"] .react-datepicker__triangle': {
					borderBottomColor: theme.palette.primary.main,
				},
			},
			"&__header": {
				backgroundColor: theme.palette.primary.main,
			},
			"&-time__header": {
				color: theme.palette.common.white,
			},
			"&__time": {
				backgroundColor: theme.palette.common.white,
				"&-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item": {
					"&:hover": {
						backgroundColor: fade(theme.palette.primary.main, 0.35),
					},
					"&--selected": {
						backgroundColor: theme.palette.primary.main,
					},
				},
			},
			"&__navigation--previous": {
				borderRightColor: theme.palette.common.white,
			},
			"&__navigation--next": {
				borderLeftColor: theme.palette.common.white,
			},
			"&__day-name, &__current-month": {
				color: theme.palette.common.white,
			},
			"&__day--selected": {
				color: theme.palette.common.white,
				background: theme.palette.primary.main,
			},
		},
	},
}))

export default useFormDatePickerStyles
