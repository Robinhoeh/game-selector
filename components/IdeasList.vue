<script setup>
// const ideas = useIdeas();
// const user = useUserSession();
</script>

<template>
	<section class="u-margin-32">
		<article class="card">
			<h4 class="heading-level-4">Latest Ideas</h4>
			<ul class="u-margin-block-start-8">
				<template v-if="ideas.current.value && ideas.current.value.length">
					<li v-for="idea in ideas.current.value">
						<div class="box">
							<h5 class="heading-level-6">{{ idea.title }}</h5>
							<p class="body-text-2">{{ idea.description }}</p>
							<div class="u-position-absolute u-inset-inline-end-8 u-inset-block-start-8">
								<button class="button is-small is-text is-only-icon" aria-label="Remove item" type="button" @click="ideas.remove(idea.$id)">
									<span class="icon-document-remove" aria-hidden="true">X</span>
								</button>
							</div>
						</div>
					</li>
				</template>
				<template v-else>
					<p>No ideas yet.</p>
				</template>
			</ul>
		</article>
	</section>
</template>
