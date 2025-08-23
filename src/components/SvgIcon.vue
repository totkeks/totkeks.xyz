<template>
	<svg
		:class="$style.icon"
		:title="props.name"
		:viewBox="viewBox"
		:innerHTML="content"
	></svg>
</template>

<script lang="ts" setup>
import { Icons } from "@/assets/icons";

const props = defineProps<{
	name: keyof typeof Icons;
	size?: "S" | "M" | "L";
}>();

const { viewBox, content } = Icons[props.name];
</script>

<style lang="scss" module>
.icon {
	width: 100%;
	height: 100%;
}
</style>
