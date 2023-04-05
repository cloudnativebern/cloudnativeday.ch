<script lang="ts">
	import pavillon from '$lib/images/gurten-pavillon.jpg';
</script>

<div class="w-full px-8 py-28">
	<div
		id="location"
		class="container mx-auto flex justify-center items-center text-center max-w-5xl"
	>
		<div class="card">
			<header>
				<img src={pavillon} alt="Gurten Pavillon" />
			</header>
			<section class="p-8">
				<h2 class="text-lg mb-8">Location</h2>
				<div class="prose text-lg text-left">
					<p>
						Der Cloud Native Day findet auf dem Berner Hausberg, dem Gurten statt. Am einfachsten
						erreichst Du die Konferenz mit den öffentlichen Verkehrsmitteln.
					</p>

					<br />
					<ul class="list-disc list-inside">
						<li>
							Vom Berner HB, mit dem 9ni-Tram (Richtung Wabern) benötigst Du ca. 15 min zur Station
							«Wabern Gurtenbahn»
						</li>
						<li>Von dort ist es ein 5 min Spaziergang zur Gurtenbahn.</li>
						<li>Das Gurtenbahn-Ticket ist im Konferenzticket enthalten.</li>
					</ul>
				</div>
			</section>
		</div>
	</div>
</div>
