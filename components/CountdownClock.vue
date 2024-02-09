<template>
	<div class="flex justify-around" data-test-id="countdown-clock">
		<div class="flex flex-col items-center">
			<p>Days</p>
			<p>{{ remainingDays }}</p>
		</div>
		<div class="flex flex-col items-center">
			<p>{{ remainingHours}}</p>
			<p>00</p>
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
const formattedDate = format(date, 'dd, hh, :mm, :ss', { locale: enCA })
const remainingDays = format(new Date, 'dd')
const remainingHours = format(new Date, 'hh')
const remainingMinutes = format(new Date, ':mm')
const remainingSeconds = format(new Date, ':ss')
</script>

<style scoped>

</style>