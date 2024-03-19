<template>
  <UTable :rows="pcgames1" :columns="columns" data-testid="ranking-table" @select="handleUpVote" v-model="selected">
    <template #actions-data="{row}">
      <div class="flex flex-col">
        <UButton
          icon="i-heroicons-star"
          size="2xs"
          color="yellow"
          variant="ghost"
          data-testid="upvote"
          square
        ><span class="mt-[2px]">{{ displayVoteCount(row.id) }}</span>
	</UButton>
	</div>
    </template>
  </UTable>
  <UTable :rows="pcgames2" :columns="columns"></UTable>
  <UTable :rows="consolegames" :columns="columns"></UTable>
</template>

<script setup lang="ts">
const { columns,pcgames1,  pcgames2, consolegames } = useRankingTable();

const selected = ref(0)
const voteCount = ref({})

const handleUpVote = (row: any) => {
	
	const index = pcgames1.value.findIndex((game: any) => game.id === row.id);
	selected.value = row.id
	
	if (index !== -1) {
		pcgames1.value[index].count++
		voteCount.value = {
			...voteCount.value,
			[row.id]: pcgames1.value[index].count
		}	
	}
};

const displayVoteCount = (id: number) => {
	return voteCount.value[id] || 0
}



</script>

<style lang="postcss">
tr td {
  /* TODO: figure out how to remove tailwind forms */
  @apply text-white px-1 py-0.5 !important;
}
</style>
