<template>
	<section :class="$style.landing">
		<p>
			<span :class="$style.greeting">Hej,👋</span>welcome to my site! I'm a
			software engineer, tech enthusiast, nature lover and gamer from Germany.
		</p>
		<p>
			My core professional values are humor, candor and transparency. Whereas my
			main motivators are <em>autonomy</em>, <em>mastery</em> and
			<em>purpose</em>.
		</p>
		<p>
			I compiled my
			<router-link :to="{ name: 'Job' }" class="textlink"
				>job preferences</router-link
			>
			as a guideline for recruiters and headhunters.
		</p>
	</section>
</template>

<style lang="scss" module>
.landing {
	p {
		text-align: justify;
		line-height: 1.5rem;
	}

	p + p {
		margin-block-start: 0.5rem;
	}
}

.greeting {
	float: left;
	// slightly reduced line-height to fix rounding glitches
	font: 400 2rem/2.99rem Marcellus SC, serif;
	padding-right: 0.5rem;
}
</style>
