<template>
  <UTable :rows="pcgames1" :columns="columns" data-testid="ranking-table" @select="handleUpVote" v-model="selected">
    <template #actions-data>
      <div class="flex flex-col">
        <UButton
          icon="i-heroicons-star"
          size="2xs"
          color="yellow"
          variant="ghost"
          data-testid="upvote"
          square
        />
		{{ voteCount }}
      </div>
    </template>
  </UTable>
  <UTable :rows="pcgames2" :columns="columns"></UTable>
  <UTable :rows="consolegames" :columns="columns"></UTable>
</template>

<script setup lang="ts">
const { columns, pcgames1, pcgames2, consolegames } = useRankingTable();

const selected = ref(0)

const handleUpVote = (row: any) => {
	console.log(row.id)
	console.log("up");
	const index = pcgames1.value.findIndex((game) => game.id === row.id);
	selected.value = index
	
	if (index !== -1) {
		pcgames1.value[row.id].count++
	}
};

const voteCount = computed(() => {
	// loop over pcgames1 and find the selected game count
	return pcgames1.value[selected.value].count
})


</script>

<style lang="postcss">
tr td {
  /* TODO: figure out how to remove tailwind forms */
  @apply text-white px-1 py-0.5 !important;
}
</style>
