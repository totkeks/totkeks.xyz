<template>
	<transition
		name="text"
		mode="out-in"
		:enter-from-class="$style.textEnterFrom"
		:leave-to-class="$style.textLeaveTo"
	>
		<span :class="$style.text" :key="text">{{ text }}</span>
	</transition>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, PropType, ref } from "vue";

export default defineComponent({
	props: {
		texts: {
			type: Array as PropType<Array<string>>,
			required: true,
		},
		period: {
			type: Number,
			required: true,
		},
	},

	setup(props) {
		const { texts, period } = props;
		const text = ref("");

		const nextText = () => {
			let newText: string;
			do {
				newText = texts[Math.floor(Math.random() * texts.length)];
			} while (newText === text.value);

			text.value = newText;
		};

		nextText();
		const interval = setInterval(nextText, period);
		onBeforeUnmount(() => clearInterval(interval));

		return {
			text,
		};
	},
});
</script>

<style module>
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
