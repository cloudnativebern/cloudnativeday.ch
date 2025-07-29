<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Fa from 'svelte-fa';
	import { faArrowLeft, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
	import SvelteMarkdown from 'svelte-markdown';
	import { resolve } from '$app/paths';
	import { isExternalSession, sessionLogo, formatTime } from '$lib/Session';
	import type { PageData } from './$types';

	export let data: PageData;

	const logo = sessionLogo(data.session);
</script>

<div class="w-full px-8 py-16">
	<section class="container mx-auto max-w-5xl">
		<div class="md:col-span-2">
			<a
				href={resolve('/schedule')}
				class="mb-12 flex gap-2 items-center text-blue-700 hover:text-indigo-700"
				><Fa icon={faArrowLeft} /> {$_('session.back')}</a
			>

			{#if logo}
				<img src={logo} alt="{data.session.title} Logo" class="h-20 mb-8" />
			{/if}

			<h1 class="h1">{data.session.title}</h1>
			{#each data.session.speakers as speaker (speaker.id)}
				<h4 class="h4 mt-4">
					<a href={resolve(`/speakers/${speaker.id}`)} class="text-blue-700 hover:text-indigo-700"
						>{speaker.name}</a
					>
				</h4>
			{/each}

			{#if data.session.startsAt && data.session.endsAt}
				<p class="mt-8 mb-2 flex gap-2 items-center">
					<Fa icon={faClock} />
					{formatTime(data.session.startsAt)} - {formatTime(data.session.endsAt)}
				</p>
			{/if}

			{#if data.session.room}
				<p class="flex gap-3 items-center" style="padding-left:2px">
					<Fa icon={faLocationDot} />
					{data.session.room}
				</p>
			{/if}

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
