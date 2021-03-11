import { Typography } from "@material-ui/core"
import useMasonryGridItemStyles from "./MasonryGridItem.styles"

interface MasonryGridItemProps {
	title: string
	note?: string
}

const MasonryGridItem: React.FC<MasonryGridItemProps> = ({ title, note }) => {
	const classes = useMasonryGridItemStyles()

	return (
		<div className={classes.root}>
			<Typography variant="h5" className={classes.title}>
				{title}
			</Typography>
			{note && <Typography className={classes.note}>{note}</Typography>}
		</div>
	)
}

export default MasonryGridItem
