<script lang="ts">
	import type { TimeSlotRoom } from '$lib/Schedule';

	export let room: TimeSlotRoom;
	export let totalRoomNumber: number;
	export let getSessionHeight: (session: Session) => string;
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
	{#if room.session.speakers.length > 0}
		<section class="p-2 flex justify-center">
			<a href="/speakers/{room.session.speakers[0].id}" style="text-decoration: none;"
				>{room.session.speakers[0].name}</a
			>
		</section>
	{/if}
	<section class="p-2 flex justify-center">
		{extractTime(room.session.startsAt)} - {extractTime(room.session.endsAt)}
		{room.name}
	</section>
</div>
