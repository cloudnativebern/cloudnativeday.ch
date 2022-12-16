<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { ga } from '@beyonk/svelte-google-analytics';
	import LanguageSwitcher from '$lib/LanguageSwitcher.svelte';

	let showNav = false;

	function toggleNav() {
		showNav = !showNav;
	}

	function handleClick(section: string) {
		toggleNav();
		ga.addEvent('navigation_click', {
			section
		});
	}
</script>

<nav class="navbar is-link is-fixed-top" aria-label="main-navigation">
	<div class="navbar-brand">
		<button
			aria-label="menu"
			aria-expanded="false"
			data-target="navbar-menu"
			class="navbar-burger burger"
			class:is-active={showNav}
			on:click={toggleNav}
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</button>
	</div>
	<div id="navbar-menu" class="navbar-menu" class:is-active={showNav}>
		<div class="navbar-end">
			<a
				href="#home"
				class="navbar-item"
				on:click={() => {
					handleClick('home');
				}}
			>
				{$_('home.nav_item')}
			</a>
			<a
				href="#venue"
				class="navbar-item"
				on:click={() => {
					handleClick('venue');
				}}
			>
				{$_('venue.nav_item')}
			</a>
			<a
				href="#sponsors"
				class="navbar-item"
				on:click={() => {
					handleClick('sponsors');
				}}
			>
				{$_('sponsors.nav_item')}
			</a>
			<a
				href="#2021"
				class="navbar-item"
				on:click={() => {
					handleClick('2021');
				}}
			>
				{$_('2021.nav_item')}
			</a>
			<a
				href="#2022"
				class="navbar-item"
				on:click={() => {
					handleClick('2022');
				}}
			>
				{$_('2022.nav_item')}
			</a>
			<LanguageSwitcher />
		</div>
	</div>
</nav>

<style>
	.navbar-item {
		padding-right: 1.5rem !important;
		padding-left: 1.5rem !important;
	}
</style>
