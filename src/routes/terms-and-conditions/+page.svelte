<script lang="ts">
	import { _ } from 'svelte-i18n';

	interface Section {
		keyPrefix: string;
		articles: number;
	}

	interface TermsAndConditions {
		sections: Section[];
	}

	const termsAndConditions: TermsAndConditions = {
		sections: [
			{
				keyPrefix: 'terms.scope',
				articles: 5
			},
			{
				keyPrefix: 'terms.content',
				articles: 6
			},
			{
				keyPrefix: 'terms.price',
				articles: 5
			},
			{
				keyPrefix: 'terms.shipment',
				articles: 2
			},
			{
				keyPrefix: 'terms.return',
				articles: 3
			},
			{
				keyPrefix: 'terms.photo',
				articles: 3
			},
			{
				keyPrefix: 'terms.liability',
				articles: 1
			},
			{
				keyPrefix: 'terms.provisions',
				articles: 4
			}
		]
	};
</script>

<div class="w-full px-8 py-24">
	<section class="container mx-auto max-w-5xl">
		<h1 class="h1 mb-16 text-center">{$_('terms.title')}</h1>
		{#each termsAndConditions.sections as section, sectionIndex}
			<section class="p-2">
				<div>
					<h2 class="h2 mb-4">{`${sectionIndex + 1}  ` + $_(`${section.keyPrefix}.title`)}</h2>
					<!-- ignore linter for the next line because _ cannot be used to ignore loop variable as it clashes with svelte-i18n -->
					<!-- eslint-disable-next-line -->
					{#each Array(section.articles) as _tmp, articleIndex}
						<p>
							<!-- eslint-disable-next-line svelte/no-at-html-tags -->
							{@html `${sectionIndex + 1}.${articleIndex + 1} ` +
								$_(`${section.keyPrefix}.article${articleIndex + 1}`)}
						</p>
					{/each}
				</div>
			</section>
		{/each}
	</section>
</div>
