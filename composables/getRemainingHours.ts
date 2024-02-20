import { getDaysInMonth, format } from 'date-fns' 

const hours = format(new Date(), 'HH')
export const getRemainingHours = (hours: any) => {
	const daysInMonth = getDaysInMonth(hours)
	const hoursInMonth = (daysInMonth * 24)
	const currentHour = format(hours, 'HH')
	const daysPassed = format(hours, 'dd')
	const remainingDays = daysInMonth - parseInt(daysPassed)
	return hoursInMonth - (remainingDays * 24) - parseInt(currentHour)
}	