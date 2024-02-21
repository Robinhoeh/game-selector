import { getDaysInMonth, format } from 'date-fns' 

export const getRemainingHours = (hours: Date) => {
	const daysInMonth = getDaysInMonth(hours)
	const hoursInMonth = (daysInMonth * 24)
	const currentHour = format(hours, 'HH')
	const daysPassed = format(hours, 'dd')
	console.log(daysPassed, 'daysPassed')
	const remainingDays = daysInMonth - parseInt(daysPassed)
	return hoursInMonth - (remainingDays * 24) - parseInt(currentHour)
	
}	