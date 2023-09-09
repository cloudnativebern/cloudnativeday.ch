<script lang="ts">
	import type { TimeSlotRoom } from '$lib/Schedule';
	import type { Session } from '$lib/Session';

	export let room: TimeSlotRoom;
	export let getSessionHeight: (session: Session) => string;
	export let getSessionWidth: (session: Session) => string;
	const startTime = room.session.startsAt || '';
	const endTime = room.session.endsAt || '';
	const extractTime = (dateString: string) =>
		new Date(dateString).toLocaleTimeString('de-CH', { hour: 'numeric', minute: 'numeric' });
</script>

<div
	class="card variant-soft-secondary {getSessionWidth(room.session)} mb-2 {getSessionHeight(
		room.session
	)}"
>
	<header class="card-header flex justify-center">
		<h4 class="h4">
			<a href="/sessions/{room.session.id}" style="text-decoration: none;">{room.session.title}</a>
		</h4>
	</header>
	<section class="flex justify-center">
		{#if startTime != '' && endTime != ''}
			{extractTime(startTime)} - {extractTime(endTime)}
		{/if}
	</section>
</div>
