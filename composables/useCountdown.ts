import { format } from 'date-fns'
import { getRemainingDaysInMonth } from './getRemainingDays'

export default function useCountdown(date: Date) {

	let remainingDays = getRemainingDaysInMonth(date)

	const displayDaysRemaining = () => {
		if (remainingDays === 0) {
			remainingDays = 'Last day of the month'
		}
		return remainingDays
	}

	const displayRemainingHours = () => {
		const hoursInDay = 24
		const currentHour = format(new Date(), 'HH')
		const hoursRemainingInMonth = Math.floor((remainingDays * hoursInDay) - parseInt(currentHour))
		if (hoursRemainingInMonth < 12) {
			return "0" + hoursRemainingInMonth
		}
		return hoursRemainingInMonth
	}

	const displayRemainingMinutes = () => {
		const minutesIndADay = 60 * 24
		const currentMinute = format(new Date(), 'mm')
		const minutesRemainingInMonth = minutesIndADay * remainingDays - parseInt(currentMinute)
		if(parseInt(currentMinute) > 50) {
			return "0" + Math.floor(minutesRemainingInMonth % 60)
		}
		return Math.round(minutesRemainingInMonth % 60)
	}

	const displayRemainingSeconds = () => {
		const secondsInADay = 60 * 60 * 24
		console.log(secondsInADay)
		const currentSecond = format(new Date(), 'ss')
		const secondsRemainingInMonth = secondsInADay * remainingDays - parseInt(currentSecond)
		if(parseInt(currentSecond) > 50) return "0" + secondsRemainingInMonth %60
		return Math.round(secondsRemainingInMonth % 60)
	}
	
	return {
		days: displayDaysRemaining,
		hours: displayRemainingHours,
		minutes: displayRemainingMinutes,
		seconds: displayRemainingSeconds
	}
}