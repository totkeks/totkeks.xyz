<template>
	<section :class="$style.intro">
		<h1>Hej, I'm Norman&nbsp;👋</h1>
		<p><TextSlider :texts="roles" :period="10000" /></p>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	setup() {
		const roles = [
			"I'm a Computer Scientist.",
			"I'm a Design System Specialist.",
			"I'm a Front-End Developer.",
			"I'm a Full Stack Developer.",
			"I was a Hardware Design Engineer.",
			"I was an Intern.",
			"I was an IT Project Manager.",
			"I was an IT Trainee.",
			"I was a Product Owner.",
			"I was a Research Assistant.",
			"I'm a Software Engineer.",
		];

		return {
			roles,
		};
	},
});
</script>

<style module lang="scss">
.intro {
	h1 {
		@include typo-heading;

		margin-bottom: var(--small-spacing);
	}

	p {
		display: inline;
		@include typo-subheading;
	}
}
</style>
