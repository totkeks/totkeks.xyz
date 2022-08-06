<template>
	<section :class="$style.landing">
		<p>
			<span :class="$style.greeting">Hej,👋</span>welcome to my site! I'm a
			software engineer, tech enthusiast, nature lover and gamer from Germany.
		</p>
	</section>
</template>

<style lang="scss" module>
@use "@/styles/typography";

.landing {
	@include typography.body;

	p {
		text-align: justify;

		+ p {
			margin-block-start: 0.5rem;
		}
	}

	a {
		@include typography.inline-link;
	}
}

.greeting {
	@include typography.drop-cap;

	float: left;
}
</style>
