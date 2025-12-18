// Exercise #6
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
//หลักการคือสร่้างฟํงก์ชันที่รับค่า promiss จากฟังก์ชันสองอันบนมา แล้วใช้คำสั่ง try{} catch(error){} แล้ว excecute ฟังก์ชันนั้น
async function showLittleJohn() {
  try{
    //ฟังกชันแรกเริ่มก่อน
    const responsJohnProfile = await getJohnProfile()
    console.log(responsJohnProfile);
    //ฟังก์ชันที่สองตัวแปรใช้ซื้่อได้
    const responsJohnOrder = await getJohnOrders()
    console.log(responsJohnOrder);   
  }
  catch(error){
    console.log(error);
    
  }
}

//ลืมทุกรอบ excecute ด้วย*********
showLittleJohn()