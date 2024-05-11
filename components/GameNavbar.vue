<!-- components/navbar.vue -->
<script setup>
const user = useUserSession();
console.log(user)
</script>

<template>
	<div v-if="!user.current">
		<!--- Navbar -->
		<nav class="p-8 main-header u-padding-inline-end-0">
			<h3 class="u-stretch eyebrow-heading-1">Game Selector</h3>
			<!-- Email and logout button if logged in user -->
			<div class="main-header-end u-margin-inline-end-16" v-if="user.current.value">
				<p>{{ user.current.providerUid }}</p>
				<button class="py-4 button" type="button" @click="user.logout()">
					Logout
				</button>
			</div>
			<!-- Login button if no user logged in -->
			<NuxtLink v-else href="/login" class="button u-margin-inline-end-16">
				Login
			</NuxtLink>
		</nav>
	</div>
</template>
