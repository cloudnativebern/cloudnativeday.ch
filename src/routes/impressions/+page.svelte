<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { _ } from 'svelte-i18n';
	import Youtube from './Youtube.svelte';
	const photos = Object.values(
		import.meta.glob(`$lib/images/impressions/*.{jpg,jpeg}`, {
			eager: true,
			as: 'url'
		})
	);

	const modalStore = getModalStore();

	interface Event {
		year: string;
		videoID: string;
		photos?: string[];
	}

	let events: Event[] = [
		{ year: '2024', videoID: 'VicQ4E3oq8o' },
		{ year: '2023', videoID: 'fMY0-WQXnL0' },
		{ year: '2022', videoID: 'YingM9M5yps' },
		{ year: '2021', videoID: '_S2ly9dglU4' }
	];

	events = events.map((e) => ({ ...e, photos: photos.filter((p) => p.includes(e.year)) }));

	function openPhoto(photo: string) {
		modalStore.trigger({
			type: 'alert',
			image: photo,
			buttonTextCancel: $_('modal.close')
		});
	}
</script>

<div class="bg-slate-100 w-full px-8 py-28">
	<div class="container mx-auto flex flex-col items-center text-center max-w-5xl">
		<h1 class="h1 mb-8">{$_('impressions.title')}</h1>
		<p class="mb-4">{$_('impressions.body')}</p>
		<p class="mb-8">
			{$_('impressions.recordings')}
			<a class="anchor" href="https://www.youtube.com/channel/UCkBYwOSHo1AbRBdQz1W5YQg">
				YouTube Channel
			</a>.
		</p>

		{#each events as event (event.year)}
			<section class="mt-24 w-full">
				<h2 class="h2 mb-8">Swiss Cloud Native Day {event.year}</h2>
				<Youtube id={event.videoID} />
				{#if event.photos}
					<div class="grid sm:grid-cols-2 md:grid-cols-3 mt-8 gap-8">
						{#each event.photos as photo, i}
							<button
								class="card card-hover"
								style="box-shadow:none;background-color:transparent"
								on:click={() => {
									openPhoto(photo);
								}}
							>
								<img src={photo} alt="{event.year} Photo {i + 1}" />
							</button>
						{/each}
					</div>
				{/if}
			</section>
		{/each}
	</div>
</div>
