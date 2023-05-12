<script lang="ts">
	import { _ } from 'svelte-i18n';
	import alex from '$lib/images/team/alex.jpeg';
	import johann from '$lib/images/team/johann.jpeg';
	import philipp from '$lib/images/team/philipp.jpeg';
	import lena from '$lib/images/team/lena.jpeg';
	import mathias from '$lib/images/team/mathias.jpeg';
	import mathis from '$lib/images/team/mathis.jpeg';
	import { Avatar } from '@skeletonlabs/skeleton';

	interface TeamMember {
		name: string;
		tagline: string;
		imgSrc: string;
		bio: string;
	}

	const team: TeamMember[] = [
		{
			name: $_('team.alex.name'),
			tagline: $_('team.alex.tagline'),
			imgSrc: alex,
			bio: $_('team.alex.bio')
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
		}
	];
</script>

<div class="w-full px-8 py-24">
	<section class="container mx-auto max-w-5xl">
		<h1 class="mb-16 text-center">{$_('team.title')}</h1>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each team as member (member.name)}
				<div class="card bg-transparent variant-soft">
					<header class="card-header">
						<Avatar src={member.imgSrc} width="w-48" height="h-48" class="mb-4" />
					</header>

					<section class="p-2">
						<h3>{member.name}</h3>
						<h5 class="mb-4">{member.tagline}</h5>
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						{@html member.bio}
					</section>
				</div>
			{/each}
		</div>
	</section>
</div>
