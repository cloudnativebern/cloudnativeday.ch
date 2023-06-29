<script lang="ts">
	import Fa from 'svelte-fa';
	import { AppBar, popup } from '@skeletonlabs/skeleton';
	import { _, locale } from 'svelte-i18n';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import mountain from '$lib/images/mountain.png';

	interface NavItem {
		title: string;
		href: string;
	}

	const navItems: NavItem[] = [
		{ title: $_('navigation.tickets'), href: '/#tickets' },
		{ title: $_('navigation.location'), href: '/#location' },
		{ title: $_('navigation.schedule'), href: '/schedule' },
		{ title: $_('navigation.speakers'), href: '/#speakers' },
		{ title: $_('navigation.workshops'), href: '/#workshops' },
		{ title: $_('navigation.sponsors'), href: '/#sponsors' },
		{ title: $_('navigation.team'), href: '/team' }
	];
	function toggleLang() {
		if ($locale && $locale.includes('de')) {
			locale.set('en-US');
			return;
		}
		locale.set('de-CH');
	}
</script>

<AppBar shadow="shadow-md">
	<svelte:fragment slot="lead">
		<a href="/" class="flex items-center">
			<img src={mountain} alt={$_('navigation.altMountain')} height="h-12" class="h-12 mr-2" />
		</a>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		{#each navItems as navItem (navItem.title)}
			<a class="btn variant-ghost-primary hidden lg:block" href={navItem.href}>
				{navItem.title}
			</a>
		{/each}
		<button class="btn variant-ghost-secondary hidden lg:block" on:click={toggleLang}>
			{$locale && $locale.includes('de')
				? $_('navigation.language.english')
				: $_('navigation.language.german')}
		</button>

		<div class="lg:hidden">
			<button
				class="btn hover:variant-ghost-primary"
				use:popup={{
					event: 'click',
					target: 'small-navigation',
					closeQuery: '.small-navigation-item'
				}}
			>
				<Fa icon={faBars} />
			</button>
			<div class="card p-4 w-60 shadow-xl" data-popup="small-navigation">
				<nav class="list-nav">
					<ul>
						{#each navItems as navigationItem (navigationItem.title)}
							<li class="small-navigation-item">
								<a href={navigationItem.href}>
									{navigationItem.title}
								</a>
							</li>
						{/each}
						<li class="small-navigation-item">
							<button class="btn variant-soft-primary" on:click={toggleLang}>
								{$locale && $locale.includes('de')
									? $_('navigation.language.english')
									: $_('navigation.language.german')}
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</svelte:fragment>
</AppBar>
