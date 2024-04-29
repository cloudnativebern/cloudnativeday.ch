<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<div class="w-full px-8 pt-28 pb-0">
	<div id="perks" class="container mx-auto flex flex-col items-center text-left max-w-5xl">
		<div class="grid md:grid-cols-2 gap-16">
			<div class="flex flex-col">
				<h4 class="h4 mb-4">{$_('perks.community.title')}</h4>
				<p>{$_('perks.community.text')}</p>
			</div>
			<div class="flex flex-col">
				<h4 class="h4 mb-4">{$_('perks.gurten.title')}</h4>
				<p>{$_('perks.gurten.text')}</p>
			</div>
		</div>
	</div>
</div>
