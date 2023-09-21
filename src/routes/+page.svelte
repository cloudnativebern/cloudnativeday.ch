<script lang="ts">
	import type { PageData } from './$types';
	import Hero from './Hero.svelte';
	import Description from './Description.svelte';
	import CallForSpeakers from './CallForSpeakers.svelte';
	import Background from './Background.svelte';
	import Perks from './Perks.svelte';
	import Workshops from './Workshops.svelte';
	import Location from './Location.svelte';
	import Speakers from './Speakers.svelte';
	import Sponsors from './Sponsors.svelte';
	import { SessionGroupName } from '$lib/Session';
	import Schedule from './Schedule.svelte';

	export let data: PageData;
</script>

<Hero />

<Description />

<CallForSpeakers />

<Background />

<Perks />

<Location />

<Speakers speakers={data.speakers} />

<Schedule />

<Workshops workshops={data.sessions[SessionGroupName.Workshop]} />

<Sponsors />
