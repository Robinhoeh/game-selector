<template>
  <div class="flex justify-between text-sm">
    <FormKit data-testid="game-form" type="group" :actions="false">
      <div class="flex flex-col justify-center">
        <FormKit
          inner-class="mt-2"
          input-class="p-1"
          class="mt-2"
          type="text"
          data-testid="game-input"
          label="PC game"
          v-model="pcGame1"
        />
        <p>{{ pcGame1 }}</p>
      </div>
      <FormKit
        inner-class="mt-2"
        input-class="p-1"
        type="text"
        data-testid="game-input"
        label="PC game"
        v-model="pcGame2"
      />
      <FormKit
        inner-class="mt-2"
        input-class="p-1"
        type="text"
        data-testid="game-input"
        label="Console game"
        v-model="consoleGame"
      />
    </FormKit>

    {{ pcGame2 }} {{ consoleGame }}
  </div>
</template>

<script setup lang="ts">
const pcGame1 = ref("")
const pcGame2 = ref("")
const consoleGame = ref("")
</script>

<style lang="postcss"></style>
