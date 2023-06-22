<script lang="ts">
	import { PUBLIC_SCHEDULE_PUBLISHED } from '$env/static/public';
	import { _ } from 'svelte-i18n';

	const isPublished = PUBLIC_SCHEDULE_PUBLISHED;
</script>

{#if isPublished}
	<div class="w-full px-8 py-28">
		<div id="schedule" class="container mx-auto flex flex-col items-center max-w-5xl">
			<h2 class="mb-8">{$_('schedule.title')}</h2>
			<p class="mb-16 text-left">{$_('schedule.description')}</p>
			<a class="btn variant-ghost-primary" href="/schedule">{$_('schedule.sessionizeButton')}</a>
		</div>
	</div>
{/if}
