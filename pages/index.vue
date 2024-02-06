<template>
	<NuxtLayout>
		<h1 class="prose-1">Game Selector</h1>
		<p>Vote on your favorite games to be chosen for team play at the end of the month</p>
		<section class="py-3 mb-6 mt-7">
			<h3>Countdown to end of month</h3>
			<CountdownClock />
		</section>
		<section class="py-3 mb-6">
			<div class="flex justify-around">
				<div>
					<img src="" alt="">
					<div>---- Game 1 ---</div>
				</div>
				<div>
					<img src="" alt="">
					<div>---- Game 2 ---</div>
				</div>
				<div>
					<img src="" alt="">
					<div>---- Game 3 ---</div>
				</div>
			</div>
		</section>
		<section class="py-3 mb-6">
			<h3>Add your favorite games</h3>
			<!-- form with 3 inputs, 1 for each card -->
			<form>
				<div class="flex justify-around">
					<div>
						<label for="game1">Game 1</label>
						<input type="text" id="game1" name="game1">
					</div>
					<div>
						<label for="game2">Game 2</label>
						<input type="text" id="game2" name="game2">
					</div>
					<div>
						<label for="game3">Game 3</label>
						<input type="text" id="game3" name="game3">
					</div>
				</div>
				<button type="submit">Submit</button>
			</form>
		</section>
		<section class="py-3 mb-6">
			<h3>Rankings</h3>
			<div class="flex justify-around">
				<!-- card component with list of games -->
				<div>
					<ul>
						<li>game 1 </li>
						<li>game 2</li>
						<li>game 3</li>
					</ul>
				</div>
				<div><ul>
						<li>game 1 </li>
						<li>game 2</li>
						<li>game 3</li>
					</ul></div>
				<div><ul>
						<li>game 1 </li>
						<li>game 2</li>
						<li>game 3</li>
					</ul></div>
			</div>
		</section>
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