<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="w-full px-8 py-16">
	<section class="container mx-auto max-w-5xl grid md:grid-cols-3 gap-24">
		<div class="md:col-span-2">
			<h1>{data.session.title}</h1>
			<h4 class="mt-4">{data.session.speakers.map((s) => s.name).join(', ')}</h4>
			<p class="my-12 whitespace-pre-wrap">{data.session.description}</p>
		</div>
	</section>
</div>
