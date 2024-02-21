import { getRemainingHours } from './getRemainingHours'
import { format } from 'date-fns'


// 31 days = 744 hours
// 30 days = 720 hours
// 29 days = 696 hours
// 28 days = 672 hours

describe('getRemainingHours', () => {
	test("should return 672 if given the first day of the month in a 31 day month", () => {
		const hours = new Date(2023, 20, 1)
		// show time in hours

		// TODO: what format should the date be in
		const result = getRemainingHours(hours)
		console.log(result)
		// expect(result).toBe(744)
	})

	// test("should return 24 hours if given the last day of the month in a 28 day month", () => {
	// 	const hours = new Date(2023, 2, 27, 24)
	// 	const result = getRemainingHours(hours)
	// 	console.log(result)
	// 	expect(result).toBe(24)
	// })
})