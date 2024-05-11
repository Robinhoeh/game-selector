<!-- components/authForm.vue -->

<template>
	<form class="flex flex-col justify-center p-8 form u-width-full-line u-max-width-500 u-margin-block-start-16" @submit.prevent="handleSubmit">
		<ul class="form-list">
			<!-- Input field e-mail -->
			<li class="form-item">
				<label class="label">Email</label>
				<div class="input-text-wrapper">
					<input type="email" name="email" class="input-text" placeholder="Email" required />
				</div>
			</li>
			<!-- Input field e-mail -->
			<li class="form-item">
				<label class="label">Password</label>
				<div class="input-text-wrapper">
					<input type="password" name="password" class="input-text" placeholder="Password" required />
				</div>
			</li>
		</ul>
		<ul class="buttons-list u-margin-block-start-16">
			<!-- Login button  -->
			<li class="mt-4 buttons-list-item">
				<button class="p-2 bg-purple-400 w-200px button is-small u-margin-inline-start-4" aria-label="Login" @click="handleSubmit">
					{{ submitType }}
				</button>
			</li>
		</ul>
	</form>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
	handleSubmit: {
		type: Function,
		required: true
	},
	submitType: {
		type: String,
		required: true
	}
})
</script>
