<template>
	<div class="flex justify-around" data-test-id="countdown-clock">
		<div class="flex flex-col items-center">
			<p>Days</p>
			<p>{{ remainingDays }}</p>
		</div>
		<div class="flex flex-col items-center">
			<p>Remaining hours</p>
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
import { format } from 'date-fns'
import { enCA } from 'date-fns/locale'
const date = new Date()
let formattedDate = format(date, 'dd, hh, :mm, :ss', { locale: enCA })
let remainingDays = ref(format(new Date, 'dd'))
let remainingHours = ref(format(new Date, 'hh'))
let remainingMinutes = ref(format(new Date, ':mm'))
let remainingSeconds = ref(format(new Date, ':ss'))

const displayTimeEverySecond = () => {
	remainingDays.value = format(new Date, 'dd')
	remainingHours.value = format(new Date, 'hh')
	remainingMinutes.value = format(new Date, ':mm')
	remainingSeconds.value = format(new Date, ':ss')
}

onBeforeMount(() => {
	setInterval(() => {
		displayTimeEverySecond()
	}, 1000)
})
</script>

<style scoped>

</style>