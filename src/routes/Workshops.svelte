<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { Session } from '$lib/Session';
	import { sessionLogo } from '$lib/Session';

	export let workshops: Session[];
</script>

<div class="bg-slate-100 w-full px-8 py-28">
	<div id="workshops" class="container mx-auto items-center text-center max-w-5xl">
		<h2 class="mb-16">{$_('workshops.title')}</h2>
		<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-16">
			{#each workshops as workshop (workshop.id)}
				<a href="/sessions/{workshop.id}" style="text-decoration:none;">
					<div class="card card-hover h-full p-2">
						<header class="card-header"><h3>{workshop.title}</h3></header>
						<section class="p-6 flex justify-center">
							<img src={sessionLogo(workshop)} alt="{workshop.title} Logo" class="h-36" />
						</section>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
