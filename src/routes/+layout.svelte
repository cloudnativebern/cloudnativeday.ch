<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import mountain from '$lib/images/mountain.svg';
	import { addMessages, init, getLocaleFromQueryString, _ } from 'svelte-i18n';
	import en from '$lib/locales/en.json';
	import de from '$lib/locales/de.json';

	addMessages('en-US', en);
	addMessages('de-CH', de);

	init({
		fallbackLocale: 'en-US',
		initialLocale: getLocaleFromQueryString('lang')
	});
	import SmallNavigation from '$lib/SmallNavigation.svelte';
	import type { NavigationItem } from '../types/NavigationItem';

	const navigationItems: NavigationItem[] = [
		{ title: $_('navigation.callForSpeakers'), href: '#cfp' },
		{ title: $_('navigation.tickets'), href: '#tickets' },
		{ title: $_('navigation.location'), href: '#location' },
		{ title: $_('navigation.speakers'), href: '#speakers' },
		{ title: $_('navigation.sponsors'), href: '#sponsors' }
	];
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/">
					<img src={mountain} alt={$_('navigation.altMountain')} />
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				{#each navigationItems as navigationItem (navigationItem.title)}
					<a class="btn variant-ghost-primary hidden md:block" href={navigationItem.href}
						>{navigationItem.title}</a
					>
				{/each}
				<div class="md:hidden">
					<SmallNavigation {navigationItems} />
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
