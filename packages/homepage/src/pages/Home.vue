<template>
	<section :class="$style.homepage">
		<header :class="$style.header">
			<h1>Norman Dankert</h1>
			<TextSlider :texts="roles" :period="5000" />
			<!-- <img src="../assets/avatar.jpg" /> -->
		</header>

		<main class="main">
			<ul>
				<li>
					<router-link to="/job-search"
						>Special info for recruiters</router-link
					>
				</li>
				<li>Project list (differently structured CV)</li>
			</ul>
		</main>

		<footer :class="$style.footer">
			<ul>
				<li>
					<a href="https://www.linkedin.com/in/norman-dankert/" target="_blank">
						<Icon name="LinkedIn" />
					</a>
				</li>
				<li>
					<a
						href="https://stackoverflow.com/users/6374587/totkeks"
						target="_blank"
					>
						<Icon name="StackOverflow" />
					</a>
				</li>
				<li>
					<a href="https://www.xing.com/profile/Norman_Dankert" target="_blank">
						<Icon name="Xing" />
					</a>
				</li>
				<li>
					<a href="https://twitter.com/totkeks" target="_blank">
						<Icon name="Twitter" />
					</a>
				</li>
				<li>
					<a href="https://github.com/totkeks" target="_blank">
						<Icon name="GitHub" />
					</a>
				</li>
				<li>
					<a href="https://codepen.io/totkeks" target="_blank">
						<Icon name="Codepen" />
					</a>
				</li>
			</ul>
		</footer>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	setup() {
		const roles = [
			"Computer Scientist",
			"Design System Specialist",
			"Front-End Developer",
			"Full Stack Developer",
			"Hardware Design Engineer",
			"Intern",
			"IT Project Manager",
			"IT Trainee",
			"Product Owner",
			"Research Assistant",
			"Software Engineer",
		];

		return {
			roles,
		};
	},
});
</script>

<style module lang="postcss">
.homepage {
	display: flex;
	flex-direction: column;
	/* height: 100%; */

	& header {
		& h1 {
			font-size: 2rem;
		}
	}

	& footer {
		margin-top: auto;
	}
}

.footer {
	& ul {
		display: grid;

		line-height: 0;

		grid-template-columns: repeat(auto-fill, 3rem);
		grid-gap: 0.75rem;
	}

	& a {
		display: inline-block;
		padding: 0.5rem;
		height: 3rem;
		width: 3rem;

		border: 2px solid black;

		transition: box-shadow ease 0.5s;

		&:hover {
			color: white;
			box-shadow: inset 0 3rem 0 0 black;
		}
	}
}
</style>
