<template>
	<transition name="overlay">
		<div v-if="!loaded" class="overlay"></div>
	</transition>

	<section class="card">
		<header class="header">
			<AppHeader />
		</header>

		<main class="main">
			<router-view />
		</main>

		<footer class="social">
			<SocialLinks />
		</footer>
	</section>

	<footer class="footer">
		<AppFooter />
	</footer>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const loaded = ref(false);

onMounted(() => {
	loaded.value = true;
});
</script>

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
	padding: calc(var(--card-padding) / 2) var(--card-padding);
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

.overlay {
	display: block;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	opacity: 1;
	z-index: 1;
	background: overlay(), var(--background-color);
	pointer-events: none;

	&-leave-active {
		transition: opacity 1.75s ease-out;
	}

	&-leave-to {
		opacity: 0;
	}
}
</style>
