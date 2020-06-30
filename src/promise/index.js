const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Ooops!");
    }
  });
};

somethingWillHappen()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      setTimeout(() => {
        resolve("true!");
      }, 2000);
    } else {
      const error = new Error("Whoooops!");
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

