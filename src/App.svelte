<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import ToolButton from './Components/ToolButton.svelte';
  import Menu from './Components/Menu.svelte';
  import { contains } from './util/dom';

  let isMenuOpen = false;
  let menuEl: HTMLDivElement;

  const handleToolBtnClick = (ev: MouseEvent) => {
    isMenuOpen = !isMenuOpen;
    ev.stopPropagation();
  };
  const handleOtherElClick = (ev: MouseEvent) => {
    if (menuEl) {
      if (!contains(menuEl, ev.target as Node)) {
        isMenuOpen = false;
      }
    } else {
      console.log(ev.target);
      isMenuOpen = false;
    }
  };

  onMount(() => {
    window.addEventListener('click', handleOtherElClick);
  });
  onDestroy(() => {
    window.removeEventListener('click', handleOtherElClick);
  });
</script>

<main>
  <ToolButton on:click={handleToolBtnClick} focus={isMenuOpen} />
  {#if isMenuOpen}
    <Menu bind:menuContainerEl={menuEl} />
  {/if}
</main>

<style lang="sass">
  main
    @apply relative
</style>
