<template>
	<header :class="$style.header">
		<h1 :class="$style.name">Norman Dankert</h1>
		<TextSlider :class="$style.role" :texts="roles" :period="5000" />
		<picture :class="$style.avatar">
			<source srcset="@/assets/avatar.avif" type="image/avif" />
			<source srcset="@/assets/avatar.webp" type="image/webp" />
			<img
				src="@/assets/avatar.jpg"
				alt="A picture of totkeks"
				width="122"
				height="122"
			/>
		</picture>
	</header>
</template>

<script lang="ts" setup>
const roles = [
	"Computer Scientist",
	"Front-End Developer",
	"Full Stack Developer",
	"Hardware Design Engineer",
	"Research Intern",
	"IT Project Manager",
	"IT Trainee",
	"Product Owner",
	"Research Assistant",
	"Software Engineer",
];
</script>

<style lang="scss" module>
$letter-spacing-name: 0.1rem;
$letter-spacing-role: 0.2rem;

.header {
	display: grid;
	grid-template:
		"name avatar" 1fr
		"role avatar" 1fr /
		min-content auto;
	gap: 0.5rem 1rem;
}

.name {
	grid-area: name;
	align-self: end;
	text-align: right;

	margin: 0 (-$letter-spacing-name) 0 0;
	border-bottom: 1px solid var(--border-color);

	font: 100 1.6rem/0.9 Museo Sans, sans-serif;
	letter-spacing: $letter-spacing-name;
	text-transform: uppercase;
	white-space: nowrap;
	color: var(--foreground-bold-color);
}

.role {
	grid-area: role;
	align-self: start;
	text-align: right;

	margin: 0 (-$letter-spacing-role) 0 0;

	font: 300 1rem Museo Sans, sans-serif;
	letter-spacing: $letter-spacing-role;
	text-transform: uppercase;
	color: var(--foreground-color);
}

.avatar {
	grid-area: avatar;
	align-self: center;
	line-height: 0;

	> img {
		-webkit-user-drag: none;
		user-select: none;
		border-radius: 100%;

		width: 6rem;
		height: auto;
	}
}
</style>
