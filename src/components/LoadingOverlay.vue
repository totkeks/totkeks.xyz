<template>
	<transition
		name="overlay"
		:leave-active-class="$style['overlay-leave-active']"
		:leave-to-class="$style['overlay-leave-to']"
	>
		<div v-if="!loaded" :class="$style.overlay"></div>
	</transition>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const loaded = ref(false);

onMounted(() => {
	loaded.value = true;
});
</script>

<style lang="scss" module>
@use "@/styles/utils";

.overlay {
	display: block;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	opacity: 1;
	z-index: 1;
	background: utils.overlay(), var(--background-color);
	pointer-events: none;

	&-leave-active {
		transition: opacity var(--loading-transition);
	}

	&-leave-to {
		opacity: 0;
	}
}
</style>
