<script lang="ts">
	interface Perks {
		title: string;
		text: string;
	}

	const perks: Perks[] = [
		{
			title: 'Community',
			text: 'Von Engineers für Engineers, der dritte Schweizer Cloud Native Community Day. Hinter dem Anlass steht der Non-Profit Verein «bernerit.rocks».'
		},
		{
			title: 'Get your Hands Dirty!',
			text: 'Erfahrung aus der Praxis, Know-how von Hands-On Spezialist*innen und die Möglichkeit mittels Workshops selber Hand anzulegen.'
		},
		{
			title: 'Gurten',
			text: 'Ein Tag, 250 Teilnehmende, auf dem einmaligen Berner Hausberg. Aus der Region für die Region.'
		}
	];
</script>

<div class="card p-4">
	<div id="perks" class="container mx-auto flex flex-col items-center text-left max-w-5xl">
		<div class="grid grid-cols-3 gap-16">
			{#each perks as perks (perks.title)}
				<div class="flex flex-col">
					<h4>{perks.title}</h4>
					<p>{perks.text}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
