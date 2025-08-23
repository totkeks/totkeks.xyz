<template>
	<main class="home">
		<HeaderCard class="header"></HeaderCard>

		<BaseCard class="professional">
			<h1>Professional</h1>
			<ul>
				<li>
					<a href="https://www.linkedin.com/in/norman-dankert/" target="_blank">
						<font-awesome-icon :icon="['fab', 'linkedin-in']"></font-awesome-icon>
					</a>
				</li>
				<li>
					<a href="https://stackoverflow.com/users/story/6374587" target="_blank">
						<font-awesome-icon :icon="['fab', 'stack-overflow']"></font-awesome-icon>
					</a>
				</li>
				<li>
					<a href="https://www.xing.com/profile/Norman_Dankert" target="_blank">
						<font-awesome-icon :icon="['fab', 'xing']"></font-awesome-icon>
					</a>
				</li>
			</ul>
		</BaseCard>

		<BaseCard class="personal">
			<h1>Personal</h1>
			<ul>
				<li>
					<a href="https://github.com/totkeks" target="_blank">
						<font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
					</a>
				</li>
				<li>
					<a href="https://stackoverflow.com/users/6374587/totkeks" target="_blank">
						<font-awesome-icon :icon="['fab', 'stack-overflow']"></font-awesome-icon>
					</a>
				</li>
				<li>
					<a href="https://twitter.com/totkeks" target="_blank">
						<font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
					</a>
				</li>
			</ul>
		</BaseCard>
	</main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import BaseCard from "@/components/BaseCard.vue";
import HeaderCard from "@/components/HeaderCard.vue";

@Component({
	components: {
		BaseCard,
		HeaderCard,
	},
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
$border-color: #c8cccf;
$hover-color: #91e6cf;

.home {
	display: grid;

	grid-template:
		". ............ ." 1fr
		". header       ." auto
		". professional ." auto
		". personal     ." auto
		". ............ ." 1fr /
		1fr auto 1fr;

	min-height: 100vh;
}

.header {
	grid-area: header;
}

.professional {
	grid-area: professional;
}

.personal {
	grid-area: personal;
}

.card {
	h1 {
		font-family: Museo Sans, serif;
		font-weight: 100;
		text-transform: uppercase;
		font-size: 1rem;
		letter-spacing: 0.2rem;
		color: #414f57;

		margin: 0 0 1rem 0;
	}

	ul {
		display: flex;
		list-style-type: none;
		margin: 0;
		padding: 0;
		justify-content: space-evenly;
	}

	li {
		line-height: 0;
	}
}

a {
	color: $border-color;

	transition: color 0.2s ease;

	> svg {
		width: 2.5em !important;
		height: 2.5em;
		padding: 0.8em;
		border: 1px solid $border-color;
		border-radius: 100%;

		transition: border-color 0.2s ease;
	}

	&:hover {
		color: $hover-color;

		> svg {
			border-color: $hover-color;
		}
	}
}
</style>
