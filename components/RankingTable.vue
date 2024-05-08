<template>
	<template v-if="current && current?.length">
		<UTable :rows="current" :columns="columns" data-testid="ranking-table" class="ranking-table" :loading="loading">
			<template #order-data="{ index }">
				{{ index + 1 }}
			</template>
			<template #title-data="{row}">
				<p>{{ row.game_title }}</p>
			</template>
			<template #actions-data="{row}">
				<div class="flex">
					<UButton key :loading="isCountLoading" icon="i-heroicons-heart" size="2xs" color="yellow" variant="ghost" data-testid="upvote" square @click="updateCount(row.$id, 'pcgame1')"><span class="mt-[2px]">{{ row.count }}</span>
					</UButton>
					<UButton v-if="user.current.value && row.userId === user.current.value.userId" :loading="removeLoadingStates[row.$id]" color="red" square icon="i-heroicons-trash" size="2xs" @click="remove(row.$id, 'pcgame1')" />
				</div>
			</template>
		</UTable>
	</template>
	<template v-if="currentPcGames2 && currentPcGames2.length">
		<UTable :rows="currentPcGames2" :columns="columns" class="ranking-table" :loading="loading">
			<template #order-data="{ index }">
				{{ index + 1 }}
			</template>
			<template #title-data="{ row }">
				<p>{{ row.game_title }}</p>
			</template>
			<template #actions-data="{row}">
				<div class="flex">
					<UButton :loading="isCountLoading" icon="i-heroicons-heart" size="2xs" color="yellow" variant="ghost" data-testid="upvote" square @click="updateCount(row.$id, 'pcgame2')"><span class="mt-[2px]">{{ row.count }}</span>
					</UButton>
					<UButton v-if="user.current.value && row.userId === user.current.value.userId" :loading="removeLoadingStates[row.$id]" color="red" square icon="i-heroicons-trash" size="2xs" @click="remove(row.$id, 'pcgame2')" />
				</div>
			</template>
		</UTable>
	</template>
	<template v-if="currentConsoleGames && currentConsoleGames.length">
		<UTable :rows="currentConsoleGames" :columns="columns" class="ranking-table" :loading="loading">
			<template #order-data="{index}">
				{{ index + 1 }}
			</template>
			<template #title-data="{ row }">
				<p>{{ row.game_title }}</p>
			</template>
			<template #actions-data="{ row }">
				<div class="flex">
					<UButton :loading="isCountLoading" icon="i-heroicons-heart" size="2xs" color="yellow" variant="ghost" data-testid="upvote" square @click="updateCount(row.$id, 'consolegame')"><span class="mt-[2px]">{{ row.count }}</span>
					</UButton>
					<UButton v-if="user.current.value && row.userId === user.current.value.userId" :loading="removeLoadingStates[row.$id]" color="red" square icon="i-heroicons-trash" size="2xs" @click="remove(row.$id, 'consolegame')" />
				</div>
			</template>
		</UTable>
	</template>

</template>

<script setup lang="ts">
interface Props {
	loading?: boolean
}
defineProps<Props>()

const columns = [
	{
		key: "order",
		label: "#",
		index: 0
	},
	{
		key: "title",
		label: "Game title",
	},
	{
		key: "actions",
	},
];

const { current, currentPcGames2, currentConsoleGames, remove, updateCount, isCountLoading, removeLoadingStates } = useGamesApi()

const user = useUserSession()

const voteCount = ref({})

const handleUpVote = (row: any) => {
console.log(row)

	const index = currentPcGames2.findIndex((game: any) => game.id === row.id);

	if (index !== -1) {
		currentPcGames2.value[index].count++
		voteCount.value = {
			...voteCount.value,
			[row.id]: currentPcGames2.value[index].count
		}	
	}
};

const displayVoteCount = (id: number) => {
	// if (current.value) {
	// 	return current.value.find((game: any) => game.id === id)?.count || 0
	// }
	// if (currentPcGames2.value) {
	// 	return currentPcGames2.value.find((game: any) => game.id === id)?.count || 0
	// }
	if (currentConsoleGames.value) {
		return currentConsoleGames.value.find((game: any) => game.id === id)?.count || 0
	}
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
		word-wrap: break-word !important;
		overflow: hidden;
	}
</style>
