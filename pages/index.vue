<template>
	<NuxtLayout>
		<h1 class="prose-1">Game Selector</h1>
		<p>Vote on your favorite games to be chosen for team play at the end of the month</p>
	</NuxtLayout>
</template>

<script setup lang="ts">
useHead({
	title: 'Game Selector',
	meta: [
		{
			name: 'Vote on your favorite games',
			content: 'A game selector'
		}
	]
})
</script>

<style scoped lang="postcss">
/* https://ui.nuxt.com/components/carousel */

</style>