import { describe, expect } from "vitest"
import { format, getDaysInMonth } from "date-fns"
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

		// set the countdown daate to new date , then add time 7 days four hours - getCountDown object composable should return said date
		// test the specific object, format
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
		const hoursInMonth = (daysInMonth * 24)
		expect(hoursInMonth).toEqual((daysInMonth * 24))
		const currentHour = format(new Date(), 'HH')
		const daysPassed = format(new Date(), 'dd')
		const remainingDays = daysInMonth - parseInt(daysPassed)
		const hoursRemainingInMonth = (remainingDays * 24) - parseInt(currentHour)
		console.log(hoursRemainingInMonth)
	})

	test("should determine how many minutes left in month", () => {
		const daysInMonth = getDaysInMonth(new Date())
		const daysPassed = format(new Date(), 'dd')
		const remainingDays = daysInMonth - parseInt(daysPassed)
		const minutesIndADay = 60 * 24
		const currentMinute = format(new Date(), 'mm')
		const minutesRemainingInMonth = minutesIndADay * remainingDays - parseInt(currentMinute)
		console.log(Math.round(minutesRemainingInMonth % 60))
	})

	test("should determine how many seconds left in month", () => {
		const daysInMonth = getDaysInMonth(new Date())
		const daysPassed = format(new Date(), 'dd')
		const remainingDays = daysInMonth - parseInt(daysPassed)
		const secondsInADay = 60 * 60 * 24
		const currentSecond = format(new Date(), 'ss')
		const secondsRemainingInMonth = secondsInADay * remainingDays - parseInt(currentSecond)
		console.log(secondsRemainingInMonth)
	})
})






