<script lang="ts">
	import { _ } from 'svelte-i18n';
	// import acend from '$lib/images/sponsors/acend.webp';
	import adfinis from '$lib/images/sponsors/adfinis.png';
	// import adnovum from '$lib/images/sponsors/adnovum.png';
	import amanox from '$lib/images/sponsors/amanox.png';
	import aws from '$lib/images/sponsors/aws.svg';
	// import azure from '$lib/images/sponsors/azure.png';
	import bedag from '$lib/images/sponsors/bedag.svg';
	import bespinian from '$lib/images/sponsors/bespinian.svg';
	// import camptocamp from '$lib/images/sponsors/camp-to-camp.png';
	// import cloud37 from '$lib/images/sponsors/cloud37.png';
	import cloudscale from '$lib/images/sponsors/cloudscale.png';
	import dieMobiliar from '$lib/images/sponsors/diemobiliar.svg';
	import diepost from '$lib/images/sponsors/diepost.svg';
	// import isovalent from '$lib/images/sponsors/isovalent.png';
	import peakscale from '$lib/images/sponsors/peakscale.svg';
	import postfinance from '$lib/images/sponsors/postfinance.svg';
	import puzzle from '$lib/images/sponsors/puzzle.svg';
	// import spoud from '$lib/images/sponsors/spoud.png';
	import swisscom from '$lib/images/sponsors/swisscom.svg';
	// import tecracer from '$lib/images/sponsors/tecracer.svg';
	import vshn from '$lib/images/sponsors/vshn.svg';
	import hidora from '$lib/images/sponsors/hidora.svg';
	import steppingStone from '$lib/images/sponsors/stepping-stone.svg';
	import schaltstelle from '$lib/images/sponsors/schaltstelle.svg';
	import standortfoerderung from '$lib/images/sponsors/standortfoerderung.svg';
	import airlock from '$lib/images/sponsors/airlock.svg';
	import exoscale from '$lib/images/sponsors/exoscale.svg';
	import nexplore from '$lib/images/sponsors/nexplore.png';
	import innoq from '$lib/images/sponsors/innoq.svg';
	import redguard from '$lib/images/sponsors/redguard.svg';
	// import itpoint from '$lib/images/sponsors/itpoint.svg';
	import oria from '$lib/images/sponsors/oria.png';

	enum SponsorTier {
		Gold,
		Silver,
		Bronze,
		Beer,
		AfterParty,
		Gelato,
		Barista,
		Popcorn,
		Community
	}

	interface Sponsor {
		name: string;
		imgSrc: string;
		link: string;
		tier: SponsorTier;
	}

	const sponsors: Sponsor[] = [
		{
			name: 'Swisscom',
			imgSrc: swisscom,
			link: 'https://www.swisscom.ch/',
			tier: SponsorTier.Gold
		},
		{
			name: 'PostFinance',
			imgSrc: postfinance,
			link: 'https://www.postfinance.ch/',
			tier: SponsorTier.Gold
		},
		{
			name: 'Die Mobiliar',
			imgSrc: dieMobiliar,
			link: 'https://www.mobiliar.ch/',
			tier: SponsorTier.Gold
		},
		{
			name: 'Axians Amanox',
			imgSrc: amanox,
			link: 'https://www.amanox.ch/',
			tier: SponsorTier.Bronze
		},
		{
			name: 'cloudscale',
			imgSrc: cloudscale,
			link: 'https://cloudscale.ch/',
			tier: SponsorTier.Bronze
		},
		{
			name: 'Puzzle ITC',
			imgSrc: puzzle,
			link: 'https://www.puzzle.ch/',
			tier: SponsorTier.Beer
		},
		{
			name: 'VSHN',
			imgSrc: vshn,
			link: 'https://www.vshn.ch/',
			tier: SponsorTier.Silver
		},
		{
			name: 'Swiss Post',
			imgSrc: diepost,
			link: 'https://www.post.ch/',
			tier: SponsorTier.Popcorn
		},
		{
			name: 'Hidora',
			imgSrc: hidora,
			link: 'https://hidora.io/',
			tier: SponsorTier.Silver
		},
		{
			name: 'stepping stone',
			imgSrc: steppingStone,
			link: 'https://stepping-stone.ch/',
			tier: SponsorTier.Silver
		},
		{
			name: 'Schaltstelle',
			imgSrc: schaltstelle,
			link: 'https://www.schaltstelle.ch/',
			tier: SponsorTier.Bronze
		},
		{
			name: 'Adfinis',
			imgSrc: adfinis,
			link: 'https://adfinis.com/',
			tier: SponsorTier.Bronze
		},
		{
			name: 'Standortförderung Kanton Bern',
			imgSrc: standortfoerderung,
			link: 'https://www.berninvest.be.ch/',
			tier: SponsorTier.Bronze
		},
		{
			name: 'Ergon Airlock',
			imgSrc: airlock,
			link: 'https://www.airlock.com/',
			tier: SponsorTier.Silver
		},
		{
			name: 'Exoscale',
			imgSrc: exoscale,
			link: 'https://www.exoscale.com/',
			tier: SponsorTier.Silver
		},
		{
			name: 'Nexplore',
			imgSrc: nexplore,
			link: 'https://www.nexplore.ch/',
			tier: SponsorTier.Silver
		},
		{
			name: 'Peak Scale',
			imgSrc: peakscale,
			link: 'https://peakscale.ch/',
			tier: SponsorTier.Bronze
		},
		{
			name: 'bespinian',
			imgSrc: bespinian,
			link: 'https://bespinian.io/',
			tier: SponsorTier.Bronze
		},
		{
			name: 'Amazon Web Services',
			imgSrc: aws,
			link: 'https://aws.amazon.com/local/switzerland/',
			tier: SponsorTier.AfterParty
		},
		{
			name: 'innoQ',
			imgSrc: innoq,
			link: 'https://www.innoq.com/',
			tier: SponsorTier.Bronze
		},
		{
			name: 'Redguard',
			imgSrc: redguard,
			link: 'https://www.redguard.ch/',
			tier: SponsorTier.Bronze
		},
		{
			name: 'Bedag',
			imgSrc: bedag,
			link: 'https://www.bedag.ch/',
			tier: SponsorTier.Gelato
		},
		{
			name: 'ORIA',
			imgSrc: oria,
			link: 'https://www.itpoint.ch/it-cloud-and-managed-services/',
			tier: SponsorTier.Bronze
		}
	];

	const goldSponsors = sponsors.filter((s) => s.tier === SponsorTier.Gold);
	const silverSponsors = sponsors.filter((s) => s.tier === SponsorTier.Silver);
	const bronzeSponsors = sponsors.filter((s) => s.tier === SponsorTier.Bronze);
	const beerSponsors = sponsors.filter((s) => s.tier === SponsorTier.Beer);
	const afterPartySponsors = sponsors.filter((s) => s.tier === SponsorTier.AfterParty);
	const gelatoSponsors = sponsors.filter((s) => s.tier === SponsorTier.Gelato);
	const baristaSponsors = sponsors.filter((s) => s.tier === SponsorTier.Barista);
	const popcornSponsors = sponsors.filter((s) => s.tier === SponsorTier.Popcorn);
	const communitySponsors = sponsors.filter((s) => s.tier === SponsorTier.Community);
