describe('useCountdown', () => {

    test(".days() should return the number of days remaining in the month when given a particular date", () => {
        const testDate = new Date(2021, 0, 1)
        const remainingDays = useCountdown(testDate).days()
        // can also be written as:
        // const { days } = useCountdown(testDate)
        // but result will still be returned by assigning a variable to days()
        expect(remainingDays).toBe(30)
    })

    test("should notify user `Last Day of the month` if days remaining are 0 if given the last date in a month", () => {
        const testDate = new Date(2021, 0, 31)
        let result = useCountdown(testDate).days()
        expect(result).toBe('Last day of the month')
    })

})