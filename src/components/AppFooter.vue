<template>
	<footer :class="$style.footer">
		<span>©&nbsp;totkeks</span>
		<span>
			last update
			<time :datetime="buildDate.toISOString()">
				{{
					buildDate.toLocaleString([], {
						dateStyle: "short",
					})
				}}&nbsp;{{
					buildDate.toLocaleString([], {
						hour12: false,
						timeStyle: "short",
					})
				}}
			</time>
		</span>
		<span
			>version
			<a
				:href="`https://github.com/totkeks/totkeks.xyz/commit/${commitHash}`"
				>{{ commitHash.slice(0, 7) }}</a
			></span
		>
		<span>
			background by
			<a href="https://unsplash.com/@aleksandraboguslawska" target="_blank"
				>Aleksandra</a
			>
			on
			<a href="https://unsplash.com/photos/_NF9WxYgV34" target="_blank"
				>Unsplash</a
			>
		</span>
	</footer>
</template>

<script lang="ts" setup>
const commitHash = __COMMIT_HASH__;
const buildDate = new Date(__BUILD_DATE__);
</script>

<style lang="scss" module>
@use "@/styles/typography";

.footer {
	@include typography.footer;

	display: flex;
	justify-content: center;
	align-items: center;

	background: rgba(var(--background-color-rgb), 0.1);
	padding: 0.5em;

	span + span {
		border-left: 1px solid rgba(var(--foreground-color-rgb), 0.5);
		padding-left: 0.5em;
		margin-left: 0.5em;
		text-align: center;
	}

	a {
		@include typography.footer-link;
	}
}
</style>
