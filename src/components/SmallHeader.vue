<template>
	<header :class="$style.header">
		<h1>{{ $route.name }}</h1>
	</header>
</template>

<style lang="scss" module>
@use "@/styles/typography";
.header {
	h1 {
		@include typography.heading;

		text-align: center;
	}
}
</style>
