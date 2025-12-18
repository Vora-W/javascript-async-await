// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here
//ฟังก์ชันด้านบน ส่งเป็น reject มาต้องใช้คำสั่ง catch เพื่อรับค่ามาและใน catch ต้องมี พารามิเตอฺร์ error ด้วย
async function showJohnProfile() {
  try{
    const respons = await getJohnProfile()
    console.log(respons);
    
  }
  catch(error){
    console.log(error);
    
  }
}

showJohnProfile()


// ถ้าจะทำ catch(error) ด้วยต้องทำ try ที่มี reslove รับค่าข้างบนด้วย