<script lang="ts">
	import { PUBLIC_CFP_END } from '$env/static/public';
	import { _ } from 'svelte-i18n';

	const cfpEndDate = new Date(PUBLIC_CFP_END);
	const today = new Date(new Date().toDateString());
	const isOpen = cfpEndDate >= today;
</script>

{#if isOpen}
	<div class="w-full px-8 py-28">
		<div id="cfp" class="container mx-auto flex flex-col items-center max-w-5xl">
			<h2 class="h2 mb-8">{$_('callForSpeakers.title')}</h2>

			<div class="text-2xl">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				<p>{@html $_('callForSpeakers.body')}</p>
			</div>
		</div>
	</div>
{/if}
