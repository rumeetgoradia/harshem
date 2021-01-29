import { NavItem } from "@/constants"
import { Link as MuiLink, Menu, MenuItem } from "@material-ui/core"
import clsx from "clsx"
import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import { MouseEvent, useState } from "react"
import { HiOutlineChevronDown } from "react-icons/hi"
import useNavDropdownStyles from "./NavDropdown.styles"

interface NavDropdown {
	navItem: NavItem
	className?: string
}

const NavDropdown: React.FC<NavDropdown> = ({ navItem, className }) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const router = useRouter()

	const classes = useNavDropdownStyles()

	const handleClick = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<>
			<MuiLink
				onClick={handleClick}
				aria-controls={`nav-dropdown-${navItem.title}`}
				aria-haspopup="true"
				component="button"
				className={className}
			>
				<span>{navItem.title}</span>{" "}
				<HiOutlineChevronDown
					className={clsx(classes.icon, anchorEl && classes.invertedIcon)}
				/>
			</MuiLink>
			<Menu
				id={`nav-dropdown-${navItem.title}`}
				getContentAnchorEl={null}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				keepMounted
				anchorEl={anchorEl}
				open={!!anchorEl}
				onClose={handleClose}
			>
				{navItem.dropdownItems?.map((item, index) => (
					<Link
						href={item.path}
						passHref
						key={`nav-dropdown-${navItem.title}-item-${index}`}
					>
						<MenuItem
							onClick={handleClose}
							className={clsx(
								classes.dropdownItem,
								router.pathname === item.path && classes.dropdownItemActive
							)}
						>
							{item.title}
						</MenuItem>
					</Link>
				))}
			</Menu>
		</>
	)
}

export default NavDropdown
