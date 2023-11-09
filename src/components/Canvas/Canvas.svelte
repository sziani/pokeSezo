<script lang="ts">
    import './canvas.scss';
    export let canvas: HTMLCanvasElement;

    
</script> 
<!--
FILEPATH: /home/sziani/code/s.ziani/pokeSezo/src/components/Canvas/Canvas.svelte
DESCRIPTION: This component renders a canvas element with an id of "drawIt" and a class of "canvas-container". It also binds the canvas element to the "canvas" variable using the "bind:this" directive.
-->
<svelte:options accessors={true} />
<canvas bind:this={canvas} id="drawIt" class="canvas-container">
</canvas>