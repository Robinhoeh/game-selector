import { getRemainingHours } from './getRemainingHours'
import { format } from 'date-fns'


// 31 days = 744 hours
// 30 days = 720 hours
// 29 days = 696 hours
// 28 days = 672 hours

describe('getRemainingHours', () => {
	test("should return 744 if given the first day of the month in a 31 day month", () => {
		const hours = new Date(2024, 0o1, 0o0, 672)
		const result = getRemainingHours(hours)
		console.log(result)
		expect(result).toBe(744)
	})
})