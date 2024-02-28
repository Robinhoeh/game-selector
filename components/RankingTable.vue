<template>
  <UTable
    :rows="pcgames1"
    :columns="columns"
    data-testid="ranking-table"
  ></UTable>
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

<style lang="postcss"></style>
