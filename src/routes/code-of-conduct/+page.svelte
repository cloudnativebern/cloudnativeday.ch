<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<div class="w-full px-8 py-28">
	<section class="container mx-auto max-w-5xl space-y-16">
		<div class="">
			<h1 class="mb-6">{$_('coc.title')}</h1>
			<p>{$_('coc.intro')}</p>
		</div>

		<div>
			<h2 class="mb-4">{$_('coc.quickVersion.title')}</h2>
			<p>{$_('coc.quickVersion.text')}</p>
		</div>

		<div>
			<h2 class="mb-4">{$_('coc.lessQuickVersion.title')}</h2>
			<p>{@html $_('coc.lessQuickVersion.text')}</p>
		</div>

		<p>
			<i>
				{@html $_('coc.source')}<br />
				{@html $_('coc.pleaseHelp')}<br />
				{@html $_('coc.license')}
			</i>
		</p>
	</section>
</div>
