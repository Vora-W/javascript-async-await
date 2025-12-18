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
getJohnProfile().then((profile) => { //ชื่อของพารามิเตอร์จะตั้งอะไรก็ได้แต่ขอให้ตั้งตรงสื่อที่ใช้จะดีที่สุด
  console.log(profile);
  return getJohnOrders(); //ต้อง return ออกไปด้วยตัวต่อถึงใช้ต่อได้
})
getJohnOrders().then((order)=>{ //คำสั่งที่ 2 ถัดจากอันบนถ้าเสร็จแล้วแสดงอันนี้ต่อ
  console.log(order);
})
