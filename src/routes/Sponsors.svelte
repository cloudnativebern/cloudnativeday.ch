<script lang="ts">
	import { _ } from 'svelte-i18n';
	import postfinance from '$lib/images/postfinance.svg';
	import mobiliar from '$lib/images/mobiliar.svg';

	interface Sponsor {
		name: string;
		image: string;
		url: string;
	}

	const sponsors: Sponsor[] = [
		{ name: 'Die Mobiliar', image: mobiliar, url: 'https://www.mobiliar.ch/' },
		{ name: 'Postfinance', image: postfinance, url: 'https://www.postfinance.ch/de/privat.html' }
	];
</script>

<section id="sponsors" class="section">
	<div class="content">
		<h1 class="title is-1">{$_('sponsors.title')}</h1>
		<p>{$_('sponsors.body')}</p>
		<h1 class="title is-3">{$_('sponsors.gold.title')}</h1>
		<div class="tile is-ancestor">
			{#each sponsors as sponsor (sponsor.name)}
				<div class="tile box has">
					<a href={sponsor.url} target="_blank" rel="noopener noreferrer">
						<figure class="image">
							<img src={sponsor.image} alt={sponsor.name} />
						</figure>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
