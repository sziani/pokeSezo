<script lang="ts">
	import Button from '../components/Button/Button.svelte';

	let start: string = 'Start Now';
</script>

<h1 class="title-container">Pokemon</h1>

<div class="welcome-container">
	<a href="/game">
		<Button size="large" label={start} />
	</a>
</div>

<style lang="scss">
	@import './home.scss';

	h1 {
		animation-duration: 5s;
		animation-name: slidein;
		font-family: 'Helvetica Neue', Helvetica, sans-serif;
		color: $primary-color;
		font-size: $h1-font-size;
		text-shadow: -1px -1px 2px $secondary-color, -1px -1px 2px $secondary-color,
			-1px -1px 2px $secondary-color, -1px -1px 2px $secondary-color;
	}
	.welcome-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		height: 86%;
		width: 100%;
		margin: 0;
	}

	.title-container {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 0;
		margin-bottom: 0;
	}

	@keyframes slidein {
		from {
			margin-left: 40%;
			width: 100%;
		}

		75% {
			margin-left: 20%;
			width: 100%;
		}

		to {
			margin-left: 0%;
			width: 100%;
		}
	}
</style>
