<script lang="ts">
	import { _ } from 'svelte-i18n';
	import dieMobiliar from '$lib/images/sponsors/diemobiliar.svg';
	import amanox from '$lib/images/sponsors/amanox.svg';
	import avega from '$lib/images/sponsors/avega.png';
	import peakScale from '$lib/images/sponsors/peakscale.svg';
	import bespinian from '$lib/images/sponsors/bespinian.svg';
	import puzzle from '$lib/images/sponsors/puzzle.svg';
	import postfinance from '$lib/images/sponsors/postfinance.svg';
	import swisscom from '$lib/images/sponsors/swisscom.svg';
	import diePost from '$lib/images/sponsors/diepost.svg';
	import aws from '$lib/images/sponsors/aws.png';
	import adnovum from '$lib/images/sponsors/adnovum.png';
	import sbb from '$lib/images/sponsors/sbb.png';
	import ipt from '$lib/images/sponsors/ipt.svg';
	import campToCamp from '$lib/images/sponsors/camp-to-camp.png';
	import bedag from '$lib/images/sponsors/bedag.svg';
	import vshn from '$lib/images/sponsors/vshn.svg';
	import adfinis from '$lib/images/sponsors/adfinis.png';
	import acend from '$lib/images/sponsors/acend.webp';
	import prodyna from '$lib/images/sponsors/prodyna.png';
	import vmware from '$lib/images/sponsors/vmware.svg';
	import netcloud from '$lib/images/sponsors/netcloud.png';
	import scigility from '$lib/images/sponsors/scigility.svg';
	import veeam from '$lib/images/sponsors/veeam.png';
	import cncf from '$lib/images/sponsors/cncf.svg';
	import dynatrace from '$lib/images/sponsors/dynatrace.svg';
	import aquasec from '$lib/images/sponsors/aquasec.svg';

	enum SponsorTier {
		Gold,
		Silver,
		Bronze,
		SpeakerEvent,
		AfterParty,
		Workshop,
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
			name: 'Amanox',
			imgSrc: amanox,
			link: 'https://www.amanox.ch/',
			tier: SponsorTier.Bronze
		},
		{
			name: 'Avega',
			imgSrc: avega,
			link: 'https://www.avega.ch/',
			tier: SponsorTier.Bronze
		},
		{
			name: 'Aqua Security',
			imgSrc: aquasec,
			link: 'https://www.avega.ch/',
			tier: SponsorTier.Bronze
		},
		{
			name: 'bespinian',
			imgSrc: bespinian,
			link: 'https://bespinian.io/',
			tier: SponsorTier.Bronze
		},
		{
			name: 'PeakScale',
			imgSrc: peakScale,
			link: 'https://peakscale.ch/',
			tier: SponsorTier.Bronze
		},
		{
			name: 'Puzzle',
			imgSrc: puzzle,
			link: 'https://www.puzzle.ch/',
			tier: SponsorTier.AfterParty
		},
		{
			name: 'Adnovum',
			imgSrc: adnovum,
			link: 'https://www.adnovum.com/',
			tier: SponsorTier.Silver
		},
		{
			name: 'Camp to Camp',
			imgSrc: campToCamp,
			link: 'https://www.camptocamp.com/',
			tier: SponsorTier.Bronze
		},
		{
			name: 'VSHN',
			imgSrc: vshn,
			link: 'https://www.vshn.ch/',
			tier: SponsorTier.Silver
		},
		{
			name: 'dieobiliar',
			imgSrc: dieMobiliar,
			link: 'https://www.mobiliar.ch/',
			tier: SponsorTier.Gold
		},
		{
			name: 'SBB',
			imgSrc: sbb,
			link: 'https://www.sbb.ch/',
			tier: SponsorTier.Silver
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
		},
		{
			name: 'AWS Schweiz',
			imgSrc: aws,
			link: 'https://aws.amazon.com/',
			tier: SponsorTier.Silver
		},
		{
			name: 'Die Post',
			imgSrc: diePost,
			link: 'https://www.post.ch/',
			tier: SponsorTier.Silver
		},
		{
			name: 'IPT',
			imgSrc: ipt,
			link: 'https://ipt.ch/',
			tier: SponsorTier.Bronze
		},
		{
			name: 'Bedag',
			imgSrc: bedag,
			link: 'https://www.bedag.ch/',
			tier: SponsorTier.SpeakerEvent
		},
		{
			name: 'Adfinis',
			imgSrc: adfinis,
			link: 'https://adfinis.com/',
			tier: SponsorTier.Bronze
		},
		{
			name: 'acend',
			imgSrc: acend,
			link: 'https://acend.ch/',
			tier: SponsorTier.Workshop
		},
		{
			name: 'PRODYNA',
			imgSrc: prodyna,
			link: 'https://www.prodyna.com/',
			tier: SponsorTier.Silver
		},
		{
			name: 'VMware',
			imgSrc: vmware,
			link: 'https://www.vmware.com/',
			tier: SponsorTier.Silver
		},
		{
			name: 'Netcloud',
			imgSrc: netcloud,
			link: 'https://www.netcloud.ch/',
			tier: SponsorTier.Silver
		},
		{
			name: 'Veeam',
			imgSrc: veeam,
			link: 'https://www.veeam.com/',
			tier: SponsorTier.Bronze
		},
		{
			name: 'Scigility',
			imgSrc: scigility,
			link: 'https://scigility.com/',
			tier: SponsorTier.Bronze
		},
		{
			name: 'CNCF',
			imgSrc: cncf,
			link: 'https://www.cncf.io/',
			tier: SponsorTier.Community
		},
		{
			name: 'Dynatrace',
			imgSrc: dynatrace,
			link: 'https://www.dynatrace.com/',
			tier: SponsorTier.Silver
		},
		{
			name: 'Aqua Security',
			imgSrc: aquasec,
			link: 'https://www.aquasec.com/',
			tier: SponsorTier.Silver
		}
	];

	const goldSponsors = sponsors.filter((s) => s.tier === SponsorTier.Gold);
	const silverSponsors = sponsors.filter((s) => s.tier === SponsorTier.Silver);
	const bronzeSponsors = sponsors.filter((s) => s.tier === SponsorTier.Bronze);
	const speakerEventSponsors = sponsors.filter((s) => s.tier === SponsorTier.SpeakerEvent);
	const afterPartySponsors = sponsors.filter((s) => s.tier === SponsorTier.AfterParty);
	const workshopSponsors = sponsors.filter((s) => s.tier === SponsorTier.Workshop);
	const communitySponsors = sponsors.filter((s) => s.tier === SponsorTier.Community);
