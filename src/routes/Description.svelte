<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<div class="bg-slate-100 w-full px-8 py-28">
	<div class="container mx-auto flex flex-col items-center text-center max-w-5xl">
		<h2 class="mb-8">{$_('description.title')}</h2>

		<div class="text-2xl text-left">
			<p>{$_('description.body')}</p>
		</div>
	</div>
</div>
