<script lang="ts">
	import Fa from 'svelte-fa';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { _ } from 'svelte-i18n';
	import { resolve } from '$app/paths';
</script>

<AppBar shadow="shadow-md">
	<svelte:fragment slot="lead">
		<div class="logo-cloud grid-cols-3 gap-2 p-6 [&>.logo-item]:bg-transparent">
			<a class="logo-item" href="https://www.linkedin.com/company/cloudnativebern">
				<Fa icon={faLinkedin} size="2x" />
			</a>
			<a class="logo-item" href="https://www.youtube.com/@cloudnativebern/">
				<Fa icon={faYoutube} size="2x" />
			</a>
		</div>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		<section class="w-full p-4">
			<h5 class="h5">{$_('footer.aboutUs.title')}</h5>
			<p><a href={resolve('/code-of-conduct')}>{$_('footer.aboutUs.coc')}</a></p>
			<p><a href={resolve('/sustainability')}>{$_('sustainability.title')}</a></p>
			<p><a href={resolve('/diversity')}>{$_('diversity.title')}</a></p>
			<p><a href={resolve('/imprint')}>{$_('footer.aboutUs.imprint')}</a></p>
			<p><a href={resolve('/terms-and-conditions')}>{$_('footer.aboutUs.terms')}</a></p>
			<p><a href="mailto:info@cloudnativeday.ch">{$_('footer.aboutUs.contact')}</a></p>
		</section>
	</svelte:fragment>
</AppBar>

<style>
	.logo-item {
		box-shadow: none;
	}
</style>
