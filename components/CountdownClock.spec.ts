import { describe, expect } from "vitest"
import { format } from "date-fns"
import { enCA } from "date-fns/locale"
import { render, screen, fireEvent } from "@testing-library/vue"
import  countdownClock from "./CountdownClock.vue"

describe("CountdownClock", () => {
	test("should display the countdown clock template", async() => {
		render(countdownClock)
		expect(screen.queryAllByTestId("countdown-clock")).toBeTruthy()
		await fireEvent.copy(screen.getByText("Days"))
	});
	
	test("should contain a date object", async () => {
		render(countdownClock)
		const date = new Date()
		expect(date).toBeTruthy()
	})

	test("should display the current day and time", async () => {
		render(countdownClock)
		const date = new Date()
		const formattedDate = format(date, 'dd, hh, :mm, :ss')
		expect(formattedDate).toEqual(format(date, 'dd, hh, :mm, :ss'))
	})
	
	test("should display the current time in Toronto", async () => {
		render(countdownClock)
		const date = new Date()
		const formattedDate = format(date, 'dd, hh, :mm, :ss', { locale: enCA })
		console.log(formattedDate)
		})
})

// Display the current time in Toronto in the expcted format
// Target countdown date is last day of each month
// Countdown will reset to next month after reaching 0
// Countdown will update every second
// Countdown will display 0 when countdown is complete
// each unit will display two digits
// each unit will display leading 0 when less than 10 
// each unit will display 00 when countdown is complete 
// each value will be passed to the component as a prop
// each value will be displayed in a span element
// each value will be displayed in a div element
// time will reflect the current local time in Toronto
// time will be displayed in 12 hour format 
// when there is less than 24 hours remaining, the days unit will be 0
// when there is less than 24 hours remaining, the numbers will turn red

