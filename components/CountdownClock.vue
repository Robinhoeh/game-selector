<template>
	<div class="flex justify-around" data-test-id="countdown-clock">
		<div class="flex flex-col items-center">
			<p>Days</p>
			<p>{{ remainingDays }}</p>
		</div>
		<div class="flex flex-col items-center">
			<p>Hours</p>
			<p>{{ remainingHours}}</p>
		</div>
		<div class="flex flex-col items-center">
			<p>Minutes</p>
			<p>{{ remainingMinutes }}</p>
		</div>
		<div class="flex flex-col items-center">
			<p>Seconds</p>
			<p>{{ remainingSeconds }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { format, getDaysInMonth, hoursToSeconds } from 'date-fns'

let remainingDays = ref<number>()
let remainingHours = ref<number>()
let remainingMinutes = ref<number>()
let remainingSeconds = ref<number>()

const displayTimeEverySecond = () => {
	remainingDays.value = displayDaysRemaining()
	remainingHours.value = displayRemainingHours()
	remainingMinutes.value = displayRemainingMinutes()
	remainingSeconds.value = displayRemainingSeconds()
}

const displayDaysRemaining = () => {
	const daysInMonth = getDaysInMonth(new Date())
	const daysPassed = format(new Date(), 'dd')
	const remainingDays = daysInMonth - parseInt(daysPassed)
	if (remainingDays === 0) {
		return 'Last day of the month'
	}
	return remainingDays
}

const displayRemainingHours = () => {
	const daysInMonth = getDaysInMonth(new Date())
	const hoursInDay = 24
	const currentHour = format(new Date(), 'HH')
	const daysPassed = format(new Date(), 'dd')
	const remainingDays = daysInMonth - parseInt(daysPassed)
	const hoursRemainingInMonth = Math.floor((remainingDays * hoursInDay) - parseInt(currentHour))
	if (hoursRemainingInMonth < 12) {
		return 0 + hoursRemainingInMonth
	}
	return hoursRemainingInMonth
}

const displayRemainingMinutes = () => {
	const daysInMonth = getDaysInMonth(new Date())
	const daysPassed = format(new Date(), 'dd')
	const remainingDays = daysInMonth - parseInt(daysPassed)
	const minutesIndADay = 60 * 24
	const currentMinute = format(new Date(), 'mm')
	const minutesRemainingInMonth = minutesIndADay * remainingDays - parseInt(currentMinute)
	if(minutesRemainingInMonth < 10) {
		return 0 + minutesRemainingInMonth
	}
	return Math.round(minutesRemainingInMonth)
}

const displayRemainingSeconds = () => {
	const daysInMonth = getDaysInMonth(new Date())
	const daysPassed = format(new Date(), 'dd')
	const remainingDays = daysInMonth - parseInt(daysPassed)
	const secondsInADay = 60 * 60 * 24
	const currentSecond = format(new Date(), 'ss')
	const secondsRemainingInMonth = secondsInADay * remainingDays - parseInt(currentSecond)
	if(secondsRemainingInMonth < 10) {
		return 0 + secondsRemainingInMonth
	}
	return Math.round(secondsRemainingInMonth)
}

onBeforeMount(() => {
	setInterval(() => {
		displayTimeEverySecond()
	}, 1000)
})
</script>

<style scoped>

</style>