<script lang="ts">
	import { _ } from 'svelte-i18n';

	interface Perk {
		title: string;
		text: string;
	}

	const perks: Perk[] = [
		{
			title: $_('perks.community.title'),
			text: $_('perks.community.text')
		},
		{
			title: $_('perks.gurten.title'),
			text: $_('perks.gurten.text')
		}
	];
</script>

<div class="w-full px-8 pt-28 pb-0">
	<div id="perks" class="container mx-auto flex flex-col items-center text-left max-w-5xl">
		<div class="grid md:grid-cols-2 gap-16">
			{#each perks as perks (perks.title)}
				<div class="flex flex-col">
					<h4 class="h4 mb-4">{perks.title}</h4>
					<p>{perks.text}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
