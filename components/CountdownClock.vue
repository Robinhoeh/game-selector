<template>
	<div class="flex justify-around" data-test-id="countdown-clock">
		<div class="flex flex-col items-center">
			<p>Days</p>
			<p>00</p>
		</div>
		<div class="flex flex-col items-center">
			<p>Hours</p>
			<p>00</p>
		</div>
		<div class="flex flex-col items-center">
			<p>Minutes</p>
			<p>00</p>
		</div>
		<div class="flex flex-col items-center">
			<p>Seconds</p>
			<p>00</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { format } from 'date-fns'
import { enCA } from 'date-fns/locale'
const date = new Date()
const formattedDate = format(date, 'dd, hh, :mm, :ss', { locale: enCA })
console.log(formattedDate)
</script>

<style scoped>

</style>