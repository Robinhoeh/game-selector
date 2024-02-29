<template>
  <UTable :rows="pcgames1" :columns="columns" data-testid="ranking-table">
    <template #actions-data>
      <div class="flex flex-col">
        <UButton
          icon="i-heroicons-arrow-up"
          size="2xs"
          color="emerald"
          variant="outline"
          :ui="{ rounded: 'rounded-full' }"
          @click="handleUpVote"
          data-testid="upvote"
          square
        />
        <UButton
          icon="i-heroicons-arrow-down"
          size="2xs"
          color="emerald"
          @click="console.log('down')"
          variant="outline"
          :ui="{ rounded: 'rounded-full' }"
          square
        />
      </div>
    </template>
  </UTable>
  <UTable :rows="pcgames2" :columns="columns"></UTable>
  <UTable :rows="consolegames" :columns="columns"></UTable>
</template>

<script setup lang="ts">
const { columns, pcgames1, pcgames2, consolegames } = useRankingTable();

const handleUpVote = () => {
  console.log("up");
};
</script>

<style lang="postcss">
tr td {
  /* TODO: figure out how to remove tailwind forms */
  @apply text-white px-1 py-0.5 !important;
}
</style>
