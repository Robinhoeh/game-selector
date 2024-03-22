<template>
  <div
    class="flex flex-row justify-between mb-5 text-sm"
    data-testid="game-form"
  >
      <div class="flex justify-center" data-testid="game-input">
        <FormKit
          name="pcgame1"
          inner-class="relative my-2"
          input-class="p-1"
          class="mt-2"
          type="text"
          label="PC game"
          help="Enter a PC game"
		  validation="distinct"
		  :validation-rules="{ distinct }"
		  :validation-messages="{ distinct: 'Game already exists' }"
		  suffix-icon-class="cursor-pointer hover:text-orange-500"
		  suffix-icon="close"
		  @suffix-icon-click="$emit('reset')"
        />
      </div>
      <FormKit
        name="pcgame2"
        inner-class="relative my-2"
        input-class="p-1 "
        type="text"
        label="PC game"
        help="Enter a PC game"
		validation="distinct"
		:validation-rules="{ distinct }"
		:validation-messages="{ distinct: 'Game already exists' }"
		suffix-icon-class="cursor-pointer hover:text-orange-500"
		  suffix-icon="close"
		  @suffix-icon-click="$emit('reset')"
      />
      <FormKit
        name="consolegame"
        inner-class="relative my-2"
        input-class="p-1"
        type="text"
        label="Console game"
        help="Enter a console game"
		validation="distinct"
		:validation-rules="{ distinct }"
		:validation-messages="{ distinct: 'Game already exists' }"
		suffix-icon-class="cursor-pointer hover:text-orange-500"
		  suffix-icon="close"
		  @suffix-icon-click="$emit('reset')"
      />
    
  </div>
</template>

<script setup lang="ts">
function distinct(node: any) {
  const parent = node.at('$parent')
  if (parent.value) {
    for (const childName in parent.value) {
      if (childName === node.name) continue
      if (parent.value[childName] === node.value) {
        return false
      }
    }
  }
  return true
}

defineEmits(['reset'])
</script>

<style lang="postcss">
.form {
	@apply flex justify-between w-full;
}

.formkit-icon svg {
	width: 12px;
  position: absolute;
  top: 6px;
  right: 8px;
}
</style>
