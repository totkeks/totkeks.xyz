<template>
	<LoadingOverlay />

	<section class="card">
		<header class="header">
			<AppHeader />
		</header>

		<!-- <main class="main">
			<router-view />
		</main> -->

		<footer class="social">
			<SocialLinks />
		</footer>
	</section>

	<footer class="footer">
		<AppFooter />
	</footer>
</template>

<style lang="scss">
#app {
	display: grid;
	row-gap: 1rem;

	grid-template:
		". .... ." 2fr
		". main ." auto
		". .... ." 3fr
		"footer footer footer" auto /
		1fr auto 1fr;

	width: 100vw;
	min-height: 100vh;

	background: overlay(),
		no-repeat center / cover fixed url("@/assets/background.avif");
}

.card {
	grid-area: main;
	display: grid;
	grid-template-columns: min-content;
	grid-template-rows: auto;

	background-color: rgba(var(--background-color-rgb), 0.9);
	padding: var(--card-padding) var(--card-padding) calc(var(--card-padding) / 2);
	border-radius: var(--card-border-radius);
}

.header {
	border-bottom: 1px solid rgba(var(--border-color-rgb), 0.3);
	padding-bottom: calc(var(--card-padding) / 2);
	margin-bottom: calc(var(--card-padding) / 2);
}

.social {
	border-top: 1px solid rgba(var(--border-color-rgb), 0.3);
	padding-top: calc(var(--card-padding) / 2);
	margin-top: calc(var(--card-padding) / 2);
}

.main {
	text-align: justify;

	p {
		font: 300 100% Museo Sans, sans-serif;

		strong {
			font-weight: 500;
		}
	}
}

.footer {
	grid-area: footer;
}
</style>
