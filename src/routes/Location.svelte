<script lang="ts">
	import pavillon from '$lib/images/gurten-pavillon.jpg';
</script>

<div class="w-full p-28">
	<div class="container mx-auto flex justify-center items-center text-center max-w-5xl">
		<div class="card p-4">
			<img src={pavillon} alt="Gurten Pavillon" />
			<br />
			<h2 class="font-bold">Location</h2>
			<br />
			<div class="prose text-2xl text-left mb-16">
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
		</div>
	</div>
</div>
