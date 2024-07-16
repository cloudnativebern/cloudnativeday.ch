<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { PUBLIC_TITO_EVENT_ID } from '$env/static/public';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<script src="https://js.tito.io/v2/with/inline" async></script>
{/if}

<div class="bg-slate-100 w-full px-8 py-28">
	<section id="tickets" class="container mx-auto flex flex-col items-center max-w-5xl">
		<a href="https://ti.to/berner-it-rocks/{PUBLIC_TITO_EVENT_ID}">
			<h2 class="h2 mb-16">{$_('tickets.title')}</h2>
		</a>
		<tito-widget event="berner-it-rocks/{PUBLIC_TITO_EVENT_ID}" />
		<p class="mt-8 text-2xl">
			{$_('tickets.discounted')}
			<a href="mailto:tickets@cloudnativeday.ch">tickets@cloudnativeday.ch</a>.
		</p>
	</section>
</div>
