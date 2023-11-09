<script lang="ts">
	import { onMount } from 'svelte';
	let photos = [];
	onMount(async () => {
		const res = await fetch(`http://127.0.0.1:3000/about`);
		photos = await res.json();
		console.log('res3', photos);
	});
</script>

<h1>About</h1>
