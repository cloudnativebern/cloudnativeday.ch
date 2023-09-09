<script lang="ts">
	import type { PageData } from './$types';
	import { isExternalSession, sessionLogo } from '$lib/Session';
	import SvelteMarkdown from 'svelte-markdown';

	export let data: PageData;

	const logo = sessionLogo(data.session);
</script>

<div class="w-full px-8 py-16">
	<section class="container mx-auto max-w-5xl">
		<div class="md:col-span-2">
			{#if logo}
				<img src={logo} alt="{data.session.title} Logo" class="h-20 mb-8" />
			{/if}
			<h1 class="h1">{data.session.title}</h1>
			<h4 class="h4 mt-4">{data.session.speakers.map((s) => s.name).join(', ')}</h4>
			{#if isExternalSession(data.session)}
				<p class="my-12 whitespace-pre-wrap">
					<SvelteMarkdown source={data.session.description || ''} />
				</p>
			{:else}
				<p class="my-12 whitespace-pre-wrap">{data.session.description}</p>
			{/if}
		</div>
	</section>
</div>
