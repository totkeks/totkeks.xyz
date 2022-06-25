<template>
	<footer :class="$style.footer">
		<span>© totkeks</span>
		<span>
			last update
			<time :datetime="buildDate.toISOString()">
				{{
					buildDate.toLocaleString([], {
						dateStyle: "short",
					})
				}}
				{{
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
				>Aleksandra Boguslawska</a
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
.footer {
	display: flex;
	justify-content: center;

	background: rgba(var(--background-color-rgb), 0.1);
	font-size: 0.6rem;
	padding: 0.3em;

	span + span {
		border-left: 1px solid rgba(var(--foreground-color-rgb), 0.5);
		padding-left: 0.5em;
		margin-left: 0.5em;
	}

	a {
		border-bottom: 1px dotted var(--foreground-color);

		&:hover {
			border-bottom-style: solid;
		}
	}
}
</style>
