<script lang="ts">
  import { afterUpdate } from 'svelte';
  import { ToolIcon } from 'svelte-feather-icons';

  let buttonEl: HTMLSlButtonElement;
  export let focus: boolean = false;
  afterUpdate(() => {
    if (buttonEl) {
      buttonEl[focus ? 'setFocus' : 'removeFocus']();
    }
  });
</script>

<div class="tool-btn-container">
  <sl-button bind:this={buttonEl} on:click circle>
    <span class="tool-icon-container">
      <ToolIcon size="20" class="cursor-pointer" />
    </span>
  </sl-button>
</div>

<style lang="sass">
  .tool-btn-container 
    @apply px-1

  .tool-icon-container
    @apply flex items-center h-full

</style>
