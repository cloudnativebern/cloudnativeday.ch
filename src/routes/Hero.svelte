<script lang="ts">
	import logo from '$lib/images/logo.svg';
</script>

<div class="container h-screen mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center">
		<figure>
			<div class="img-bg" />
			<img src={logo} alt="Logo" />
		</figure>
		<h1 class="font-bold">21. September | Bern, Switzerland</h1>
	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite, glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/60;
		}
		33% {
			@apply bg-secondary-400/60;
		}
		66% {
			@apply bg-tertiary-400/60;
		}
		100% {
			@apply bg-primary-400/60;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
