import App from './App.svelte';
import defineElements from './defineElements';
import style from './main.module.sass';

defineElements();
const appContainer = document.createElement('div');
appContainer.classList.add(style.appContainer);

const app = new App({
  target: appContainer,
  props: {
    name: 'world',
  },
});
window.addEventListener('load', () => {
  document.getElementsByClassName('container-ceiling')[0]?.appendChild(appContainer);
  console.log('down!');
  const iframe = document.querySelector('iframe[rel="wangpan"]');
  console.dir(iframe);
});
export default app;
