declare module 'svelte-feather-icons' {
  export * from 'svelte-feather-icons/src/index';
}

const styles: { [className: string]: string };
declare module '*.css' {
  export default styles;
}
declare module '*.sass' {
  export default styles;
}
declare module '*.scss' {
  export default styles;
}
