<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';

	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { addMessages, init, getLocaleFromQueryString } from 'svelte-i18n';
	import en from '$lib/locales/en.json';
	import de from '$lib/locales/de.json';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	addMessages('en-US', en);
	addMessages('de-CH', de);

	init({
		fallbackLocale: 'en-US',
		initialLocale: getLocaleFromQueryString('lang')
	});

	const title = 'Swiss Cloud Native Day 2023';
	const description =
		'On September 20 & 21, 2023, the local Cloud Native community will organize the third edition of the Swiss Cloud Native Day on Mount Gurten, Bern, Switzerland.';
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
</svelte:head>

<AppShell>
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
