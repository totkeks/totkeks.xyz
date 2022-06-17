<template>
	<transition name="overlay">
		<div v-if="!loaded" class="overlay"></div>
	</transition>

	<main class="main"></main>

	<footer class="footer"></footer>
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

.main {
	grid-area: main;
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