</script>

<div class="w-full px-8 py-28">
	<div id="sponsors" class="container mx-auto items-center text-center max-w-5xl">
		<h2 class="mb-8">{$_('sponsors.title')}</h2>

		<div class="text-2xl text-left">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<p>{@html $_('sponsors.body')}</p>
		</div>

		{#if goldSponsors.length > 0}
			<h3 class="mt-24 w-full text-left">{$_('sponsors.tiers.gold')}</h3>
			<div class="w-full grid md:grid-cols-3 items-center">
				{#each goldSponsors as sponsor (sponsor.name)}
					<a href={sponsor.link} target="_blank" rel="noopener" class="m-4">
						<div class="block p-4 w-full">
							<img src={sponsor.imgSrc} alt={sponsor.name} />
						</div>
					</a>
				{/each}
			</div>
		{/if}

		{#if speakerEventSponsors.length > 0}
			<h3 class="mt-24 w-full text-left">{$_('sponsors.tiers.speakerEvent')}</h3>
			<div class="w-full grid md:grid-cols-3 items-center">
				{#each speakerEventSponsors as sponsor (sponsor.name)}
					<a href={sponsor.link} target="_blank" rel="noopener" class="m-4">
						<div class="block p-4 w-full">
							<img src={sponsor.imgSrc} alt={sponsor.name} />
						</div>
					</a>
				{/each}
			</div>
		{/if}

		{#if afterPartySponsors.length > 0}
			<h3 class="mt-24 w-full text-left">{$_('sponsors.tiers.afterParty')}</h3>
			<div class="w-full grid md:grid-cols-3 items-center">
				{#each afterPartySponsors as sponsor (sponsor.name)}
					<a href={sponsor.link} target="_blank" rel="noopener" class="m-4">
						<div class="block p-4 w-full">
							<img src={sponsor.imgSrc} alt={sponsor.name} />
						</div>
					</a>
				{/each}
			</div>
		{/if}

		{#if workshopSponsors.length > 0}
			<h3 class="mt-24 w-full text-left">{$_('sponsors.tiers.workshop')}</h3>
			<div class="w-full grid md:grid-cols-4 items-center">
				{#each workshopSponsors as sponsor (sponsor.name)}
					<a href={sponsor.link} target="_blank" rel="noopener" class="m-4">
						<div class="block p-4 w-full">
							<img src={sponsor.imgSrc} alt={sponsor.name} />
						</div>
					</a>
				{/each}
			</div>
		{/if}

		{#if silverSponsors.length > 0}
			<h3 class="mt-24 w-full text-left">{$_('sponsors.tiers.silver')}</h3>
			<div class="w-full grid md:grid-cols-4 items-center">
				{#each silverSponsors as sponsor (sponsor.name)}
					<a href={sponsor.link} target="_blank" rel="noopener" class="m-4">
						<div class="block p-4 w-full">
							<img src={sponsor.imgSrc} alt={sponsor.name} class="max-h-24" />
						</div>
					</a>
				{/each}
			</div>
		{/if}

		{#if bronzeSponsors.length > 0}
			<h3 class="mt-24 w-full text-left">{$_('sponsors.tiers.bronze')}</h3>
			<div class="w-full grid md:grid-cols-6 items-center">
				{#each bronzeSponsors as sponsor (sponsor.name)}
					<a href={sponsor.link} target="_blank" rel="noopener" class="m-4">
						<div class="block p-4 w-full">
							<img src={sponsor.imgSrc} alt={sponsor.name} />
						</div>
					</a>
				{/each}
			</div>
		{/if}

		{#if communitySponsors.length > 0}
			<h3 class="mt-24 w-full text-left">{$_('sponsors.tiers.community')}</h3>
			<div class="w-full grid md:grid-cols-4 items-center">
				{#each communitySponsors as sponsor (sponsor.name)}
					<a href={sponsor.link} target="_blank" rel="noopener" class="m-4">
						<div class="block p-4 w-full">
							<img src={sponsor.imgSrc} alt={sponsor.name} />
						</div>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</div>
