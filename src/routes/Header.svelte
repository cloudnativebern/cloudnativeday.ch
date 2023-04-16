<script lang="ts">
	import Fa from 'svelte-fa';
	import { AppBar, popup } from '@skeletonlabs/skeleton';
	import { _ } from 'svelte-i18n';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import mountain from '$lib/images/mountain.png';

	interface NavigationItem {
		title: string;
		href: string;
	}

	const navigationItems: NavigationItem[] = [
		{ title: $_('navigation.callForSpeakers'), href: '/#cfp' },
		{ title: $_('navigation.tickets'), href: '/#tickets' },
		{ title: $_('navigation.location'), href: '/#location' },
		{ title: $_('navigation.speakers'), href: '/#speakers' },
		{ title: $_('navigation.sponsors'), href: '/#sponsors' }
	];
</script>

<AppBar shadow="shadow-md">
	<svelte:fragment slot="lead">
		<a href="/" class="flex items-center">
			<img src={mountain} alt={$_('navigation.altMountain')} height="h-12" class="h-12 mr-2" />
		</a>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		{#each navigationItems as navigationItem (navigationItem.title)}
			<a class="btn variant-ghost-primary hidden lg:block" href={navigationItem.href}>
				{navigationItem.title}
			</a>
		{/each}

		<div class="lg:hidden">
			<button
				class="btn hover:variant-ghost-primary"
				use:popup={{
					event: 'focus-click',
					target: 'small-navigation',
					closeQuery: '.small-navigation-item'
				}}
			>
				<Fa icon={faBars} />
			</button>
			<div class="card p-4 w-60 shadow-xl" data-popup="small-navigation">
				<nav class="list-nav">
					<ul>
						{#each navigationItems as navigationItem (navigationItem.title)}
							<li class="small-navigation-item">
								<a href={navigationItem.href}>
									{navigationItem.title}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			</div>
		</div>
	</svelte:fragment>
</AppBar>
