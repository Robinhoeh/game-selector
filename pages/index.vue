<template>
	<NuxtLayout>
		<h1 class="mb-b prose-1">Game Selector</h1>
		<p class="mb-8">
			Vote on your favorite games - Winner chosen each month
		</p>
		<section class="py-8">
			<h3>Countdown to end of month</h3>
			<CountdownClock />
		</section>
		<section class="p-2 py-8">
			<h3 class="pb-8">Leader Board</h3>
			<div class="flex justify-between p-4 border border-red-200 border-dotted">
				<div class="min-h-36">
					<img src="" alt="" />
					<p class="w-[300px] break-words">{{ highestRankedPcgame1 || "Top Rated PC game" }}</p>
				</div>
				<div class="min-h-36">
					<img src="" alt="" />
					<p class="w-[300px] break-words">{{ highestRankedPcgame2 || "Top Rated PC game 2" }}</p>
				</div>
				<div class="min-h-36">
					<img src="" alt="" />
					<p class="w-[300px] break-words">{{ highestRankedConsoleGame || 'Top Rated Console game' }}</p>
				</div>
			</div>
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
				<RankingTable :loading="isLoading" />
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
const isLoading = ref(false);

const games = useGamesApi()
const {current, currentPcGames2, currentConsoleGames} = useGamesApi()
const user = useUserSession()

const handleSubmit = async (form: GameData, node: FormKitNode) => {
	isLoading.value = true;
	
	// set game_type from form data
	formData.value!.game_type = node.value?.pcgame1 ? "pcgame1" : node.value?.pcgame2 ? "pcgame2" : "consolegame"

	const postGameData = {
		userId: user.current.value?.userId,
		// id: pcgame1Id.value++,
		// id: index.value ++,
		game_title: formData.value?.game_type === "pcgame1" ? form.pcgame1 : formData.value?.game_type === "pcgame2" ? form.pcgame2 : form.consolegame,
		count: 0
	}

	const currentGames = games.current.value
	const currentPcGames2 = games.currentPcGames2.value
	const currentConsoleGames = games.currentConsoleGames.value

	if (
		node.value?.pcgame1 && currentGames?.find(game => game.game_title === form.pcgame1
		) || node.value?.pcgame2 && currentPcGames2?.find(game => game.game_title === form.pcgame2
		) || node.value?.consolegame && currentConsoleGames?.find(game => game.game_title === form.consolegame
		)) {
		toast.add({
			title: "Game already exists",
			description: "Please enter a different game",
			status: "error",
			duration: 1000,
		})
		isLoading.value = false;
		reset("game-form")
		return false;
	} else {
			await games.addGame(postGameData, formData)
			isLoading.value = false;
			reset("game-form");
		}	
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



const highestRankedPcgame1 = computed(() => {
	if (current.value) {
		const highest = current.value.reduce((prev, current) => (prev.count > current.count) ? prev : current)
		return highest.game_title
	}
})

const highestRankedPcgame2 = computed(() => {
	if(currentPcGames2.value) {
		const highest = currentPcGames2.value.reduce((prev, current) => (prev.count > current.count) ? prev : current)
		return highest.game_title
	}
})

const highestRankedConsoleGame = computed(() => {
	if(currentConsoleGames.value) {
		const highest = currentConsoleGames.value.reduce((prev, current) => (prev.count > current.count) ? prev : current)
		return highest.game_title
	}
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
</style>
