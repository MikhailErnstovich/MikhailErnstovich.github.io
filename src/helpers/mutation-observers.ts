// function

// const makeVisible: MutationCallback = (mutationList, observer: MutationObserver) => {
//   isVisible.value = true;
//   observer.disconnect();
// }
// const about = ref<Node>();
// onMounted(() => {
//   if (about.value instanceof Node) {
//     const observer = new MutationObserver(makeVisible);
//     observer.observe(about.value, { attributes: true });
//   }
// })