<template>
	<div :class="$style.layout">
		<div :class="$style.card">
			<component :is="headerComponent" :class="$style.header" />

			<main>
				<slot></slot>
			</main>

			<SocialLinks :class="$style.social" />
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
	row-gap: 1rem;

	grid-template:
		". . ." 2fr
		". c ." auto
		". . ." 3fr
		"f f f" auto /
		1fr auto 1fr;

	width: 100vw;
	min-height: 100vh;
}

.card {
	grid-area: c;

	display: grid;
	grid-template-columns: min-content;
	grid-template-rows: auto;

	background-color: rgba(var(--background-color-rgb), 0.8);
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

.footer {
	grid-area: f;
}
</style>
