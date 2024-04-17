<template>
	<NuxtLayout>

		<div class="u-max-width-650" style="margin-inline: auto;">
			<!-- Idea form component for logged in users -->
			<section v-if="user.current.value" class="card u-margin-32">
				<!-- <IdeasForm /> -->
			</section>

			<section v-else class="card u-margin-32">
				<div class="container">
					<p class="body-text-1" style="width: 100%;">
						Please login to submit an idea.
					</p>
				</div>
			</section>
			<!-- <IdeasList /> -->
		</div>


		<h1 class="mb-b prose-1">Game Selector</h1>
		<p class="mb-8">
			Vote on your favorite games to be chosen for team play at the end of the
			month.
		</p>

		<section class="py-8">
			<h3 class="pb-8">Leader Board</h3>
			<div class="flex justify-between">
				<div class="min-h-36">
					<img src="" alt="" />
					<p class="w-[300px] break-words">{{ highestRankedPcgame1 || "Top Rated PC game" }}</p>
				</div>
				<div class="min-h-36">
					<img src="" alt="" />
					<p class="w-[300px] break-words">{{ pcgames2[0]?.title || "Top Rated PC game 2" }}</p>
				</div>
				<div class="min-h-36">
					<img src="" alt="" />
					<p class="w-[300px] break-words">{{ consolegames[0]?.title || 'Top Rated Console game' }}</p>
				</div>
			</div>
		</section>
		<section class="py-8">
			<h3>Countdown to end of month</h3>
			<CountdownClock />
		</section>
		<section class="py-3 mb-6">
			<h3 class="mb-6">Add your favorite games</h3>
			<FormKit v-if="user.current.value" ref="game-form" id="game-form" type="form" @submit="handleSubmit" submit-label="submit game" v-model="formData">
				<GameForm @reset="handleReset" :suffix-icon="isFormDirty" />
			</FormKit>
			<p v-else class="text-yellow-400">
				Please login to submit a game.
			</p>
		</section>
		<section class="py-8 mb-6">
			<h3>Rankings</h3>
			<div class="flex justify-between">
				<RankingTable />
			</div>
		</section>
	</NuxtLayout>
</template>

<script setup lang="ts">
import { reset, type FormKitNode } from "@formkit/core";
import { getNode } from "@formkit/core";

const {
  pcgames1,
  pcgames2,
  consolegames,
  pcgame1Id,
  pcgame2Id,
	consolegameId
} = useRankingTable();

const form = ref<FormKitNode>();
const formData = ref<GameData>();
const toast = useToast();


const games = useGamesApi()
const user = useUserSession()

const handleSubmit = async (form: GameData, node: FormKitNode) => {
	

	const postGameData = {
		userId: user.current.value?.userId,
		id: pcgame1Id.value++,
		game_title: form.pcgame1,
		count: 0
	}

	// if (pcgames1.value.find(game => game.title === form.pcgame1) || pcgames2.value.find(game => game.title === form.pcgame2) || consolegames.value.find(game => game.title === form.consolegame)) {
	// 	toast.add({
	// 		title: "Game already exists",
	// 		description: "Please enter a different game",
	// 		status: "error",
	// 		duration: 3000,
	// 	});
	// 	return
	// }
	
	// if (node.value?.pcgame1) {
		console.log(postGameData)
		await games.addGame(postGameData).then(() => {
			// pcgames1.value.push(postGameData)
			console.log(form)
			// reset(form);
		})
		
	// }
	// block form submission if game already exists
	// if (pcgames1.value.find(game => game.title === form.pcgame1) || pcgames2.value.find(game => game.title === form.pcgame2) || consolegames.value.find(game => game.title === form.consolegame)) {
	// 	toast.add({
	// 		title: "Game already exists",
	// 		description: "Please enter a different game",
	// 		status: "error",
	// 		duration: 3000,
	// 	});
	// 	return
	// }

	
	// if (node.value?.pcgame1) {
	// 	pcgames1.value.push({
	// 		id: pcgame1Id.value++,
	// 		title: form.pcgame1,
	// 		count: 0
	// 	});
	// 	reset("game-form");
	// } 

	// if (node.value?.pcgame2) {
	// 	pcgames2.value.push({
	// 		id: pcgame2Id.value++,
	// 		title: form.pcgame2,
	// 	});
	// 	reset("game-form");
	// }

	// if (node.value?.consolegame) {	
	// 	consolegames.value.push({
	// 		id: consolegameId.value++,
	// 		title: form.consolegame,
	// 	});
	// 	reset("game-form");
	// }
}

const handleReset = () => {
	reset("game-form");
}

const isFormDirty = computed(() => {
	if (!form.value?.context?.state?.dirty) {
		return null
	}
	return 'close'
})



const highestRankedPcgame1 = ref('')
const findHighestCount = () => {
  const highestCount = Math.max(...pcgames1.value.map(game => game.count))
  const highestRankedGame = pcgames1.value.find(game => game.count === highestCount)
  highestRankedPcgame1.value = highestRankedGame?.title
}

watchEffect(() => {
	findHighestCount()
})

onMounted(() => {
	form.value = getNode("game-form");
	//   findHighestCount()
});
useHead({
  title: "Game Selector",
  meta: [
    {
      name: "Vote on your favorite games",
      content: "A game selector",
    },
  ],
});
</script>

<style lang="postcss">
.formkit-wrapper button {
  @apply bg-blue-500 text-white p-3 mt-5;
}

article.box {
	background-color: hsl(var(--color-neutral-0));
}

</style>
