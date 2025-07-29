<script lang="ts">
	import { resolve } from '$app/paths';
	import type { TimeSlotRoom } from '$lib/Schedule';
	import type { Session } from '$lib/Session';

	export let room: TimeSlotRoom;
	export let getSessionWidth: (session: Session) => string;
	export let getSessionHeight: (session: Session) => string;
	const startTime = room.session.startsAt || '';
	const endTime = room.session.endsAt || '';
	const extractTime = (dateString: string) =>
		new Date(dateString).toLocaleTimeString('de-CH', { hour: 'numeric', minute: 'numeric' });
</script>

<a
	href={resolve(`/sessions/${room.session.id}`)}
	class="card card-hover variant-soft-primary {getSessionWidth(
		room.session
	)} p-2 mb-2 {getSessionHeight(room.session)}"
>
	<header class="card-header flex justify-center">
		<h4 class="h4">{room.session.title}</h4>
	</header>
	{#each room.session.speakers as speaker (speaker.id)}
		<section class="flex justify-center">{speaker.name}</section>
	{/each}
	<section class="flex justify-center">
		{#if startTime != '' && endTime != ''}
			{extractTime(startTime)} - {extractTime(endTime)}
		{/if}
		{room.name}
	</section>
</a>
