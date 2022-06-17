<template>
	<ul :class="$style.social">
		<li>
			<a
				href="https://www.linkedin.com/in/norman-dankert/"
				target="_blank"
				aria-label="LinkedIn"
				title="Check out my LinkedIn profile (opens in a new tab)"
			>
				<IconLinkedIn :class="$style.icon" />
			</a>
		</li>
		<li>
			<a
				href="https://github.com/totkeks"
				target="_blank"
				aria-label="GitHub"
				title="Check out my GitHub profile (opens in a new tab)"
			>
				<IconGitHub :class="$style.icon" />
			</a>
		</li>
		<!-- <li>
			<a
				href="https://stackoverflow.com/users/6374587/totkeks"
				target="_blank"
				aria-label="StackOverflow"
			>
				<IconStackOverflow :class="$style.icon" />
			</a>
		</li>
		<li>
			<a
				href="https://twitter.com/totkeks"
				target="_blank"
				aria-label="Twitter"
			>
				<IconTwitter :class="$style.icon" />
			</a>
		</li> -->
	</ul>
</template>

<script lang="ts" setup></script>

<style lang="scss" module>
.social {
	display: flex;
	justify-content: center;

	li {
		padding: 0 0.5rem;
	}

	a {
		display: block;
		padding: 0rem;
		width: 3rem;
		height: 3rem;
	}
}

.icon {
	width: 100%;
	height: 100%;

	transition: opacity 0.25s ease-in;
	opacity: 0.75;

	&:hover {
		opacity: 1;
	}
}
</style>
