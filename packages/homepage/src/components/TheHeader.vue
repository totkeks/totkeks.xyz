<template>
	<header :class="$style.header">
		<a :class="$style.title" href="/"></a>
		<nav :class="$style.links">
			<ul>
				<li><a href="/projects">Projects</a></li>
				<li><a href="/career-goals">Career goals</a></li>
				<li><a href="/blog">Blog</a></li>
				<li><a href="/info">Info</a></li>
			</ul>
		</nav>
	</header>
</template>

<style module lang="scss">
.header {
	display: flex;

	height: 3.5rem;
	position: sticky;
	top: 0px;

	background-color: var(--content-background-color);
	border-bottom: 1px solid var(--border-color);
}

.title {
	width: calc(var(--large-spacing) + var(--small-spacing));

	background: url("../assets/logo.svg") no-repeat center / var(--large-spacing);
}

.links {
	padding-left: var(--medium-spacing);
	border-left: 1px solid var(--border-color);

	ul {
		display: flex;
		height: 100%;

		align-items: center;
	}

	li + li {
		margin-left: var(--small-spacing);
		padding-left: var(--small-spacing);
		border-left: 1px solid var(--border-color);
	}

	a {
		@include typo-subheading;
		@include animated-line;

		white-space: nowrap;
	}
}
</style>
