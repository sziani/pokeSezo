<script lang="ts">
	import { onMount } from 'svelte';
	import { myPokemonStore } from '../stores/root.js';
	import Button from '../components/Button/Button.svelte';
	import Canvas from '../components/Canvas/Canvas.svelte';

	let canvas: HTMLCanvasElement;
	let pokemonClicked: string = '';
	let srcMychoice: string = '';

	async function chooseMyPokemon(pokemonName: string) {
		pokemonClicked = pokemonName;
		if (pokemonClicked) {
			const myChoice = await fetch(`${$myPokemonStore}${pokemonClicked}`);
			const myChoiceData = await myChoice.json();
			srcMychoice = myChoiceData.sprites.front_default;
			drawMyPokemon();
		}
	}

	function drawMyPokemon() {
		const context = canvas.getContext('2d');
		if (context) {
			context.clearRect(0, 0, canvas.width, canvas.height);
			const img = new Image();
			img.src = srcMychoice;
			img.onload = () => {
				context?.drawImage(img, 0, 0, 96, 96);
			};
		}
	}

	onMount(async () => {
		const resSource = await fetch(`http://127.0.0.1:3000/`);
		const resExternal = await resSource.json();
		const root = await fetch(resExternal.root).then((res) => res.json());
		myPokemonStore.set(root.pokemon);
	});
</script>

<h1 class="title-container">Pokemon</h1>

<div class="welcome-container">
	<div class="buttons-container">
		{#each ['Pikachu', 'Ditto'] as pokemon}
			<Button
				label={pokemon}
				on:click={() => {
					chooseMyPokemon(pokemon.toLowerCase());
					drawMyPokemon();
				}}
			/>
		{/each}
	</div>

	<Canvas bind:canvas />
</div>

<style lang="scss">
	@import './home.scss';
	:global(body, html) {
		height: 100%;
		width: 100%;
		margin: 0;
		background-color: #0a0a0a;
		overflow-x: hidden;
	}

	h1 {
		animation-duration: 5s;
		animation-name: slidein;
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

	.buttons-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		width: 34rem;
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
