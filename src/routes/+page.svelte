<script lang="ts">
	import { PUBLIC_CFP_END, PUBLIC_EVENT_START, PUBLIC_TITO_EVENT_ID } from '$env/static/public';
	import type { LayoutData } from './$types';
	import Hero from './Hero.svelte';
	import Description from './Description.svelte';
	import CallForSpeakers from './CallForSpeakers.svelte';
	import Background from './Background.svelte';
	import Tickets from './Tickets.svelte';
	import Perks from './Perks.svelte';
	import Location from './Location.svelte';
	import Sponsors from './Sponsors.svelte';
	import Speakers from './Speakers.svelte';
	import Schedule from './Schedule.svelte';

	export let data: LayoutData;

	const cfpEnd = new Date(PUBLIC_CFP_END);
	const start = new Date(PUBLIC_EVENT_START);
	const now = new Date();
</script>

<Hero />

<Description />

{#if now < cfpEnd}
	<CallForSpeakers />
{/if}

<Background />

{#if PUBLIC_TITO_EVENT_ID && now < start}
	<Tickets />
{/if}

<Perks />

<Location />

{#if data.speakers.length > 0 && now > cfpEnd}
	<Speakers speakers={data.speakers} />
{/if}

{#if data.schedule.dates && data.schedule.dates.length > 0 && now > cfpEnd}
	<Schedule />
{/if}

<Sponsors />
