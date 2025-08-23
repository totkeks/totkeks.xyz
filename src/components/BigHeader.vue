<template>
	<header :class="$style.header">
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
		<h1 :class="$style.name">Norman Dankert</h1>
		<TextSlider :class="$style.role" :texts="roles" :period="10000" />
	</header>
</template>

<script lang="ts" setup>
const roles = [
	"Computer Scientist",
	"Research Intern",
	"Research Assistant",
	"Hardware Design Engineer",
	"IT Trainee",
	"IT Project Manager",
	"Front-End Developer",
	"Full Stack Developer",
	"Product Owner",
];
</script>

<style lang="scss" module>
@use "@/styles/typography";
$letter-spacing-name: 0.1rem;
$letter-spacing-role: 0.2rem;

.header {
	display: grid;
	grid-template:
		"avatar" auto
		"." 1rem
		"name" auto
		"role" 2.5rem /
		auto;
	text-align: center;
	justify-content: center;
}

.name {
	@include typography.heading;

	grid-area: name;
	margin: 0 (-$letter-spacing-name) 0 0;
	letter-spacing: $letter-spacing-name;
}

.role {
	@include typography.subheading;

	grid-area: role;
	margin: 0.25rem (-$letter-spacing-role) 0 0;
	letter-spacing: $letter-spacing-role;
}

.avatar {
	grid-area: avatar;
	line-height: 0;

	> img {
		-webkit-user-drag: none;
		user-select: none;
		border-radius: 100%;

		width: 6rem;
		height: auto;
	}
}

@media screen and (min-width: 32rem) {
	.header {
		grid-template:
			"name avatar" 1fr
			"role avatar" 1fr /
			auto auto;
		column-gap: 1rem;
		text-align: right;
	}

	.name {
		align-self: end;
	}

	.role {
		align-self: start;
	}
}
</style>
