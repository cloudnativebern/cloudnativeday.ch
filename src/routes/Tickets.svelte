<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<script src="https://js.tito.io/v2"></script>
</svelte:head>

<div class="bg-slate-100 w-full px-8 py-28">
	<section id="tickets" class="container mx-auto flex flex-col items-center max-w-5xl">
		<h2 class="mb-16">{$_('tickets.title')}</h2>
		<tito-widget event="berner-it-rocks/swiss-cloud-native-day-2023" />
	</section>
</div>
