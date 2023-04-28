<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<script src="https://js.tito.io/v2" async></script>
	<script>
		window.tito =
			window.tito ||
			function () {
				(tito.q = tito.q || []).push(arguments);
			};
		setTimeout(function () {
			tito('widget.mount', { event: 'berner-it-rocks/swiss-cloud-native-day-2023', el: '#tito' });
		}, 500);
	</script>
</svelte:head>

<div class="bg-slate-100 w-full px-8 py-28">
	<section id="tickets" class="container mx-auto flex flex-col items-center max-w-5xl">
		<h2 class="mb-16">{$_('tickets.title')}</h2>
		<div id="tito" />
	</section>
</div>
