<script lang="ts">
	import { onMount } from 'svelte';
	import { myPokemonStore } from '../../stores/root.js';
	import Canvas from '../../components/Canvas/Canvas.svelte';
	import { pokemonChosen } from '../../stores/pokemonChosen.js';

	let canvas: HTMLCanvasElement;

	function drawMyPokemon() {
		const context = canvas.getContext('2d');
		if (context) {
			context.clearRect(0, 0, canvas.width, canvas.height);
			const img = new Image();
			img.src = $pokemonChosen ? $pokemonChosen : '';
			img.onload = () => {
				context?.drawImage(img, canvas.width / 2 - 50, canvas.height / 6, 96, 96);
			};
		}
	}

	onMount(async () => {
		const resSource = await fetch(`http://127.0.0.1:3000/`);
		const resExternal = await resSource.json();
		const root = await fetch(resExternal.root).then((res) => res.json());
		console.log("start", root);
		myPokemonStore.set(root.pokemon);
		drawMyPokemon();
	});
</script>

<div class="welcome-container">
	<Canvas bind:canvas />
</div>

<style lang="scss">
	@import '../home.scss';
	@import './start.scss';
</style>
