// Exercise #4
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
// Start coding here
// ตัวแรกคิอฟังก์ชัน return promiss จะส่งค่าออกมาว่า สำเร็จไหม ล้มเหลว หรือ รอ อยู่
//ประกาศฟังก์ชันใหม่ เป็นฟังกฺ์ชัน async function ต้องมาพร้อม await เสมอ 
// ฟังก์ชันนี้ใช้เรียก promiss จากฟังก์ชันด้านบนแล้วแสดงผลด้วย log
async function showJohnProfile() {
  // ประกาศตัวแปรใหม่ที่รับค่ามาจาก resolve เพื่อรอฟังก์ชันด้านบนทำงานเสร็จ
  const respons = await getJohnProfile()
  console.log(respons)
  
}
//อย่าลืมมธนกฤต ต้อง excecute ฟังก์ชันทุกครั้ง
showJohnProfile()

// 1 getJohnProfile()
//  - คืนค่า Promise
// 2 await getJohnProfile()
//  - รอจน Promise resolve
//  - ได้ object ของ John
// 3 เก็บค่าไว้ใน response
// 4 console.log(response)
// 5 execute ฟังก์ชัน showJohnProfile