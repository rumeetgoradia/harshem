import Logo from "@/images/logo.svg"
import { AppBar, Theme, Toolbar, useMediaQuery } from "@material-ui/core"
import Link from "next/link"
import { useEffect, useState } from "react"
import useNavbarStyles from "./Navbar.styles"
const Navbar: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false)

	const handleScroll = () => {
		setIsScrolled(window.pageYOffset > 75)
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		handleScroll()
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const classes = useNavbarStyles({ isScrolled })
	const isMediumScreen = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.up("md")
	)

	return (
		<AppBar
			position="fixed"
			elevation={isMediumScreen ? (isScrolled ? 8 : 0) : 8}
			className={classes.root}
		>
			<Toolbar className={classes.toolbar}>
				<Link href="/">
					<Logo className={classes.logo} />
				</Link>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
