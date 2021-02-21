<script>
  import { Accordion, TileGroup, TextInput, PasswordInput, RadioTile } from 'carbon-components-svelte';
  import { DataBase16, Link16, Password16, Download16 } from 'carbon-icons-svelte';
  import MenuItem from './MenuItem';

  let list = new Array(10).fill('');
</script>

<div class="menu-container">
  <Accordion>
    <MenuItem expandable iconRender={DataBase16}>
      <span slot="title">Aria2 RPC</span>
      <MenuItem iconRender={Link16}>
        <span slot="title">地址:</span>
        <TextInput hideLabel size="sm" labelText="地址" placeholder="Aria2 服务器地址" />
      </MenuItem>
      <MenuItem iconRender={Password16}>
        <span slot="title">密钥:</span>
        <PasswordInput
          hideLabel
          size="sm"
          labelText="密钥"
          placeholder="Aria2 Token"
          tooltipAlignment="end"
          showPasswordLabel="显示密钥"
          hidePasswordLabel="隐藏密钥"
        />
      </MenuItem>
    </MenuItem>
    <MenuItem expandable iconRender={Download16}>
      <span slot="title" class="w-24">下载地址</span>
      <TileGroup>
        <RadioTile checked value="0">download1</RadioTile>
        <RadioTile value="1">download2</RadioTile>
        <RadioTile value="2">download3</RadioTile>
      </TileGroup>
    </MenuItem>
  </Accordion>
</div>

<style lang="sass">
  .menu-container
    width: 360px
    height: 512px
    max-height: 480px
</style>
