import { getRemainingDaysInMonth } from './getRemainingDays'

describe('getRemainingDaysInMonth', () => {

    test("should return 30 if given the first day of the month in a 31 day month", () => {
        // test case: january 1 2021
        // Note: January is 0-based
        const date = new Date(2021, 0, 1)
        const result = getRemainingDaysInMonth(date)
        expect(result).toBe(30)
    })

    test("should return remaining days in the month as 16 if given a date in the middle of the month on a 31 day month", () => {
        // test case: january 15 2021
        const date = new Date(2021, 0, 15)
        const result = getRemainingDaysInMonth(date)
        expect(result).toBe(16)
    })

    test("should return remaining days as 15 if given a 30 day month", () => {
        // test case: march 15 2021
        const date = new Date(2021, 3, 15)
        const result = getRemainingDaysInMonth(date)
        expect(result).toBe(15)
    })

    test("should be returning 28 days for February 2024 if given the 1 in February this year", () => {
        // test case: february 1 2024
        const date = new Date(2024, 1, 1)
        const result = getRemainingDaysInMonth(date)
        expect(result).toBe(28)
    })
})