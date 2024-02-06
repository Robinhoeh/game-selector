import { describe } from "vitest"
import { CountdownClock } from "./CountdownClock.vue"

// Display the current time in Toronto in the expcted format
describe('"CountdownClock", () => {
	test("should display the countdown clock template", () => {
		const { CountdownClock } = require("./CountdownClock.vue")
		const wrapper = shallowMount(CountdownClock)
		expect(wrapper.html()).toMatchSnapshot()
	})
})
// countdown clock template displays
// display current date
// display current time
// Clock will display days, hours, minutes, and seconds
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

