<script lang="ts">
	import type { PageData } from './$types';
	import Hero from './Hero.svelte';
	import Description from './Description.svelte';
	import CallForSpeakers from './CallForSpeakers.svelte';
	import Background from './Background.svelte';
	import Tickets from './Tickets.svelte';
	import Perks from './Perks.svelte';
	import Location from './Location.svelte';
	import Speakers from './Speakers.svelte';
	import Sponsors from './Sponsors.svelte';

	export let data: PageData;
</script>

<Hero />

<Description />

<CallForSpeakers />

<Background />

<Tickets />

<Perks />

<Location />

<Speakers speakers={data.speakers} />

<Sponsors />
