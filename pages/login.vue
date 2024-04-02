<script setup>
// Access user composable functions
const user = useUserSession();

const isSignUp = ref(false);

// Login user event handler
const handleLogin = async (event) => {
	const form = event.target;
	const formData = new FormData(form);

	await user.login(formData.get('email'), formData.get('password'));

	form.reset(); // Clear the form
};

const handleRegistration = async (event) => {
	const form = event.target;
	const formData = new FormData(form);

	await user.register(formData.get('email'), formData.get('password'));

	form.reset(); // Clear the form
};
</script>

<template>
	<div class="u-max-width-650" style="margin: 0 auto;">
		<section class="card u-margin-32">
			<h2 class="eyebrow-heading-2">Login/Register</h2>
			<AuthForm v-if="isSignUp" :handle-submit="handleRegistration" submit-type="Sign Up"></AuthForm>
			<AuthForm v-else :handle-submit="handleLogin" submit-type="Log In"></AuthForm>
			<button v-if="isSignUp" @click="isSignUp = false" class="u-margin-block-start-16">
				Already have an account? Log in
			</button>
			<button v-else @click="isSignUp = true" class="u-margin-block-start-16">
				Don't have an account? Sign up
			</button>
		</section>
	</div>
</template>
