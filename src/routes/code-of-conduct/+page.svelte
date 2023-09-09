<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<div class="w-full px-8 py-28">
	<section class="container mx-auto max-w-5xl space-y-16">
		<div class="">
			<h1 class="h1 mb-6">{$_('coc.title')}</h1>
			<p>{$_('coc.intro')}</p>
		</div>

		<div>
			<h2 class="h2 mb-4">{$_('coc.quickVersion.title')}</h2>
			<p>{$_('coc.quickVersion.text')}</p>
		</div>

		<div>
			<h2 class="h2 mb-4">{$_('coc.lessQuickVersion.title')}</h2>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<p>{@html $_('coc.lessQuickVersion.text')}</p>
		</div>

		<p>
			<i>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html $_('coc.source')}<br />
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html $_('coc.pleaseHelp')}<br />
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html $_('coc.license')}
			</i>
		</p>
	</section>
</div>
