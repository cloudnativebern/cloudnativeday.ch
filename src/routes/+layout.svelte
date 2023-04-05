<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import mountain from '$lib/images/mountain.svg';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/">
					<img src={mountain} alt="Mountain" />
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn variant-ghost-primary" href="#cfp">Call for Speakers</a>
				<a class="btn variant-ghost-primary" href="#tickets">Tickets</a>
				<a class="btn variant-ghost-primary" href="#location">Location</a>
				<a class="btn variant-ghost-primary" href="#speakers">Speaker*innen</a>
				<a class="btn variant-ghost-primary" href="#sponsors">Sponsor*innen</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
