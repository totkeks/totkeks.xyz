<template>
	<p>
		Hej visitor 👋<br />My name is Norman, though on the internet I go by
		totkeks.
	</p>
	<p>
		For professional inquiries you can find my resumé and contact me on
		<a
			class="textlink"
			href="https://www.linkedin.com/in/norman-dankert/"
			target="_blank"
			>LinkedIn</a
		>. I also prepared a
		<router-link :to="{ name: 'Job' }" class="textlink"
			>special page for recruiters</router-link
		>
		that makes it easy to see if your offer matches my preferences.
	</p>
</template>
