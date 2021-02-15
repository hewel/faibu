<script>
  import { Icon } from 'carbon-components-svelte';
  import { Cube24 } from 'carbon-icons-svelte';

  const defaultIcon = Cube24;
</script>

<span class="flex items-center justify-center">
  <slot>
    <Icon render={defaultIcon} />
  </slot>
</span>
