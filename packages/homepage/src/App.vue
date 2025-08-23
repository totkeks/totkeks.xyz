<template>
	<TheHeader class="header" />

	<TheIntro />

	<main class="main">
		<article>
			<header>
				<div class="title">Post Title & Subtitle</div>
				<div class="meta">Date (& Author)</div>
			</header>
			<p>Content</p>
			<footer>
				<a href="/link/to/full">Continue reading</a>
				<div>tags/category | likes | comments</div>
			</footer>
		</article>
	</main>
</template>

<style lang="scss">
#app {
	display: grid;

	min-height: 150vh;

	background-color: var(--page-background-color);

	grid-template-rows: min-content min-content;
	grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));

	gap: var(--large-spacing);
}

.header {
	grid-column: 1 / -1;
}
</style>
