export const convertTo12H = (time: string) => {
	const hours = parseInt(time.substring(0, 2))
	const suffix = hours >= 12 ? "PM" : "AM"

	return ((hours + 11) % 12) + 1 + time.substring(2) + " " + suffix
}

export const isBetweenTimes = (
	min: string,
	max: string,
	check?: string
): boolean => {
	console.log(min, max, check)

	if (!check) {
		return true
	}

	const convertToMinutes = (time: string): number => {
		const hours = parseInt(time.substring(0, 2))
		const minutes = parseInt(time.substring(3))

		return hours * 60 + minutes
	}

	const minMinutes = convertToMinutes(min)
	const maxMinutes = convertToMinutes(max)
	const checkMinutes = convertToMinutes(check)

	return checkMinutes >= minMinutes && checkMinutes <= maxMinutes - 30
}
