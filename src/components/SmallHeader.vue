<template>
	<header :class="$style.header">
		<h1>{{ $route.name }}</h1>
	</header>
</template>

<script lang="ts" setup></script>

<style lang="scss" module>
@use "@/styles/typography";
.header {
	h1 {
		@include typography.heading;
	}
}
</style>
