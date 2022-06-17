<template>
	<div :class="$style.footer">
		<span>© totkeks</span>
		<span>
			last update
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
	</div>
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
	color: var(--foreground-color);
	font: 300 0.6rem Museo Sans, sans-serif;
	padding: 0.25em;

	span {
		+ span {
			border-left: 1px solid var(--border-color);
			padding-left: 0.5em;
			margin-left: 0.5em;
		}

		a {
			text-decoration: underline dotted;

			&:hover {
				text-decoration: underline;
			}
		}
	}
}
</style>
