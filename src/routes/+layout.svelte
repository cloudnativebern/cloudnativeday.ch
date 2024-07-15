<script lang="ts">
	import '../app.postcss';
	import { AppShell, Modal, storePopup, initializeStores } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { PUBLIC_EVENT_START } from '$env/static/public';
	import { dev } from '$app/environment';
	import { addMessages, init, getLocaleFromQueryString } from 'svelte-i18n';
	import en from '$lib/locales/en.json';
	import de from '$lib/locales/de.json';
	import type { LayoutData } from './$types';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	export let data: LayoutData;

	const start = new Date(PUBLIC_EVENT_START);

	initializeStores();

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	addMessages('en-US', en);
	addMessages('de-CH', de);

	init({
		fallbackLocale: 'en-US',
		initialLocale: getLocaleFromQueryString('lang')
	});

	const title = `Swiss Cloud Native Day ${start.getFullYear()}`;
	const description = `On ${start.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}, our local Cloud Native community will organize the third edition of the Swiss Cloud Native Day on Mount Gurten, Bern, Switzerland.`;
	const domain = 'cloudnativeday.ch';
	const url = 'https://' + domain;
	const imageUrl = url + '/logo.webp';
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageUrl} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={domain} />
	<meta property="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />

	<!-- Analytics -->
	{#if !dev}
		<script defer data-domain="cloudnativeday.ch" src="https://plausible.io/js/script.js"></script>
	{/if}
</svelte:head>

<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
	<svelte:fragment slot="pageHeader">
		<Header speakers={data.speakers} schedule={data.schedule} />
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>

<Modal />
