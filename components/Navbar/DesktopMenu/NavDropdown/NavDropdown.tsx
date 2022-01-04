import { Box, Flex, Text } from "@chakra-ui/react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { createTransition } from "@utils"
import NextLink from "next/link"
import { useState } from "react"
import { HiChevronDown } from "react-icons/hi"

type NavDropdownProps = {
	title: string
	dropdownItems: { title: string; path: string }[]
}

const NavDropdown: React.FC<NavDropdownProps> = ({ title, dropdownItems }) => {
	const [open, setOpen] = useState<boolean>(false)

	return (
		<DropdownMenu.Root
			open={open}
			onOpenChange={(_open) => setOpen(_open)}
			key={`${title}-nav-item`}
		>
			<DropdownMenu.Trigger>
				<Flex gap={1} align="center">
					<Text>{title} </Text>
					<Box
						as="span"
						transition={createTransition(["transform"])}
						transform={open ? "rotate(-180deg)" : ""}
					>
						<HiChevronDown />
					</Box>
				</Flex>
			</DropdownMenu.Trigger>

			<DropdownMenu.Content align="start">
				{dropdownItems.map(({ title: diTitle, path: diPath }) => (
					<DropdownMenu.Item key={`${title}-nav-item-${diTitle}-dd-item`}>
						<NextLink href={diPath}>{diTitle}</NextLink>
					</DropdownMenu.Item>
				))}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	)
}

export default NavDropdown
