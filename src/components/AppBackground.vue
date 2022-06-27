<template>
	<picture>
		<source srcset="@/assets/background.avif" type="image/avif" />
		<source srcset="@/assets/background.webp" type="image/webp" />
		<img
			:class="$style.image"
			src="@/assets/background.jpg"
			alt="Page background showing a scenic mountain lake with yellow and green pine trees"
		/>
	</picture>

	<div :class="$style.overlay"></div>
</template>

<style lang="scss" module>
@use "@/styles/utils";

.image,
.overlay {
	pointer-events: none;
	z-index: -1;
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	object-fit: cover;
}

.overlay {
	background: utils.overlay();
}
</style>
