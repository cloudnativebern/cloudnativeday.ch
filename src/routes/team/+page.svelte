<script lang="ts">
	import { _ } from 'svelte-i18n';
	import alexander from '$lib/images/team/alexander.jpg';
	import johann from '$lib/images/team/johann.jpg';
	import philipp from '$lib/images/team/philipp.jpg';
	import lena from '$lib/images/team/lena.jpg';
	import mathias from '$lib/images/team/mathias.jpg';
	import mathis from '$lib/images/team/mathis.jpg';
	import marc from '$lib/images/team/marc.jpg';
	import luana from '$lib/images/team/luana.jpg';
	import { Avatar } from '@skeletonlabs/skeleton';

	interface TeamMember {
		name: string;
		tagline: string;
		imgSrc: string;
		bio: string;
	}

	const team: TeamMember[] = [
		{
			name: $_('team.alexander.name'),
			tagline: $_('team.alexander.tagline'),
			imgSrc: alexander,
			bio: $_('team.alexander.bio')
		},
		{
			name: $_('team.johann.name'),
			tagline: $_('team.johann.tagline'),
			imgSrc: johann,
			bio: $_('team.johann.bio')
		},
		{
			name: $_('team.philipp.name'),
			tagline: $_('team.philipp.tagline'),
			imgSrc: philipp,
			bio: $_('team.philipp.bio')
		},
		{
			name: $_('team.lena.name'),
			tagline: $_('team.lena.tagline'),
			imgSrc: lena,
			bio: $_('team.lena.bio')
		},
		{
			name: $_('team.mathias.name'),
			tagline: $_('team.mathias.tagline'),
			imgSrc: mathias,
			bio: $_('team.mathias.bio')
		},
		{
			name: $_('team.mathis.name'),
			tagline: $_('team.mathis.tagline'),
			imgSrc: mathis,
			bio: $_('team.mathis.bio')
		},
		{
			name: $_('team.marc.name'),
			tagline: $_('team.marc.tagline'),
			imgSrc: marc,
			bio: $_('team.marc.bio')
		},
		{
			name: $_('team.luana.name'),
			tagline: $_('team.luana.tagline'),
			imgSrc: luana,
			bio: $_('team.luana.bio')
		}
	];
</script>

<div class="w-full px-8 py-24">
	<section class="container mx-auto max-w-5xl">
		<h1 class="h1 mb-16 text-center">{$_('team.title')}</h1>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each team as member (member.name)}
				<div class="card bg-transparent variant-soft">
					<header class="card-header">
						<Avatar src={member.imgSrc} width="w-48" height="h-48" class="mb-4" />
					</header>

					<section class="p-2">
						<h3 class="h3">{member.name}</h3>
						<h5 class="h5 mb-4">{member.tagline}</h5>
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						{@html member.bio}
					</section>
				</div>
			{/each}
		</div>
	</section>
</div>
