<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<div class="w-full px-8 py-24">
	<section class="container mx-auto max-w-5xl">
		<h1 class="h1 mb-16 text-center">{$_('sustainability.title')}</h1>

		<p class="mb-8">{$_('sustainability.intro')}</p>

		<h2 class="h2 mb-2">{$_('sustainability.venue.title')}</h2>
		<p class="mb-8">{$_('sustainability.venue.body')}</p>

		<h2 class="h2 mb-2">{$_('sustainability.waste.title')}</h2>
		<p class="mb-8">{$_('sustainability.waste.body')}</p>

		<h2 class="h2 mb-2">{$_('sustainability.food.title')}</h2>
		<p class="mb-8">{$_('sustainability.food.body')}</p>

		<h2 class="h2 mb-2">{$_('sustainability.energy.title')}</h2>
		<p class="mb-8">{$_('sustainability.energy.body')}</p>

		<h2 class="h2 mb-2">{$_('sustainability.promotion.title')}</h2>
		<p class="mb-8">{$_('sustainability.promotion.body')}</p>

		<h2 class="h2 mb-2">{$_('sustainability.offsetting.title')}</h2>
		<p class="mb-8">{$_('sustainability.offsetting.body')}</p>

		<h2 class="h2 mb-2">{$_('sustainability.continuousImprovement.title')}</h2>
		<p class="mb-8">{$_('sustainability.continuousImprovement.body')}</p>

		<p>{$_('sustainability.verdict')}</p>
	</section>
</div>
