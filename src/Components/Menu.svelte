<script>
  import { Accordion, TileGroup } from 'carbon-components-svelte';
  import { DataBase32 } from 'carbon-icons-svelte';
  import MenuItem from './MenuItem';

  let list = new Array(10).fill('');
</script>

<div class="menu-container">
  <Accordion>
    <MenuItem expandable>
      <span slot="title">Title</span>
      <TileGroup>
        <MenuItem>Title1</MenuItem>
      </TileGroup>
    </MenuItem>
  </Accordion>
</div>

<style lang="sass">
  .menu-container
    width: 256px
    height: 512px
    max-height: 480px
</style>
