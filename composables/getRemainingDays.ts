import { getDaysInMonth, format } from 'date-fns'

export const getRemainingDaysInMonth = (month: Date) => {
    const daysInMonth = getDaysInMonth(month)
    const daysPassed = format(month, 'dd')
    return daysInMonth - parseInt(daysPassed)
}
