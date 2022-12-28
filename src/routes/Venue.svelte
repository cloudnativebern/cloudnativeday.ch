<script lang="ts">
	import { _ } from 'svelte-i18n';
	import pavillon from '$lib/images/pavillon.jpeg';
</script>

<section id="venue" class="section">
	<div class="columns is-centered columns-section">
		<div class="column is-half">
			<h1 class="title is-1">{$_('venue.title')}</h1>
			<div class="columns">
				<div class="column">
					<figure class="image">
						<img src={pavillon} alt="Gurten Pavillon" />
					</figure>
				</div>
				<div class="column">
					<div class="content">
						<p>{$_('venue.body')}</p>
						<ul>
							{#each $_('venue.bullets') as bullet (bullet)}
								<li>{bullet}</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
