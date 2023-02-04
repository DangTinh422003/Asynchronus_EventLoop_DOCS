setTimeout(() => {
  console.log("First");
  setTimeout(() => {
    console.log("Second");
    setTimeout(() => {
      console.log("Third");
      setTimeout(() => {
        console.log("Fourth");
        setTimeout(() => {
          console.log("Fifth");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
// callback hell
