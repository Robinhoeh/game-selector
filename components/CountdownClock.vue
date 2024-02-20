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
const { days, hours, minutes, seconds } = useCountdown(new Date())


let remainingDays = ref<number | string>()
let remainingHours = ref<number | string>()
let remainingMinutes = ref<number | string>()
let remainingSeconds = ref<number | string>()

const displayTimeEverySecond = () => {
	remainingDays.value = days()
	remainingHours.value = hours()
	remainingMinutes.value = minutes()
	remainingSeconds.value = seconds()
}

onBeforeMount(() => {
	setInterval(() => {
		displayTimeEverySecond()
	}, 1000)
})
</script>

<style lang="postcss">

</style>