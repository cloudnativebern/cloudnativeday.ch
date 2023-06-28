<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<div class="bg-slate-100 w-full px-8 py-28">
	<section id="tickets" class="container mx-auto flex flex-col items-center max-w-5xl">
		<a href="https://ti.to/berner-it-rocks/swiss-cloud-native-day-2023"
			><h2 class="mb-16">{$_('tickets.title')}</h2></a
		>
		<script src="https://js.tito.io/v2/with/inline" async></script>
		<tito-widget event="berner-it-rocks/swiss-cloud-native-day-2023" />
	</section>
</div>
