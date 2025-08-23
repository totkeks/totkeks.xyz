<template>
	<transition name="card" appear>
		<section class="card">
			<slot></slot>
		</section>
	</transition>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class BaseCard extends Vue {}
</script>

<style lang="scss">
.card {
	background: $card-background;
	opacity: $card-opacity;

	padding: ($card-padding / 2) $card-padding;

	&:first-of-type {
		border-radius: $card-corner-radius $card-corner-radius 0 0;
		border-bottom: 1px solid $border-color;
		padding-top: $card-padding;
	}

	&:last-of-type {
		border-radius: 0 0$card-corner-radius $card-corner-radius;
		padding-bottom: $card-padding;
	}

	&-enter {
		opacity: 0;
		transform: rotateX(60deg);
	}

	&-enter-active {
		transition: opacity $card-tilt-duration ease-in, transform $card-tilt-duration ease-in;
	}

	&-enter-to {
		border-bottom-color: transparent;
	}
}
</style>