</script>

<div class="w-full px-8 py-28">
	<div id="sponsors" class="container mx-auto items-center text-center max-w-5xl">
		<h2 class="h2 mb-8">{$_('sponsors.title')}</h2>

		<div class="text-2xl text-left">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<p>{@html $_('sponsors.body')}</p>
		</div>

		{#if goldSponsors.length > 0}
			<h3 class="h3 mt-24 w-full text-left">{$_('sponsors.tiers.gold')}</h3>
			<div class="w-full grid md:grid-cols-3 items-center">
				{#each goldSponsors as sponsor (sponsor.name)}
					<a href={sponsor.link} target="_blank" rel="noopener" class="m-4">
						<div class="block p-4 w-full flex justify-center max-h-36">
							<img src={sponsor.imgSrc} alt={sponsor.name} />
						</div>
					</a>
				{/each}
			</div>
		{/if}

		{#if beerSponsors.length > 0}
			<h3 class="h3 mt-24 w-full text-left">{$_('sponsors.tiers.beer')}</h3>
			<div class="w-full grid md:grid-cols-3 items-center">
				{#each beerSponsors as sponsor (sponsor.name)}
					<a href={sponsor.link} target="_blank" rel="noopener" class="m-4">
						<div class="block p-4 w-full flex justify-center max-h-32">
							<img src={sponsor.imgSrc} alt={sponsor.name} />
						</div>
					</a>
				{/each}
			</div>
		{/if}

		{#if afterPartySponsors.length > 0}
			<h3 class="h3 mt-24 w-full text-left">{$_('sponsors.tiers.afterParty')}</h3>
			<div class="w-full grid md:grid-cols-3 items-center">
				{#each afterPartySponsors as sponsor (sponsor.name)}
					<a href={sponsor.link} target="_blank" rel="noopener" class="m-4">
						<div class="block p-4 w-full flex justify-center max-h-28">
							<img src={sponsor.imgSrc} alt={sponsor.name} />
						</div>
					</a>
				{/each}
			</div>
		{/if}

		{#if gelatoSponsors.length > 0}
			<h3 class="h3 mt-24 w-full text-left">{$_('sponsors.tiers.gelato')}</h3>
			<div class="w-full grid md:grid-cols-3 items-center">
				{#each gelatoSponsors as sponsor (sponsor.name)}
					<a href={sponsor.link} target="_blank" rel="noopener" class="m-4">
						<div class="block p-4 w-full flex justify-center max-h-28">
							<img src={sponsor.imgSrc} alt={sponsor.name} />
						</div>
					</a>
				{/each}
			</div>
		{/if}

		{#if baristaSponsors.length > 0}
			<h3 class="h3 mt-24 w-full text-left">{$_('sponsors.tiers.barista')}</h3>
			<div class="w-full grid md:grid-cols-3 items-center">
				{#each baristaSponsors as sponsor (sponsor.name)}
					<a href={sponsor.link} target="_blank" rel="noopener" class="m-4">
						<div class="block p-4 w-full flex justify-center max-h-28">
							<img src={sponsor.imgSrc} alt={sponsor.name} />
						</div>
					</a>
				{/each}
			</div>
		{/if}

		{#if popcornSponsors.length > 0}
			<h3 class="h3 mt-24 w-full text-left">{$_('sponsors.tiers.popcorn')}</h3>
			<div class="w-full grid md:grid-cols-4 items-center">
				{#each popcornSponsors as sponsor (sponsor.name)}
					<a href={sponsor.link} target="_blank" rel="noopener" class="m-4">
						<div class="block p-4 w-full flex justify-center max-h-36">
							<img src={sponsor.imgSrc} alt={sponsor.name} />
						</div>
					</a>
				{/each}
			</div>
		{/if}

		{#if silverSponsors.length > 0}
			<h3 class="h3 mt-24 w-full text-left">{$_('sponsors.tiers.silver')}</h3>
			<div class="w-full grid md:grid-cols-4 items-center">
				{#each silverSponsors as sponsor (sponsor.name)}
					<a href={sponsor.link} target="_blank" rel="noopener" class="m-4">
						<div class="block p-4 w-full flex justify-center max-h-30">
							<img src={sponsor.imgSrc} alt={sponsor.name} />
						</div>
					</a>
				{/each}
			</div>
		{/if}

		{#if bronzeSponsors.length > 0}
			<h3 class="h3 mt-24 w-full text-left">{$_('sponsors.tiers.bronze')}</h3>
			<div class="w-full grid md:grid-cols-6 items-center">
				{#each bronzeSponsors as sponsor (sponsor.name)}
					<a href={sponsor.link} target="_blank" rel="noopener" class="m-4">
						<div class="block p-4 w-full flex justify-center max-h-28">
							<img src={sponsor.imgSrc} alt={sponsor.name} />
						</div>
					</a>
				{/each}
			</div>
		{/if}

		{#if communitySponsors.length > 0}
			<h3 class="h3 mt-24 w-full text-left">{$_('sponsors.tiers.community')}</h3>
			<div class="w-full grid md:grid-cols-4 items-center">
				{#each communitySponsors as sponsor (sponsor.name)}
					<a href={sponsor.link} target="_blank" rel="noopener" class="m-4">
						<div class="block p-4 w-full flex justify-center max-h-30">
							<img src={sponsor.imgSrc} alt={sponsor.name} />
						</div>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</div>
