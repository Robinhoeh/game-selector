<template>
  <UTable :rows="pcgames1" :columns="columns" data-testid="ranking-table" @select="handleUpVote" class="ranking-table">
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
  <UTable :rows="pcgames2" :columns="columns" class="ranking-table"></UTable>
  <UTable :rows="consolegames" :columns="columns" class="ranking-table"></UTable>
</template>

<script setup lang="ts">
const { columns,pcgames1,  pcgames2, consolegames } = useRankingTable();

const voteCount = ref({})

const handleUpVote = (row: any) => {
	
	const index = pcgames1.value.findIndex((game: any) => game.id === row.id);
	
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
.ranking-table {
	table-layout: fixed;
	min-width: 300px;

	thead th {
		padding-left: 4px;
	}
}

tr td {
  /* TODO: figure out how to remove tailwind forms */
  @apply text-white px-1 py-0.5 !important;
  max-width: 300px;
  word-wrap: break-word!important;
  overflow: hidden;
}

</style>
