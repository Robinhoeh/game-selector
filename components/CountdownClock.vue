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
const { displayDaysRemaining, displayRemainingHours, displayRemainingMinutes, displayRemainingSeconds} = useCountdown()

let remainingDays = ref<number | string>()
let remainingHours = ref<number>()
let remainingMinutes = ref<number>()
let remainingSeconds = ref<number>()

const displayTimeEverySecond = () => {
	remainingDays.value = displayDaysRemaining()
	remainingHours.value = displayRemainingHours()
	remainingMinutes.value = displayRemainingMinutes()
	remainingSeconds.value = displayRemainingSeconds()
}

onBeforeMount(() => {
	setInterval(() => {
		displayTimeEverySecond()
	}, 1000)
})
</script>

<style lang="postcss">

</style>