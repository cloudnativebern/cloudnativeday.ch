<script lang="ts">
	import Fa from 'svelte-fa';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import type { NavigationItem } from '../types/NavigationItem';
	import { ListBox, ListBoxItem, type PopupSettings } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';
	export let navigationItems: NavigationItem[];

	let comboboxValue: string;
	let popupCombobox: PopupSettings = {
		event: 'focus-click',
		target: 'combobox',
		placement: 'bottom'
	};
</script>

<div class="text-token">
	<button class="btn variant-ghost-primary" use:popup={popupCombobox}>
		<Fa icon={faBars} />
	</button>

	<div class="card p-4 w-60" data-popup="combobox">
		<!-- Listbox -->
		<ListBox rounded="rounded-none">
			{#each navigationItems as navigationItem (navigationItem.title)}
				<ListBoxItem bind:group={comboboxValue} name="navigation" value={navigationItem.href}>
					<a href={navigationItem.href}>{navigationItem.title}</a>
				</ListBoxItem>
			{/each}
		</ListBox>
	</div>
</div>
