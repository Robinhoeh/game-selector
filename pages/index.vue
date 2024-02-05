<template>
	<div>
		<h1 class="p-1 text-yellow-800 bg-purple-500">Index page</h1>
		<NuxtLayout>
			<NuxtPage/>
		</NuxtLayout>
	</div>
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