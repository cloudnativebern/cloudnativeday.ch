<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { PUBLIC_TICKET_SALES_START, PUBLIC_TITO_EVENT_ID } from '$env/static/public';

	const ticketSalesStart = new Date(PUBLIC_TICKET_SALES_START);
	const now = new Date();

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
			<h2 class="h2 mb-8">
				{#if now < ticketSalesStart}
					{$_('tickets.titleInterest')}
				{:else}
					{$_('tickets.titleSales')}
				{/if}
			</h2>
		</a>
		{#if now < ticketSalesStart}
			<p class="mb-8 text-2xl">{$_('tickets.bodyInterest')}</p>
			<tito-register-interest event="berner-it-rocks/{PUBLIC_TITO_EVENT_ID}"
			></tito-register-interest>
		{:else}
			<div class="mt-8">
				<tito-widget event="berner-it-rocks/{PUBLIC_TITO_EVENT_ID}"></tito-widget>
			</div>
		{/if}
		<p class="mt-8 text-2xl">
			{$_('tickets.discounted')}
			<a href="mailto:tickets@cloudnativeday.ch">tickets@cloudnativeday.ch</a>.
		</p>
	</section>
</div>
