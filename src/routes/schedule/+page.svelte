<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { PageData } from './$types';
	import ServiceSession from './ServiceSession.svelte';
	import TrackSession from './TrackSession.svelte';
	import ExternalSession from './ExternalSession.svelte';
	import type { Session } from '$lib/Session';
	import { isExternalSession } from '$lib/Session';
	import type { ScheduleDate } from '$lib/Schedule';

	export let data: PageData;
	export let schedule = data.schedule;

	const getSessionHeight = (session: Session) => {
		const endTime = session.endsAt || '';
		const startTime = session.startsAt || '';
		const durationMillis = new Date(endTime).getTime() - new Date(startTime).getTime();
		const durationMinutes = Math.round(durationMillis / 60000);
		if (isExternalSession(session)) {
			return 'h-28';
		} else if (durationMinutes <= 15) {
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

	/**
	 * Returns the appropriate md:col-span- class for a session.
	 * Tailwind needs the class names to be present in the code verbatim, in order for the build
	 * to include them in the css. Hence, we cannot use string interpolation
	 * (e.g. md:col-span-{ ( sesion.isPlenumSession ? ... : ...) }).
	 *
	 * @param session - a session
	 */
	const getSessionWidth = (session: Session) => {
		if (session.isPlenumSession) {
			return 'md:col-span-full';
		} else {
			return 'md:col-span-1';
		}
	};

	/**
	 * Returns the appropriate md:grid-cols- class for the number of tracks in a day of the schedule.
	 * Tailwind needs the class names to be present in the code verbatim, in order for the build
	 * to include them in the css. Hence, we cannot use string interpolation (e.g. md:grid-cols-{length}).
	 *
	 * @param scheduleDate - a schedule day
	 */
	const getNumberOfTracks = (scheduleDate: ScheduleDate) => {
		switch (scheduleDate.rooms.length) {
			case 1:
				return 'md:grid-cols-1';
			case 2:
				return 'md:grid-cols-2';
			case 3:
				return 'md:grid-cols-3';
			case 4:
				return 'md:grid-cols-4';
			case 5:
				return 'md:grid-cols-5';
			case 6:
				return 'md:grid-cols-6';
			default:
				return 'md:grid-cols-1';
		}
	};
</script>

<div class="bg-slate-100 w-full px-8 py-8">
	{#each schedule.dates as scheduleDate (scheduleDate.date)}
		<section class="container mx-auto items-center text-center max-w-5xl">
			<h2 class="h2 m-8">
				{$_(`schedule.weekdays.${new Date(scheduleDate.date).getDay()}`)}
			</h2>
			{#each scheduleDate.timeSlots as timeSlot (timeSlot.slotStart)}
				<div class="grid {getNumberOfTracks(scheduleDate)} gap-2">
					{#each timeSlot.rooms as room (room.id)}
						{#if isExternalSession(room.session)}
							<ExternalSession {room} {getSessionWidth} {getSessionHeight} />
						{:else if room.session.isServiceSession}
							<ServiceSession {room} {getSessionWidth} {getSessionHeight} />
						{:else}
							<TrackSession {room} {getSessionWidth} {getSessionHeight} />
						{/if}
					{/each}
				</div>
			{/each}
		</section>
	{/each}
</div>
