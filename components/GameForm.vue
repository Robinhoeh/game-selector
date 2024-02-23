<template>
  <div class="flex justify-between mb-5 text-sm" data-testid="game-form">
    <FormKit  type="group" :actions="false">
      <div class="flex flex-col justify-center" data-testid="game-input">
        <FormKit
          name="pcGame1"
          inner-class="my-2"
          input-class="p-1"
          class="mt-2"
          type="text"
          label="PC game"
          help="Enter a PC game"
        />
      </div>
      <FormKit
        name="pcGame2"
        inner-class="my-2"
        input-class="p-1"
        type="text"
        label="PC game"
        help="Enter a PC game"
      />
      <FormKit
        name="consoleGame"
        inner-class="my-2"
        input-class="p-1"
        type="text"
        label="Console game"
        help="Enter a console game"
      />
    </FormKit>
  </div>
</template>

<script setup lang="ts">
const pcGame1 = ref("")
const pcGame2 = ref("")
const consoleGame = ref("")
</script>

<style lang="postcss"></style>
