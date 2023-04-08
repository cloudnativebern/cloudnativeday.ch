<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
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
				<a class="btn variant-ghost-primary" href="#cfp">{$_('navigation.callForSpeakers')}</a>
				<a class="btn variant-ghost-primary" href="#tickets">{$_('navigation.tickets')}</a>
				<a class="btn variant-ghost-primary" href="#location">{$_('navigation.location')}</a>
				<a class="btn variant-ghost-primary" href="#speakers">{$_('navigation.speakers')}</a>
				<a class="btn variant-ghost-primary" href="#sponsors">{$_('navigation.sponsors')}</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
