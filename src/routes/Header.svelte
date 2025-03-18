<script lang="ts">
	import { beforeUpdate } from 'svelte';
	import Fa from 'svelte-fa';
	import { AppBar, popup } from '@skeletonlabs/skeleton';
	import { _, locale } from 'svelte-i18n';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import { PUBLIC_CFP_END, PUBLIC_EVENT_START, PUBLIC_TITO_EVENT_ID } from '$env/static/public';
	import { base } from '$app/paths';
	import mountain from '$lib/images/mountain.png';
	import type { Speaker } from '$lib/Speaker';
	import type { Schedule } from '$lib/Schedule';

	export let speakers: Speaker[];
	export let schedule: Schedule;

	const cfpEnd = new Date(PUBLIC_CFP_END);
	const start = new Date(PUBLIC_EVENT_START);
	const now = new Date();

	interface NavItem {
		title: string;
		href: string;
	}

	let navItems: NavItem[] = [];

	beforeUpdate(() => {
		if (now < cfpEnd) {
			navItems.push({ title: $_('navigation.callForSpeakers'), href: `${base}/#cfp` });
		}
		if (PUBLIC_TITO_EVENT_ID && now < start) {
			navItems.push({ title: $_('navigation.tickets'), href: `${base}/#tickets` });
		}
		navItems.push({ title: $_('navigation.location'), href: `${base}/#location` });
		if (speakers.length > 0 && now > cfpEnd) {
			navItems.push({ title: $_('navigation.speakers'), href: `${base}/#speakers` });
		}
		if (schedule.dates && schedule.dates.length > 0 && now > cfpEnd) {
			navItems.push({ title: $_('navigation.schedule'), href: `${base}/schedule` });
		}
		navItems.push({ title: $_('navigation.sponsors'), href: `${base}/#sponsors` });
		navItems.push({ title: $_('sustainability.title'), href: `${base}/sustainability` });
		navItems.push({ title: $_('navigation.team'), href: `${base}/team` });
		navItems.push({ title: $_('navigation.impressions'), href: `${base}/impressions` });
	});

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
		<a href="{base}/" class="flex items-center">
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
								<a href={navigationItem.href}>{navigationItem.title}</a>
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
