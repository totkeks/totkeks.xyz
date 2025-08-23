<template>
	<svg :class="$style.icon" :viewBox="viewBox">
		<path :d="path" />
	</svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icons } from "../data/icons";

export default defineComponent({
	props: {
		name: {
			type: String,
			required: true,
		},
	},

	setup(props) {
		const { viewBox, path } = Icons[props.name];

		return {
			viewBox,
			path,
		};
	},
});
</script>

<style module lang="postcss">
.icon {
	width: 100%;
	height: 100%;
	fill: currentColor;
}
</style>
