import { SlButton, SlDialog } from '@shoelace-style/shoelace';
import '@shoelace-style/shoelace/dist/shoelace/shoelace.css';

type ElementMap = Parameters<typeof customElements.define>;

export default function define() {
  const elementMaps: ElementMap[] = [
    ['sl-button', SlButton],
    ['sl-dialog', SlDialog],
  ];

  elementMaps.forEach(([name, element]) => {
    customElements.define(name, element);
  });
}
