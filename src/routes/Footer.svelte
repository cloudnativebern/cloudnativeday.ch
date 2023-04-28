<script lang="ts">
	import Fa from 'svelte-fa';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
	import { _ } from 'svelte-i18n';
</script>

<AppBar shadow="shadow-md">
	<svelte:fragment slot="lead">
		<div class="logo-cloud grid-cols-2 gap-2 p-6 [&>.logo-item]:bg-transparent">
			<a class="logo-item" href="https://twitter.com/cloudnativebern">
				<Fa icon={faTwitter} size="2x" />
			</a>
			<a class="logo-item" href="https://www.youtube.com/@cloudnativebern/">
				<Fa icon={faYoutube} size="2x" />
			</a>
		</div>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		<section class="w-full p-4">
			<h5>{$_('footer.aboutUs.title')}</h5>
			<p><a href="/team">{$_('footer.aboutUs.team')}</a></p>
			<p><a href="/code-of-conduct">{$_('footer.aboutUs.coc')}</a></p>
			<p><a href="/imprint">{$_('footer.aboutUs.imprint')}</a></p>
			<p><a href="mailto:info@cloudnativeday.ch">{$_('footer.aboutUs.contact')}</a></p>
		</section>
	</svelte:fragment>
</AppBar>
