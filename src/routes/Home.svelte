<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { onMount, SvelteComponent } from 'svelte';
	import lanyards from '$lib/images/lanyards.jpeg';
	import gurtenBottom from '$lib/images/gurten-bottom.jpeg';
	import gurtenFunicular from '$lib/images/gurten-funicular.jpeg';
	import gurtenArrivals from '$lib/images/gurten-arrivals.jpeg';
	import registrationDesk from '$lib/images/registration-desk.jpeg';
	import croissants from '$lib/images/croissants.jpeg';

	let Carousel: SvelteComponent;
	onMount(async () => {
		const module = await import('svelte-carousel');
		Carousel = module.default;
	});

	interface Memory {
		name: string;
		image: string;
	}
	const memories: Memory[] = [
		{ name: 'Lanyards', image: lanyards },
		{ name: 'Gurten bottom station', image: gurtenBottom },
		{ name: 'Gurten funicular ride', image: gurtenFunicular },
		{ name: 'Gurten arrivals', image: gurtenArrivals },
		{ name: 'Registration desk', image: registrationDesk },
		{ name: 'Croissants', image: croissants }
	];
</script>

<section id="home" class="section">
	<div class="content">
		<h1 class="title is-1">{$_('home.title')}</h1>
		<div class="container">
			<div class="notification is-primary">
				<p class="has-text-centered is-2">
					<a href="https://sessionize.com/swisscnd2023/" target="_blank" rel="noreferrer"
						>Call for Speakers</a
					>
				</p>
			</div>
		</div>
		<p>{$_('home.body')}</p>
		<p class="container">
			<svelte:component this={Carousel} particlesToShow={1} autoplay={true} dots={true}>
				{#each memories as memory (memory.name)}
					<figure class="image">
						<img src={memory.image} alt={memory.name} />
					</figure>
					<br />
				{/each}
			</svelte:component>
		</p>
		<div class="columns">
			<div class="column">
				<p class="title is-2">{$_('home.community.title')}</p>
				<p>{$_('home.community.body')}</p>
			</div>
			<div class="column">
				<p class="title is-2">{$_('home.hands.title')}</p>
				<p>{$_('home.hands.body')}</p>
			</div>
			<div class="column">
				<p class="title is-2">{$_('home.gurten.title')}</p>
				<p>{$_('home.gurten.body')}</p>
			</div>
		</div>
	</div>
</section>
