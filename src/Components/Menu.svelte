<script lang="ts">
  import { fade } from 'svelte/transition';

  export let menuContainerEl: HTMLDivElement;
</script>

<div class="menu-container" bind:this={menuContainerEl} transition:fade={{ duration: 200 }}>
  <span>menu</span>
</div>

<style lang="sass">
  .menu-container
    width: 246px
    top: 56px
    @apply absolute right-1 bg-white px-4 py-2 rounded-sm border-solid border border-gray-300 border-opacity-60 shadow-sm
</style>
