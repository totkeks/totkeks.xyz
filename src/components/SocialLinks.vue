<template>
	<section :class="$style.social">
		<a
			href="https://www.linkedin.com/in/norman-dankert/"
			target="_blank"
			title="Check out my LinkedIn profile (opens in a new tab)"
		>
			<SvgIcon name="LinkedIn" :class="$style.icon" />
		</a>
		<a
			href="https://github.com/totkeks"
			target="_blank"
			title="Check out my GitHub profile (opens in a new tab)"
		>
			<SvgIcon name="GitHub" :class="$style.icon" />
		</a>
	</section>
</template>

<style lang="scss" module>
.social {
	display: flex;
	justify-content: center;

	a {
		display: block;
		padding: 0rem;
		width: 3rem;
		height: 3rem;

		+ a {
			margin-left: 1.5rem;
		}
	}
}

.icon {
	transition: opacity 0.25s ease-in;
	opacity: 0.75;

	&:hover,
	&:focus {
		opacity: 1;
	}
}
</style>
