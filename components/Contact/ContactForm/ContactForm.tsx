import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Grid,
	GridItem,
	Input,
	Textarea,
} from "@chakra-ui/react"
import { ContactData } from "content/contact"
import { useForm } from "react-hook-form"

const ContactForm: React.FC = ({}) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<ContactData>()

	const onSubmit = async (values: ContactData) => {
		// TODO send email
		// console.log(values)
		// const res = { status: 200 }
		// await redaxios
		// 	.post("/api/contact", values)
		// 	.then((res) => {
		// 		if (res.status === 200) {
		// 			toast({
		// 				title: "Message sent successfully.",
		// 				description:
		// 					"Thanks for your message! I'll get back to you shortly.",
		// 				status: "success",
		// 				onCloseComplete: reset,
		// 				...toastOptions,
		// 			})
		// 		} else {
		// 			throw new Error()
		// 		}
		// 	})
		// 	.catch(() =>
		// 		toast({
		// 			title: "Something went wrong.",
		// 			description:
		// 				"There was an issue processing your message. Please try again later!",
		// 			status: "error",
		// 			...toastOptions,
		// 		})
		// 	)
	}

	return (
		<Grid
			as="form"
			w="full"
			noValidate
			onSubmit={handleSubmit(onSubmit)}
			gap={6}
			templateColumns="repeat(2, 1fr)"
		>
			<Input type="hidden" name="url" />
			<GridItem colSpan={{ base: 2 }}>
				<FormControl id="name" isInvalid={!!errors.name} isRequired>
					<FormLabel>Name</FormLabel>
					<Input
						variant="outline"
						type="text"
						{...register("name", {
							required: "Please enter your name.",
						})}
					/>
					<FormErrorMessage>{errors.name?.message}</FormErrorMessage>
				</FormControl>
			</GridItem>
			<GridItem colSpan={{ base: 2, sm: 1 }}>
				<FormControl id="phone" isInvalid={!!errors.phone} isRequired>
					<FormLabel>Phone Number</FormLabel>
					<Input
						variant="outline"
						{...register("phone", {
							required: "Please enter your primary phone number.",
							pattern: {
								value:
									/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
								message: "Please enter a valid phone number.",
							},
						})}
					/>
					<FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
				</FormControl>
			</GridItem>
			<GridItem colSpan={{ base: 2, sm: 1 }}>
				<FormControl id="email" isInvalid={!!errors.email} isRequired>
					<FormLabel>Email</FormLabel>
					<Input
						variant="outline"
						type="email"
						{...register("email", {
							required: "Please enter your primary email.",
							pattern: {
								value:
									/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
								message: "Please enter a valid email address.",
							},
						})}
					/>
					<FormErrorMessage>{errors.email?.message}</FormErrorMessage>
				</FormControl>
			</GridItem>
			<GridItem colSpan={2}>
				<FormControl id="message" isInvalid={!!errors.message} isRequired>
					<FormLabel>Message</FormLabel>
					<Textarea
						variant="outline"
						rows={10}
						{...register("message", {
							required: "Please enter your message.",
						})}
					/>
					<FormErrorMessage>{errors.message?.message}</FormErrorMessage>
				</FormControl>
			</GridItem>
			<GridItem colSpan={2}>
				<Button
					type="submit"
					variant="filled"
					w="full"
					disabled={isSubmitting}
					isLoading={isSubmitting}
					loadingText="Sending..."
				>
					Send Message
				</Button>
			</GridItem>
		</Grid>
	)
}

export default ContactForm
