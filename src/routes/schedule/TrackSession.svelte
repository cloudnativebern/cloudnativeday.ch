<script lang="ts">
	import type { TimeSlotRoom } from '$lib/Schedule';
	import type { Session } from '$lib/Session';

	export let room: TimeSlotRoom;
	export let totalRoomNumber: number;
	export let getSessionHeight: (session: Session) => string;
	const startTime = room.session.startsAt || '';
	const endTime = room.session.endsAt || '';
	const extractTime = (dateString: string) =>
		new Date(dateString).toLocaleTimeString('de-CH', { hour: 'numeric', minute: 'numeric' });
</script>

<div
	class="card variant-soft-primary md:col-span-{room.session.isPlenumSession
		? totalRoomNumber
		: 1} p-2 mb-2 {getSessionHeight(room.session)}"
>
	<header class="card-header flex justify-center">
		<h4>
			<a href="/sessions/{room.session.id}" style="text-decoration: none;">{room.session.title}</a>
		</h4>
	</header>
	{#each room.session.speakers as speaker (speaker.id)}
		<section class="flex justify-center">
			<a href="/speakers/{speaker.id}" style="text-decoration: none;">{speaker.name}</a>
		</section>
	{/each}
	<section class="flex justify-center">
		{#if startTime != '' && endTime != ''}
			{extractTime(startTime)} - {extractTime(endTime)}
		{/if}
		{room.name}
	</section>
</div>
