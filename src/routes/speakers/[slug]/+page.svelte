<script lang="ts">
	import { LinkType } from '$lib/speakers/Speaker';
	import Fa from 'svelte-fa';
	import type { PageData } from './$types';
	import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { faGlobe, faPencil } from '@fortawesome/free-solid-svg-icons';

	export let data: PageData;

	const linkTypeIcon = (linkType: LinkType) => {
		switch (linkType) {
			case LinkType.TWITTER:
				return faTwitter;
			case LinkType.GITHUB:
				return faGithub;
			case LinkType.HOMEPAGE:
				return faGlobe;
			case LinkType.BLOG:
				return faPencil;
			case LinkType.LINKEDIN:
				return faLinkedin;
		}
	};

	$: speaker = data.speaker;
</script>

<div class="w-full text-token grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4">
	{#if speaker}
		<div class="p-4">
			<img class="rounded-lg" src={speaker.imgSrc} alt={speaker.name} />
		</div>
		<div class="md:col-span-2 lg:col-span-2">
			<section class="p-4">
				<h1 class="p-4">{speaker.name}</h1>
				<h4 class="p-4">{speaker.tagline}</h4>
				<p class="p-4">{speaker.bio}</p>
				{#if speaker.links}
					<ul class="list p-4">
						{#each speaker.links as link (link.text)}
							<li>
								<Fa icon={linkTypeIcon(link.type)} />
								<a href={link.url} class="flex-auto">{link.text}</a>
							</li>
						{/each}
					</ul>
				{/if}
			</section>
		</div>
	{/if}
</div>
