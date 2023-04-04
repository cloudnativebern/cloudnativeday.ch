<script lang="ts">
	import diemobiliar from '$lib/images/diemobiliar.svg';
	import postfinance from '$lib/images/postfinance.svg';
	import swisscom from '$lib/images/swisscom.svg';

	enum SponsorTier {
		Gold,
		Silver,
		Bronze,
		SpeakerEvent,
		AfterParty
	}

	interface Sponsor {
		name: string;
		imgSrc: string;
		link: string;
		tier: SponsorTier;
	}

	const sponsors: Sponsor[] = [
		{
			name: 'dieMobiliar',
			imgSrc: diemobiliar,
			link: 'https://www.mobiliar.ch/',
			tier: SponsorTier.Gold
		},
		{
			name: 'PostFinance',
			imgSrc: postfinance,
			link: 'https://www.postfinance.ch/en/private.html',
			tier: SponsorTier.Gold
		},
		{
			name: 'Swisscom',
			imgSrc: swisscom,
			link: 'https://www.swisscom.ch/en/residential.html',
			tier: SponsorTier.Gold
		}
	];

	const goldSponsors = sponsors.filter((s) => s.tier === SponsorTier.Gold);
	const silverSponsors = sponsors.filter((s) => s.tier === SponsorTier.Silver);
</script>

<div class="w-full p-28">
	<div id="sponsors" class="container mx-auto flex flex-col items-center text-center max-w-5xl">
		<h2 class="mb-8">Sponsor*innen</h2>

		<div class="prose text-2xl text-left">
			<p>
				Der Non-Profit Verein «bernerit.rocks» organisiert den Anlass für Cloud Native
				Praktiker*innen und setzt dabei auf Sponsor*innen. Durch Ihre Unterstützung präsentieren Sie
				sich an vorderster Front der extrem stark wachsenden Cloud Native Community der Schweiz.
				Werden Sie Sponsor*in und knüpfen Sie Kontakte mit den anwesenden Spezialist*innen am Cloud
				Native Day! Bitte nehmen Sie via
				<a href="mailto:sponsoring@cloudnativeday.ch">sponsoring@cloudnativeday.ch</a>
				Kontakt mit uns auf.
			</p>
		</div>

		{#if goldSponsors.length > 0}
			<h3 class="mt-24 w-full text-left">Gold</h3>
			<div class="grid grid-cols-3">
				{#each goldSponsors as sponsor (sponsor.name)}
					<a href={sponsor.link} target="_blank" rel="noopener" class="m-4">
						<div class="block p-4 w-full">
							<img src={sponsor.imgSrc} alt={sponsor.name} class="h-24" />
						</div>
					</a>
				{/each}
			</div>
		{/if}

		{#if silverSponsors.length > 0}
			<h3 class="mt-24 w-full text-left">Silver</h3>
			<div class="grid grid-cols-3">
				{#each silverSponsors as sponsor (sponsor.name)}
					<a href={sponsor.link} target="_blank" rel="noopener" class="m-4">
						<div class="block card card-hover p-4 w-full">
							<img src={sponsor.imgSrc} alt={sponsor.name} class="h-24" />
						</div>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</div>
