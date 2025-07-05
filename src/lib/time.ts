export const convertTo12H = (time: string) => {
	const hours = parseInt(time.substring(0, 2))
	const suffix = hours >= 12 ? "PM" : "AM"

	return ((hours + 11) % 12) + 1 + time.substring(2) + " " + suffix
}
