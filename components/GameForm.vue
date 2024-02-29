<template>
  <div class="flex justify-between mb-5 text-sm" data-testid="game-form">
    <FormKit type="form" name="game-form" :actions="false">
      <div class="flex flex-col justify-center" data-testid="game-input">
        <FormKit
          name="pcgame1"
          inner-class="my-2"
          input-class="p-1"
          class="mt-2"
          type="text"
          label="PC game"
          help="Enter a PC game"
        />
      </div>
      <FormKit
        name="pcgame2"
        inner-class="my-2"
        input-class="p-1"
        type="text"
        label="PC game"
        help="Enter a PC game"
      />
      <FormKit
        name="consolegame"
        inner-class="my-2"
        input-class="p-1"
        type="text"
        label="Console game"
        help="Enter a console game"
      />
    </FormKit>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="postcss"></style>
