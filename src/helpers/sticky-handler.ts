export default function handleSticky (elem: HTMLInputElement | null) {
  if(!elem) {
    return;
  }
  const offsetTop = elem.offsetTop;
  if (window.pageYOffset > offsetTop) {
    elem.classList.add('sticky');
  } else {
    elem.classList.remove('sticky');
  }
}
