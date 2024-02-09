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
const date = new Date('2022-01-01').getTime();
console.log(date)
</script>

<style scoped>

</style>