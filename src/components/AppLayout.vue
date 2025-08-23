<template>
	<div :class="$style.layout">
		<div :class="$style.card">
			<component :is="headerComponent" />

			<main>
				<slot></slot>
			</main>

			<SocialLinks />
		</div>

		<AppFooter :class="$style.footer" />
	</div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import BigHeader from "./BigHeader.vue";
import SmallHeader from "./SmallHeader.vue";

const headerComponent = computed(() =>
	useRoute().name === "Home" ? BigHeader : SmallHeader
);
</script>

<style lang="scss" module>
.layout {
	display: grid;

	grid-template:
		". . ." 2fr
		". c ." auto
		". . ." minmax(1.5rem, 3fr)
		"f f f" auto /
		1fr clamp(20rem, 100vw, 80ch) 1fr;

	width: 100vw;
	min-height: 100vh;
}

.card {
	grid-area: c;

	display: flex;
	flex-direction: column;
	flex: 1;
	row-gap: calc(var(--card-padding) / 2);

	background-color: rgba(var(--background-color-rgb), 0.8);
	padding: var(--card-padding) var(--card-padding) calc(var(--card-padding) / 2);
	border-radius: var(--card-border-radius);
}

.footer {
	grid-area: f;
}
</style>
