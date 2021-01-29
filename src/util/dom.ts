export const contains = (el: Element, child: Node) => {
  return el === child || el.contains(child);
};
