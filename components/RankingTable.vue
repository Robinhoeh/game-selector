<template>
	<div v-if="games.current.value && games.current.value.length">
		<div v-for="game in games.current.value" :key="game.id">{{ game.game_title }}
			{{ game.userId }} - {{ user.current.value?.userId }}
			<UButton v-if="user.current.value && game.userId === user.current.value.userId" color="red" square icon="i-heroicons-trash" size="2xs" @click="games.remove(game.$id)" />
		</div>

	</div>
	<UTable :rows="pcgames1" :columns="columns" data-testid="ranking-table" @select="handleUpVote" class="ranking-table">
		<template #actions-data="{row}">
			<div class="flex flex-col">
				<UButton icon="i-heroicons-star" size="2xs" color="yellow" variant="ghost" data-testid="upvote" square><span class="mt-[2px]">{{ displayVoteCount(row.id) }}</span>
				</UButton>
			</div>
		</template>

	</UTable>
	<template v-if="games?.current?.value && games?.current?.value.length">
		<UTable :rows="games?.current?.value" :columns="columns" class="ranking-table">
			<template #actions-data="{row}">
				<div class="flex flex-col">
					<!-- <div>{{ row.game_title }} - {{ row.userId }}</div> -->
					<!-- <UButton icon="i-heroicons-star" size="2xs" color="yellow" variant="ghost" data-testid="upvote" square><span class="mt-[2px]">{{ displayVoteCount(row.id) }}</span> -->
					<!-- </UButton> -->
					<!-- {{ row.game_title }} -->
					<!-- {{ row.userId }} - {{ user.current.value?.userId }} -->
					<UButton v-if="user.current.value && row.userId === user.current.value.userId" color="red" square icon="i-heroicons-trash" size="2xs" @click="games.remove(row.$id)" />
				</div>
			</template>
		</UTable>
	</template>
	<UTable :rows="consolegames" :columns="columns" class="ranking-table"></UTable>
</template>

<script setup lang="ts">
const { columns, pcgames1, pcgames2, consolegames } = useRankingTable();

const { account } = useAppwrite()
const games = useGamesApi()
// this will be useful for allowing user to delete their own games
const user = useUserSession()


try {
  const res = await account.get()
//   console.log(res)
} catch (err) {
  console.log(err)
}

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
