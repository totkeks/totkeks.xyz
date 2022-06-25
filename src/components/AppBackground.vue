<template>
	<picture>
		<source srcset="@/assets/background.avif" type="image/avif" />
		<source srcset="@/assets/background.webp" type="image/webp" />
		<img :class="$style.image" src="@/assets/background.jpg" />
	</picture>

	<div :class="$style.overlay"></div>
</template>

<style lang="scss" module>
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
	background: overlay();
}
</style>
