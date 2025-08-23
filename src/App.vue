<template>
	<div id="app">
		<transition name="overlay">
			<div v-if="!loaded" class="overlay"></div>
		</transition>

		<router-view />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
	private loaded = false;

	private mounted() {
		this.loaded = true;
	}
}
</script>

<style lang="scss">
@function overlay() {
	$frizzy-overlay: repeat top left / 100px 100px fixed url("~@/assets/overlay.png");
	$gradient-overlay: no-repeat bottom center / cover fixed
		linear-gradient(60deg, rgba(124, 236, 180, 0.5) 5%, rgba(108, 141, 255, 0.35));

	@return ($frizzy-overlay, $gradient-overlay);
}

#app {
	width: 100%;
	min-height: 100vh;

	background: overlay(), no-repeat center / cover fixed url("~@/assets/bg.jpg");
}

.overlay {
	display: block;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	opacity: 1;
	z-index: 1;
	background: overlay(), white;
	pointer-events: none;

	&-leave-active {
		transition: opacity 1.75s ease-out;
	}

	&-leave-to {
		opacity: 0;
	}
}
</style>
