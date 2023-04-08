<script lang="ts">
	import pavillon from '$lib/images/gurten-pavillon.jpg';
	import { _ } from 'svelte-i18n';
</script>

<div class="w-full px-8 py-28">
	<div
		id="location"
		class="container mx-auto flex justify-center items-center text-center max-w-5xl"
	>
		<div class="card">
			<header>
				<img src={pavillon} alt={$_('location.altPavillon')} />
			</header>
			<section class="p-8">
				<h2 class="text-lg mb-8">{$_('location.title')}</h2>
				<div class="prose text-lg text-left">
					<p>
						{$_('location.body')}
					</p>

					<br />
					<ul class="list-disc list-inside">
						<li>{$_('location.directions.tram')}</li>
						<li>{$_('location.directions.walk')}</li>
						<li>{$_('location.directions.ticket')}</li>
					</ul>
				</div>
			</section>
		</div>
	</div>
</div>
