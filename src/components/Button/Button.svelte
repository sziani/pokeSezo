<script lang="ts">
  import './button.scss';

  /**
   * Is this the principal call to action on the page?
   */
  export let primary = false;

  /**
   * What background color to use
   */
  export let backgroundColor: string | undefined = undefined;
  /**
   * How large should the button be?
   */
  export let size: 'small' | 'medium' | 'large' = 'medium';
  /**
   * Button contents
   */
  export let label: string = '';

  $: mode = primary ? 'round-button--primary' : 'round-button--secondary';

  $: style = backgroundColor ? `background-color: ${backgroundColor}` : '';

</script>

<!--
  FILEPATH: /home/sziani/code/s.ziani/pokeSezo/src/components/Button/Button.svelte
  USAGE: This component renders a button with a label and a customizable size and mode.
  PROPS:
    - size: string - the size of the button (e.g. 'small', 'medium', 'large')
    - mode: string - the mode of the button (e.g. 'primary', 'secondary', 'danger')
    - style: object - the style object to apply to the button
    - label: string - the label to display on the button
    - on:click - the function to call when the button is clicked
-->
<button
  type="button"
  class={['round-button', `round-button--${size}`, mode].join(' ')}
  {style}
  on:click
>
  {label}
</button>
