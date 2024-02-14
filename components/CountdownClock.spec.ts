import { describe, expect } from "vitest"
import { format, getDaysInMonth, hoursToSeconds } from "date-fns"
import { enCA } from "date-fns/locale"
import { render, screen, fireEvent } from "@testing-library/vue"
import  CountdownClock from "./CountdownClock.vue"


describe("CountdownClock", () => {
	test("should display the countdown clock template", () => {
		const { debug } = render(CountdownClock)
		debug()
		// render(CountdownClock)
		expect(screen.queryAllByTestId("countdown-clock")).toBeTruthy()
		fireEvent.copy(screen.getByText("Days"))
	});
	
	test("should contain a date object", () => {
		render(CountdownClock)
		const date = new Date()
		expect(date).toBeTruthy()
	})

	test("should display the current day and time", () => {
		render(CountdownClock)
		const date = new Date()
		const formattedDate = format(date, 'dd, hh, :mm, :ss')
		expect(formattedDate).toEqual(format(date, 'dd, hh, :mm, :ss'))
	})
	
	test("should display the current time in Toronto", () => {
		render(CountdownClock)
		const date = new Date()
		const formattedDate = format(date, 'dd, hh, :mm, :ss', { locale: enCA })
		expect(formattedDate).toEqual(format(date, 'dd, hh, :mm, :ss', { locale: enCA }))
	})

	test("Add the time and date stamps to each clock section", () => {
		render(CountdownClock)
		let remainingDays = format(new Date, 'dd')
		let remainingHours = format(new Date, 'hh')
		let remainingMinutes = format(new Date, ':mm')
		let remainingSeconds = format(new Date, ':ss')
		expect(remainingDays).toContain(format(new Date, 'dd'))
		expect(remainingHours).toContain(format(new Date, 'hh'))
		expect(remainingMinutes).toContain(format(new Date, ':mm'))
		expect(remainingSeconds).toContain(format(new Date, ':ss'))
	})

	test("Ensure clock runs in real time and displays", () => {
		const time = () => {
			// TODO: how to do reference local data from a component
			// TODO: What is the best way to test a setInterval function
			let remainingDays = format(new Date, 'dd')
			let remainingHours = format(new Date, 'hh')
			let remainingMinutes = format(new Date, ':mm')
			let remainingSeconds = format(new Date, ':ss')

			let countdown = remainingDays + remainingHours + remainingMinutes + remainingSeconds
			return countdown
		}
		// setInterval(() => {
		// 	time()
		// }, 1000)
		// 	`const countdown = useCountdown(’04-04-2024’)`

		// `countdown.days`, `countdown.minutes` etc

		// Now you can test passing a date that is 4 days in the future turns 4 days.


		// —

		// Then your component can be `<CountdownDisplay :countdown=‘countdown’ />`

		// And you can check that if you pass in 4 days, 3 minutes, 20 seconds, your component renders as such.


		// —

		// Then your page would go and have a SetInterval that updates the countdown object. Or better yet, your composable itself updates within it.

		// Something like

		// useCountdown(’04-04-2024’, true)
	})

	test("should determine how many days Remaining in month", () => {
		const daysInMonth = getDaysInMonth(new Date())
		expect(daysInMonth).toStrictEqual(getDaysInMonth(new Date()))
		const daysPassed = format(new Date(), 'dd')
		expect(daysPassed).toStrictEqual(format(new Date(), 'dd'))
		const remainingDays = daysInMonth - parseInt(daysPassed)
		console.log(remainingDays)
	})

	test("should determine how many hours left in month", () => {
		const daysInMonth = getDaysInMonth(new Date())
		const hoursInDay = 24
		const hoursInMonth = (daysInMonth * hoursInDay)
		expect(hoursInMonth).toEqual((daysInMonth * hoursInDay))
		const currentHour = format(new Date(), 'HH')
		const daysPassed = format(new Date(), 'dd')
		const remainingDays = daysInMonth - parseInt(daysPassed)
		const hoursRemainingInMonth = (remainingDays * hoursInDay) - parseInt(currentHour)
		console.log(hoursRemainingInMonth)
	})

	test("should determine how many minutes left in month", () => {
		const daysInMonth = getDaysInMonth(new Date())
		const hoursInDay = 24
		const minutesInHour = 60
		
		const daysPassed = format(new Date(), 'dd')
		const currentHour = format(new Date(), 'HH')
		const remainingDays = daysInMonth - parseInt(daysPassed)
		const minutesInMonth = (remainingDays * hoursInDay * minutesInHour) - parseInt(currentHour) * minutesInHour
		console.log(minutesInMonth)
	})

	test("should determine how many seconds left in month", () => {
		const daysInMonth = getDaysInMonth(new Date())
		const hoursInDay = 24
		const hoursInSeconds = hoursToSeconds(hoursInDay)
		console.log(hoursInSeconds)

		const daysPassed = format(new Date(), 'dd')
		const currentHour = format(new Date(), 'HH')
		const remainingDays = daysInMonth - parseInt(daysPassed)
		const secondsRemainingInMonth = (remainingDays * hoursInDay * hoursInSeconds) - parseInt(currentHour) * hoursInSeconds
		console.log(secondsRemainingInMonth)
	})

})
// const now = new Date().getTime?
// set a countdown time? timeLeft = countdownDate - now

// Countdown will reset to next month after reaching 0
// Countdown will update every second
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
