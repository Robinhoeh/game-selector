import { getDaysInMonth, format } from 'date-fns'

const month = new Date()
export const getRemainingDaysInMonth = (month: string) => {
    const daysInMonth = getDaysInMonth(month)
    const daysPassed = format(month, 'dd')
    return daysInMonth - parseInt(daysPassed)
}
