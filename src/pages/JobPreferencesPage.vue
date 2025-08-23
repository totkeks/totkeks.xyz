<template>
	<div :class="$style.cardbox">
		<!-- <p>
			My core professional values are humor, candor and transparency. Whereas my
			main motivators are <em>autonomy</em>, <em>mastery</em> and
			<em>purpose</em>.
		</p> -->

		<section :class="$style.card">
			<h1>Roles</h1>
			<ul>
				<li>Full Stack Developer</li>
				<li>Software Architect</li>
				<li>
					Product Owner
					<span :class="$style.info" title="Gather more experience">i</span>
				</li>
				<li>
					Tech Lead / Startup CTO
					<span :class="$style.info" title="New challenges">i</span>
				</li>
			</ul>
		</section>

		<section :class="$style.card">
			<h1>Deal breakers</h1>
			<ul>
				<li>Consulting / 3rd party projects</li>
				<li>Marketing / Advertising</li>
				<li>No remote work</li>
				<li>Java, PHP</li>
			</ul>
		</section>

		<section :class="$style.card">
			<h1>Tech stack</h1>
			<ul>
				<li>
					Frontend:
					<SvgIcon name="TypeScript" :class="$style.icon" /> +
					<SvgIcon name="Angular" :class="$style.icon" />
					<SvgIcon name="React" :class="$style.icon" />
					<SvgIcon name="Vue" :class="$style.icon" />
				</li>
				<li>
					Backend: <SvgIcon name="TypeScript" :class="$style.icon" />
					<SvgIcon name="NodeJs" :class="$style.icon" /> |
					<SvgIcon name="CSharp" :class="$style.icon" />
					<SvgIcon name="DotNet" :class="$style.icon" /> |
					<SvgIcon name="Python" :class="$style.icon" />
				</li>
				<li>
					Code: <SvgIcon name="GitHub" :class="$style.icon" /> or
					<SvgIcon name="AzureDevOps" :class="$style.icon" />
				</li>
				<li>
					CI/CD: <SvgIcon name="GitHub" :class="$style.icon" /> or
					<SvgIcon name="AzureDevOps" :class="$style.icon" />
				</li>
				<li>
					Project: <SvgIcon name="GitHub" :class="$style.icon" /> or
					<SvgIcon name="AzureDevOps" :class="$style.icon" /> (no Jira
					please&nbsp;😥)
				</li>
				<li>
					Other: <SvgIcon name="Azure" :class="$style.icon" />, Codespaces
				</li>
			</ul>
		</section>

		<section :class="$style.card">
			<h1>Product</h1>
			<ul>
				<li>You got your own product(s), no consulting!</li>
				<li>No marketing or advertising except it's ethical</li>
				<li>Not the 1000th e-commerce product except you are Shopify</li>
				<li>Research and innovation is a plus</li>
				<li>Disruptive product is a plus</li>
			</ul>
		</section>

		<section :class="$style.card">
			<h1>Organisation & Culture</h1>
			<ul>
				<li>Product-oriented organisation focussed on outcome</li>
				<li>Scrum with (best-case) one Scrum Master per team</li>
				<li>Analyse errors and learn from them (inspect & adapt)</li>
				<li>Strategic planning with OKR</li>
			</ul>
		</section>

		<section :class="$style.card">
			<h1>Benefits</h1>
			<ul>
				<li>Own choice of hardware (laptop, headphones, ...)</li>
				<li>Contribution to phone contract (BYOD)</li>
				<li>
					Contribution to internet contract and equipment (remote position)
				</li>
				<li>Contribution to physical health (gym, training courses)</li>
				<li>
					Contribution to mental health (mindfulness apps like Headspace or
					Calm)
				</li>
				<li>Fruit basket in the office (no unhealthy snacks please)</li>
			</ul>
		</section>
	</div>
</template>

<style lang="scss" module>
@use "@/styles/typography";
.cardbox {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 1rem;
}

.card {
	background-color: rgba(var(--background-color-rgb), 0.4);
	border: 1px solid var(--border-color);
	border-radius: var(--card-border-radius);
	padding: 1rem; // maybe 1rem on desktop, 0.5 on mobile?

	h1 {
		@include typography.subheading;

		margin-bottom: 0.25rem;
	}

	li {
		@include typography.body;

		list-style-type: "›";
		margin-left: 0.5rem;
		padding-left: 0.25rem;
	}
}

.icon {
	width: 1.25em;
	vertical-align: text-bottom;
}

.info {
	color: white;
	background: var(--highlight-color);
	border-radius: 100%;
	display: inline-flex;
	width: 1rem;
	height: 1rem;
	align-items: center;
	justify-content: center;
	font-size: 80%;
	font-weight: 700;
}
</style>
