<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<div class="w-full px-8 py-28">
	<div id="schedule" class="container mx-auto items-center text-center max-w-5xl">
		<h2 class="h2 mb-8">{$_('schedule.title')}</h2>
		<p class="mb-12 text-left">{$_('schedule.description')}</p>
		<a class="btn btn-xl variant-ghost-primary" href="/schedule">
			{$_('schedule.title')}
		</a>
	</div>
</div>
