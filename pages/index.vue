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
          <div>---- Game 1 ---</div>
        </div>
        <div>
          <img src="" alt="" />
          <div>---- Game 2 ---</div>
        </div>
        <div>
          <img src="" alt="" />
          <div>---- Game 3 ---</div>
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
  consolegameId,
} = useRankingTable();

const form = ref<FormKitNode>();
const formData = ref<GameData>();
const handleSubmit = async (form: GameData, node: FormKitNode) => {
  console.log("form submitted");

  pcgames1.value.push({
    id: pcgame1Id.value++,
    title: form.gameForm.pcgame1,
  });
  reset("game-form");

  pcgames2.value.push({
    id: pcgame2Id.value++,
    title: form.gameForm.pcgame2,
  });
  reset("game-form");

  consolegames.value.push({
    id: consolegameId.value++,
    title: form.gameForm.consolegame,
  });
};

const formState = ref();
onMounted(() => {
  formState.value = getNode("game-form");
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
/* https://ui.nuxt.com/components/carousel */
.formkit-wrapper button {
  @apply bg-blue-500 text-white p-3;
}
</style>
