<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<section class="p-6 space-y-6">
	<h1>{$_('coc.title')}</h1>
	<p>
		{$_('coc.intro')}
	</p>
	<h2>{$_('coc.quickVersion.title')}</h2>
	<p>
		{$_('coc.quickVersion.text')}
	</p>
	<h2>{$_('coc.lessQuickVersion.title')}</h2>
	<p>
		{@html $_('coc.lessQuickVersion.text')}
	</p>
	<p>
		<i>{@html $_('coc.source')}</i><br />
		<i>{@html $_('coc.pleaseHelp')}</i><br />
		<i>{@html $_('coc.license')}</i>
	</p>
</section>
