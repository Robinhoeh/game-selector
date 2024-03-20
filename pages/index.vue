<template>
  <NuxtLayout>
    <h1 class="prose-1">Game Selector</h1>
    <p>
      Vote on your favorite games to be chosen for team play at the end of the
      month
    </p>
    <section class="py-3 mb-6 mt-7">
      <h3>Countdown to end of month</h3>
      <CountdownClock />
    </section>
    <section class="py-3 mb-6">
      <div class="flex justify-around">
        <div>
          <img src="" alt="" />
          <div>{{ highestRankedPcgame1 || "Top Rated PC game" }}</div>
        </div>
        <div>
          <img src="" alt="" />
          <div>{{ pcgames2[0]?.title || "Top Rated PC game2" }}</div>
        </div>
        <div>
          <img src="" alt="" />
          <div>{{ consolegames[0]?.title || 'Top Rated Console game' }}</div>
        </div>
      </div>
    </section>
    <section class="py-3 mb-6">
      <h3 class="mb-6">Add your favorite games</h3>
      <FormKit
        id="game-form"
        ref="game-form"
        type="form"
        @submit="handleSubmit"
        submit-label="submit game"
        v-model="formData"
      >
        <GameForm />
      </FormKit>
    </section>
    <section class="py-3 mb-6">
      <h3>Rankings</h3>
      <div class="flex justify-around">
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

const handleSubmit = async (form: GameData, node: FormKitNode) => {
	// block form submission if game already exists
	if (pcgames1.value.find(game => game.title === form.gameForm.pcgame1) || pcgames2.value.find(game => game.title === form.gameForm.pcgame2) || consolegames.value.find(game => game.title === form.gameForm.consolegame)) {
		toast.add({
			title: "Game already exists",
			description: "Please enter a different game",
			status: "error",
			duration: 3000,
		});
		return
	}
	console.log(node.value?.gameForm?.pcgame1)
	if (node.value?.gameForm?.pcgame1) {
		pcgames1.value.push({
			id: pcgame1Id.value++,
			title: form.gameForm.pcgame1,
			count: 0
		});
		reset("game-form");
	} 

	if (node.value?.gameForm?.pcgame2) {
		pcgames2.value.push({
			id: pcgame2Id.value++,
			title: form.gameForm.pcgame2,
		});
		reset("game-form");
	}

	if (node.value?.gameForm?.consolegame) {	
		consolegames.value.push({
			id: consolegameId.value++,
			title: form.gameForm.consolegame,
		});
		reset("game-form");
	}
	
};


const highestRankedPcgame1 = ref('')
const findHighestCount = () => {
  const highestCount = Math.max(...pcgames1.value.map(game => game.count))
  const highestRankedGame = pcgames1.value.find(game => game.count === highestCount)
  highestRankedPcgame1.value = highestRankedGame?.title
}

watchEffect(() => {
  findHighestCount()
})

const formState = ref();
onMounted(() => {
	formState.value = getNode("game-form");
	  findHighestCount()
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
  @apply bg-blue-500 text-white p-3;
}
</style>
