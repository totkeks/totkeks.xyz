<template>
	<transition
		name="text"
		mode="out-in"
		:enter-from-class="$style.textEnterFrom"
		:leave-to-class="$style.textLeaveTo"
	>
		<span :key="text" :class="$style.text">{{ text }}</span>
	</transition>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, ref } from "vue";

const props = defineProps<{
	texts: string[];
	period: number;
}>();

const text = ref("");

const nextText = () => {
	if (props.texts.length <= 1) return;

	let newText: string;
	do {
		newText = props.texts[Math.floor(Math.random() * props.texts.length)];
	} while (newText === text.value);

	text.value = newText;
};

nextText();
const interval = setInterval(nextText, props.period);
onBeforeUnmount(() => clearInterval(interval));
</script>

<style lang="scss" module>
.text {
	display: inline-block;

	transition-duration: var(--slider-duration);
	transition-property: opacity, transform;
	transition-timing-function: ease;
}

.textEnterFrom,
.textLeaveTo {
	opacity: 0;
	transform: var(--slider-transform);
}
</style>
