<script>
  import { AccordionItem, Tile, Icon } from 'carbon-components-svelte';
  import { Cube16, Cube24 } from 'carbon-icons-svelte';
  import MenuItemIcon from './MenuItemIcon.svelte';
  import MenuItemTitle from './MenuItemTitle.svelte';

  export let expandable: boolean = false;

  const defaultIcon = Cube16;
</script>

{#if expandable}
  <AccordionItem>
    <span slot="title" class="flex items-center">
      <MenuItemIcon>
        <slot name="icon">
          <Icon render={defaultIcon} />
        </slot>
      </MenuItemIcon>
      <MenuItemTitle>
        <slot name="title" />
      </MenuItemTitle>
    </span>
    <slot />
  </AccordionItem>
{:else}
  <Tile light>
    <span class="flex items-center">
      <MenuItemIcon>
        <slot name="icon">
          <Icon render={defaultIcon} />
        </slot>
      </MenuItemIcon>
      <MenuItemTitle>
        <slot />
      </MenuItemTitle>
    </span>
  </Tile>
{/if}

<style lang="sass">

</style>
