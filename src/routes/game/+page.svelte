<script lang="ts">
	import { getContext, onMount, setContext } from 'svelte';
	import { myPokemonStore } from '../../stores/root.js';
	import { pokemonChosen } from '../../stores/pokemonChosen.js';
	
	let srcMyPikachu: string = '';
	let srcMyDitto: string = '';
	let arrOfPokemon: string[] = [];
	
	$: arrOfPokemon = ($myPokemonStore as any)?.pikachu && ($myPokemonStore as any)?.ditto ? [($myPokemonStore as any).pikachu, ($myPokemonStore as any).ditto] : [];

	onMount(async () => {
		const resSource = await fetch(`http://127.0.0.1:3000/`);
		const resExternal = await resSource.json();
		const root = await fetch(resExternal.root).then((res) => res.json());
		myPokemonStore.set(root.pokemon);
		
		const myPikachu = await fetch(`${$myPokemonStore}pikachu`);
		const myPikachuData = await myPikachu.json();
		srcMyPikachu = myPikachuData.sprites.front_default;
		
		const myDitto = await fetch(`${$myPokemonStore}ditto`);
		const myDittoData = await myDitto.json();
		srcMyDitto = myDittoData.sprites.front_default;
		
		arrOfPokemon = [srcMyPikachu, srcMyDitto];
	});
</script>

<div class="title-h2-container">
	<h2>Choose your player 😎</h2>
</div>

<div class="welcome-container">
	{#each arrOfPokemon as pokemon}
	<a href="/start" on:click={e => {
        const target = e.target;
        if (target instanceof HTMLImageElement) {
            pokemonChosen.set(target.src || "");
        }
    }}>
			<img class="img-circle" src={pokemon} alt="myChoices"/>
		</a>
		{/each}
</div>

<style lang="scss">
	@import '../home.scss';
	@import './game.scss';
</style>
