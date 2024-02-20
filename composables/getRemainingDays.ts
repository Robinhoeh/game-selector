import { getDaysInMonth, format } from 'date-fns'

export const getRemainingDaysInMonth = (month: Date): number => {
    const daysInMonth = getDaysInMonth(month)
    const daysPassed = format(month, 'dd')
    return daysInMonth - parseInt(daysPassed)
}
