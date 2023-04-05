<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import anaisUrlichs from '$lib/images/speakers/anais-urlichs.png';
	import margaManterola from '$lib/images/speakers/marga-manterola.jpeg';
	import naomiBrockwell from '$lib/images/speakers/naomi-brockwell.webp';

	interface Speaker {
		name: string;
		company: string;
		imgSrc: string;
	}

	const speakers: Speaker[] = [
		{
			name: 'Anais Urlichs',
			company: 'Aqua Security',
			imgSrc: anaisUrlichs
		},
		{
			name: 'Marga Manterola',
			company: 'Isovalent',
			imgSrc: margaManterola
		},
		{
			name: 'Naomi Brockwell',
			company: 'NBTV',
			imgSrc: naomiBrockwell
		}
	];
</script>

<div class="bg-slate-100 w-full px-8 py-28">
	<div id="speakers" class="container mx-auto flex flex-col items-center text-center max-w-5xl">
		<h2 class="mb-16">Speaker*innen</h2>

		<div class="grid md:grid-cols-4 gap-16">
			{#each speakers as speaker (speaker.name)}
				<div class="flex flex-col">
					<Avatar src={speaker.imgSrc} width="w-48" height="h-48" class="mb-4" />
					<h4>{speaker.name}</h4>
					<p>{speaker.company}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
