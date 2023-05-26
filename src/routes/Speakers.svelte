<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { _ } from 'svelte-i18n';
	import type { Speaker } from '$lib/Speaker';

	export let speakers: Speaker[];
</script>

<div class="bg-slate-100 w-full px-8 py-28">
	<div id="speakers" class="container mx-auto items-center text-center max-w-5xl">
		<h2 class="mb-16">{$_('speakers.title')}</h2>
		<div class="grid md:grid-cols-3 lg:grid-cols-4 gap-16">
			{#each speakers as speaker (speaker.id)}
				<div class="flex flex-col items-center">
					<a href="/speakers/{speaker.id}">
						<Avatar src={speaker.profilePicture} width="w-48" height="h-48" class="mb-4" />
					</a>
					<h4>{speaker.fullName}</h4>
					<p>{speaker.tagLine}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
