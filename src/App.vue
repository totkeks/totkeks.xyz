<template>
	<header>
		<h1>Norman Dankert</h1>
		<TextSlider :texts="roles" :period="5000" />
		<img src="@/assets/avatar.jpg" />
	</header>

	<main class="main">
		<ul>
			<li>Project list (differently structured CV)</li>
			<li>Special info for recruiters</li>
		</ul>
	</main>

	<footer class="footer">
		<ul>
			<li>
				<a href="https://www.linkedin.com/in/norman-dankert/" target="_blank">
					<IconLinkedIn />
				</a>
			</li>
			<li>
				<a href="https://github.com/totkeks" target="_blank">
					<IconGitHub />
				</a>
			</li>
			<li>
				<a
					href="https://stackoverflow.com/users/6374587/totkeks"
					target="_blank"
				>
					<IconStackOverflow />
				</a>
			</li>
			<li>
				<a href="https://twitter.com/totkeks" target="_blank">
					<Icon name="Twitter" />
				</a>
			</li>
			<li>
				<a href="https://codepen.io/totkeks" target="_blank">
					<Icon name="Codepen" />
				</a>
			</li>
		</ul>
	</footer>

	<footer>Version {{ commitHash }} - Last update {{ buildDate }} UTC</footer>
</template>

<script setup lang="ts">
const commitHash = __COMMIT_HASH__;
const buildDate = __BUILD_DATE__;
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
</script>

<style>
#app {
	width: 100vh;
}
</style>
