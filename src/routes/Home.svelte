<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { onMount, SvelteComponent } from 'svelte';
	import lanyards from '$lib/images/lanyards.jpeg';
	import gurtenBottom from '$lib/images/gurten-bottom.jpeg';
	import gurtenFunicular from '$lib/images/gurten-funicular.jpeg';
	import gurtenArrivals from '$lib/images/gurten-arrivals.jpeg';
	import registrationDesk from '$lib/images/registration-desk.jpeg';
	import croissants from '$lib/images/croissants.jpeg';
	import logo from '$lib/images/logo-rgb-padding.png';

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
	<div class="columns is-centered columns-section">
		<div class="column is-half">
			<div class="container has-text-centered">
				<figure class="image logo is-inline-block">
					<img src={logo} alt="Swiss Cloud Native Day logo" />
				</figure>
				<br />
			</div>
			<h1 class="title is-1">{$_('home.title')}</h1>
			<div class="content">
				<div class="notification is-primary">
					<p class="has-text-centered is-2">
						<a href="https://sessionize.com/swisscnd2023/" target="_blank" rel="noreferrer"
							>Call for Speakers</a
						>
					</p>
				</div>
			</div>
			<p class="content">{$_('home.body')}</p>
			<div class="container">
				<svelte:component this={Carousel} particlesToShow={1} autoplay={true} dots={false}>
					{#each memories as memory (memory.name)}
						<figure class="image">
							<img src={memory.image} alt={memory.name} />
						</figure>
					{/each}
				</svelte:component>
			</div>
			<div class="content mt-5">
				<div class="columns">
					<div class="column">
						<p class="title is-5 content">{$_('home.community.title')}</p>
						<p class="content">{$_('home.community.body')}</p>
					</div>
					<div class="column">
						<p class="title is-5">{$_('home.hands.title')}</p>
						<p class="content">{$_('home.hands.body')}</p>
					</div>
					<div class="column">
						<p class="title is-5">{$_('home.gurten.title')}</p>
						<p class="content">{$_('home.gurten.body')}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
