<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<div class="w-full px-8 py-24">
	<section class="container mx-auto max-w-5xl">
		<h1 class="h1 mb-16 text-center">{$_('diversity.title')}</h1>

		<p class="mb-8">{$_('diversity.intro')}</p>

		<h2 class="h2 mb-2">{$_('diversity.speakers.title')}</h2>
		<p class="mb-8">{$_('diversity.speakers.body')}</p>

		<h2 class="h2 mb-2">{$_('diversity.topics.title')}</h2>
		<p class="mb-8">{$_('diversity.topics.body')}</p>

		<h2 class="h2 mb-2">{$_('diversity.environment.title')}</h2>
		<p class="mb-8">{$_('diversity.environment.body')}</p>

		<h2 class="h2 mb-2">{$_('diversity.marketing.title')}</h2>
		<p class="mb-8">{$_('diversity.marketing.body')}</p>

		<h2 class="h2 mb-2">{$_('diversity.continuousImprovement.title')}</h2>
		<p class="mb-8">{$_('diversity.continuousImprovement.body')}</p>

		<p>{$_('diversity.verdict')}</p>
	</section>
</div>
