<script lang="ts">
	import { json } from 'svelte-i18n';
	import type { PageData } from './$types';
	import ServiceSession from './ServiceSession.svelte';
	import TrackSession from './TrackSession.svelte';
	import type { Session } from '$lib/Session';

	export let data: PageData;
	export let schedule = data.schedule;

	const getSessionHeight = (session: Session) => {
		const endTime = session.endsAt || '';
		const startTime = session.startsAt || '';
		const durationMillis = new Date(endTime).getTime() - new Date(startTime).getTime();
		const durationMinutes = Math.round(durationMillis / 60000);
		if (durationMinutes <= 15) {
			return 'h-20';
		} else if (15 < durationMinutes && durationMinutes <= 30) {
			return 'h-28';
		} else if (30 < durationMinutes && durationMinutes <= 45) {
			return 'h-44';
		} else if (45 < durationMinutes && durationMinutes <= 240) {
			return 'h-60';
		} else {
			return 'h-80';
		}
	};

	const getDateString = (
		json: (id: string, locale?: string | undefined) => unknown,
		index: number
	) => {
		let dateStrings = json('schedule.dates') as string[];
		return dateStrings[index];
	};
</script>

<div class="bg-slate-100 w-full px-8 py-8">
	{#each schedule.dates as scheduleDate, index (scheduleDate.date)}
		<section class="container mx-auto items-center text-center max-w-5xl">
			<h2 class="m-8">{getDateString($json, index)}</h2>
			{#each scheduleDate.timeSlots as timeSlot (timeSlot.slotStart)}
				<div class="grid md:grid-cols-{scheduleDate.rooms.length} gap-2">
					{#each timeSlot.rooms as room (room.id)}
						{#if room.session.isServiceSession}
							<ServiceSession
								{room}
								totalRoomNumber={scheduleDate.rooms.length}
								{getSessionHeight}
							/>
						{:else}
							<TrackSession {room} totalRoomNumber={scheduleDate.rooms.length} {getSessionHeight} />
						{/if}
					{/each}
				</div>
			{/each}
		</section>
	{/each}
</div>
