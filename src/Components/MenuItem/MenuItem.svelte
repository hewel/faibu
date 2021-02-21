<script>
  import './MenuItem.sass';

  import { AccordionItem, Tile, Icon } from 'carbon-components-svelte';
  import { Cube16 } from 'carbon-icons-svelte';
  import MenuItemIcon from './MenuItemIcon.svelte';
  import MenuItemTitle from './MenuItemTitle.svelte';

  export let expandable: boolean = false;
  export let iconRender = Cube16;
</script>

{#if expandable}
  <AccordionItem>
    <span slot="title" class="flex items-center">
      <MenuItemIcon>
        <slot name="icon">
          <Icon render={iconRender} />
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
          <Icon render={iconRender} />
        </slot>
      </MenuItemIcon>
      <MenuItemTitle>
        <slot name="title" />
      </MenuItemTitle>
      <span class="flex-1 ml-auto">
        <slot />
      </span>
    </span>
  </Tile>
{/if}

<style lang="sass">

</style>
