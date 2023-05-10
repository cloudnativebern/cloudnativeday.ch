<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<div class="w-full px-8 py-28">
	<div id="cfp" class="container mx-auto flex flex-col items-center max-w-5xl">
		<h2 class="mb-8">{$_('callForSpeakers.title')}</h2>

		<div class="prose text-2xl">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<p>{@html $_('callForSpeakers.body')}</p>
		</div>
	</div>
</div>
