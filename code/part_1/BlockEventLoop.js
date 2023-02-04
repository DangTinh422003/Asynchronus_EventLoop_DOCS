window.onscroll(() => {
  for (let i = 0; i < 10000000000; i++) {
    console.log(i);
  }
});

window.onscroll(
  setTimeout(() => {
    for (let i = 0; i < 10000000000; i++) {
      console.log(i);
    }
  }, 1000)
);
