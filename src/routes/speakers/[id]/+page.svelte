<script lang="ts">
	import Fa from 'svelte-fa';
	import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
	import { faGlobe } from '@fortawesome/free-solid-svg-icons';
	import { LinkType } from '$lib/Speaker';
	import type { PageData } from './$types';

	export let data: PageData;

	const linkTypeIcon = (linkType: string) => {
		switch (linkType) {
			case LinkType.Twitter:
				return faTwitter;
			case LinkType.CompanyWebsite:
				return faGlobe;
			case LinkType.LinkedIn:
				return faLinkedin;
		}
	};
</script>

<div class="w-full px-8 py-16">
	<section class="container mx-auto max-w-5xl grid md:grid-cols-3 gap-24">
		<img class="rounded-lg" src={data.speaker.profilePicture} alt={data.speaker.fullName} />
		<div class="md:col-span-2">
			<h1 class="h1">{data.speaker.fullName}</h1>
			<h4 class="h4 mt-4">{data.speaker.tagLine}</h4>
			<p class="my-12 whitespace-pre-wrap">{data.speaker.bio}</p>
			{#if data.speaker.links}
				<ul class="list">
					{#each data.speaker.links as link (link.linkType)}
						<li>
							<Fa icon={linkTypeIcon(link.linkType)} />
							<a href={link.url} class="flex-auto">{link.title}</a>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</section>
</div>
