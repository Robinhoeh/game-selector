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
          @click="console.log('up')"
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
const columns = [
  {
    key: "id",
    label: "#",
  },
  {
    key: "title",
    label: "Game title",
  },
  {
    key: "actions",
  },
];
const pcgames1 = [
  {
    id: 1,
    title: "Front-end Developer",
  },
  {
    id: 2,
    title: "Designer",
  },
  {
    id: 3,
    title: "Director of Product",
  },
  {
    id: 4,
    title: "Copywriter",
  },
  {
    id: 5,
    title: "Senior Designer",
  },
  {
    id: 6,
    title: "Principal Designer",
  },
];
const pcgames2 = [
  {
    id: 1,
    title: "Front-end Developer",
  },
  {
    id: 2,
    title: "Designer",
  },
  {
    id: 3,
    title: "Director of Product",
  },
  {
    id: 4,
    title: "Copywriter",
  },
  {
    id: 5,
    title: "Senior Designer",
  },
  {
    id: 6,
    title: "Principal Designer",
  },
];
const consolegames = [
  {
    id: 1,
    title: "Front-end Developer",
  },
  {
    id: 2,
    title: "Designer",
  },
  {
    id: 3,
    title: "Director of Product",
  },
  {
    id: 4,
    title: "Copywriter",
  },
  {
    id: 5,
    title: "Senior Designer",
  },
  {
    id: 6,
    title: "Principal Designer",
  },
];
</script>

<style lang="postcss">
tr td {
  /* TODO: figure out how to remove tailwind forms */
  @apply text-white px-1 py-0.5 !important;
}
</style>
