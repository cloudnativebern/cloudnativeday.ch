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
	const isBreak = (session: Session) =>
		session.title === 'Coffee Break' || session.title === 'Short Break';
</script>

<div
	class="card variant-soft-secondary md:col-span-{room.session.isPlenumSession
		? totalRoomNumber
		: 1} mb-2 {getSessionHeight(room.session)}"
>
	<header class="card-header flex justify-center">
		<h4>{room.session.title}</h4>
	</header>
	<section class="flex justify-center">
		{#if startTime != '' && endTime != ''}
			{extractTime(startTime)} - {extractTime(endTime)}
		{/if}
		{#if !isBreak(room.session)}
			{room.name}
		{/if}
	</section>
</div>
