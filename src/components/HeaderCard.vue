<template>
	<BaseCard class="header">
		<h1 class="name">Norman Dankert</h1>
		<transition name="role" mode="out-in">
			<h2 class="role" :key="role">{{ role }}</h2>
		</transition>
		<img class="avatar" src="~@/assets/avatar.jpg" />
	</BaseCard>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import BaseCard from "@/components/BaseCard.vue";

@Component({
	components: {
		BaseCard,
	},
})
export default class HeaderCard extends Vue {
	roles = [
		"Computer Scientist",
		"Software Engineer",
		"Front-End Developer",
		"IT Project Manager",
		"Researcher",
	];
	role = "";
	interval = -1;

	created() {
		this.randomRole();
		this.interval = setInterval(this.randomRole, 5000);
	}

	beforeDestroy() {
		clearInterval(this.interval);
	}

	randomRole() {
		let newRole: string;

		do {
			newRole = this.roles[Math.floor(Math.random() * this.roles.length)];
		} while (newRole === this.role);

		this.role = newRole;
	}
}
</script>

<style lang="scss" scoped>
$letter-spacing-name: 0.1rem;
$letter-spacing-role: 0.2rem;

.header {
	display: grid;
	grid-template-rows: auto;
	grid-template-columns: auto;
	grid-template-areas:
		"name avatar"
		"role avatar";
	gap: 0.5rem 1rem;
}

.name {
	grid-area: name;
	align-self: end;
	text-align: right;

	margin: 0 (-$letter-spacing-name) 0 0;
	border-bottom: 1px solid $border-color;

	font: 100 1.6rem/0.9 Museo Sans;
	letter-spacing: $letter-spacing-name;
	text-transform: uppercase;
	color: #313f47;
}

.role {
	grid-area: role;
	align-self: start;
	text-align: right;

	margin: 0 (-$letter-spacing-role) 0 0;

	font: 100 1rem Museo Sans;
	letter-spacing: $letter-spacing-role;
	text-transform: uppercase;
	color: #414f57;

	&-enter-active {
		transition: opacity 0.5s ease, transform 0.5s ease;
	}

	&-leave-active {
		transition: opacity 0.8s cubic-bezier(1, 0.5, 0.8, 1),
			transform 0.8s cubic-bezier(1, 0.5, 0.8, 1);
	}

	&-enter,
	&-leave-to {
		opacity: 0;
		transform: translateX(1rem);
	}
}

.avatar {
	grid-area: avatar;
	align-self: center;

	border-radius: 100%;
}
</style>
