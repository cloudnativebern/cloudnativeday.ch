<script lang="ts">
	import Fa from 'svelte-fa';
	import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { faGlobe, faPencil } from '@fortawesome/free-solid-svg-icons';
	import { LinkType } from '$lib/speakers/Speaker';
	import type { PageData } from './$types';

	export let data: PageData;

	const speaker = data.speaker;

	const linkTypeIcon = (linkType: LinkType) => {
		switch (linkType) {
			case LinkType.Twitter:
				return faTwitter;
			case LinkType.GitHub:
				return faGithub;
			case LinkType.Homepage:
				return faGlobe;
			case LinkType.Blog:
				return faPencil;
			case LinkType.LinkedIn:
				return faLinkedin;
		}
	};
</script>

<div class="w-full px-8 py-16">
	<section class="container mx-auto max-w-5xl grid md:grid-cols-3 gap-24">
		{#if speaker}
			<img class="rounded-lg" src={speaker.imgSrc} alt={speaker.name} />
			<div class="md:col-span-2">
				<h1>{speaker.name}</h1>
				<h4 class="mt-4">{speaker.tagline}</h4>
				<p class="my-12">{@html speaker.bio}</p>
				{#if speaker.links}
					<ul class="list">
						{#each speaker.links as link (link.text)}
							<li>
								<Fa icon={linkTypeIcon(link.type)} />
								<a href={link.url} class="flex-auto">{link.text}</a>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		{/if}
	</section>
</div>
