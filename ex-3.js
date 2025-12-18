//Exercise #3
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// Start coding here
const displayJohnProfile = (data) => {
  console.log(data);
};

const displayJohnOrders = (data) => {
  console.log(data);
};

const displayError = (error) => {
  console.log(error);
};

getJohnProfile()
  .then(displayJohnProfile)
  .then(getJohnOrders)
  .then(displayJohnOrders)
  .catch(displayError);
