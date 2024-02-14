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
	return remainingDays
}

const displayRemainingHours = () => {
	const daysInMonth = getDaysInMonth(new Date())
	const hoursInDay = 24
	const currentHour = format(new Date(), 'HH')
	const daysPassed = format(new Date(), 'dd')
	const remainingDays = daysInMonth - parseInt(daysPassed)
	const hoursRemainingInMonth = Math.floor((remainingDays * hoursInDay) - parseInt(currentHour))
	return hoursRemainingInMonth
}

const displayRemainingMinutes = () => {
	const daysInMonth = getDaysInMonth(new Date())
	const hoursInDay = 24
	const minutesInHour = 60
	
	const daysPassed = format(new Date(), 'dd')
	const currentHour = format(new Date(), 'HH')
	const remainingDays = daysInMonth - parseInt(daysPassed)
	const minutesInMonth = Math.floor((remainingDays * hoursInDay * minutesInHour) - (parseInt(currentHour) * minutesInHour))
	return minutesInMonth
}

const displayRemainingSeconds = () => {
	const now = Date.now()
	// console.log(now)
	const daysInMonth = getDaysInMonth(new Date())
	const hoursInDay = 24
	const hoursInSeconds = hoursToSeconds(hoursInDay)

	const daysPassed = format(new Date(), 'dd')
	const currentHour = format(new Date(), 'HH')
	const remainingDays = daysInMonth - parseInt(daysPassed)
	let secondsRemainingInMonth = Math.floor((remainingDays * hoursInDay * hoursInSeconds) - (parseInt(currentHour) * hoursInSeconds))
	return Math.round( secondsRemainingInMonth + now / 1000  )
}

onBeforeMount(() => {
	setInterval(() => {
		displayTimeEverySecond()
	}, 1000)
})
</script>

<style scoped>

</style>