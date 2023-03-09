import Swal from "sweetalert2";

export const notPassSwal = () => {
   Swal.fire({
      html: ' <div class="flex flex-col font-bai-jamjuree"> <p class="text-3xl font-medium"> ท่านไม่ผ่านการคัดเลือก </p> <p class="text-lg">พบกันใหม่ในโอกาสครั้งถัดไป</p>  </div> ',
      icon: "error",
      background: "#FDFDFD",
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: true,
      confirmButtonColor: "#FDFDFD",
      confirmButtonText: '<p class="px-4 md:px-6 lg:px-8 text-lg text-red2">กลับสู่หน้าเว็บ</p>',
      backdrop: `
   rgba(0,0,0,0.6)
   `,
   })
};
export const CustomSwal = () => {
   return Swal.fire({
      html: ' <div class="flex flex-col font-bai-jamjuree"> <p class="text-3xl font-semibold"> น้องได้ทำการสมัครไปแล้ว </p> <p class="text-sm">โปรดติดตามการประกาศผลทาง Social media✨</p>  </div> ',
      icon: "success",
      background: "#FDFDFD",
      showConfirmButton: true,
      confirmButtonColor: "#FDFDFD",
      confirmButtonText: '<p class="px-4 md:px-6 lg:px-8 text-lg text-red2">กลับสู่หน้าเว็บ</p>',
      backdrop: `
      rgba(0,0,0,0.6)
      `,
   }).then(() => {
      location.href = "/";
   });
};

export const SubmitDone = () => {
   Swal.fire({
      html: ' <div class="flex flex-col font-bai-jamjuree"> <p class="text-2xl font-bold"> บันทึกการสมัครสำเร็จ </p> <p class="text-sm">โปรดติดตามการประกาศผลทาง Social Media✨</p>  </div> ',
      icon: "success",
      background: "#FDFDFD",
      showConfirmButton: true,
      confirmButtonColor: "#FDFDFD",
      confirmButtonText: '<p class="px-4 md:px-6 lg:px-8 text-lg text-red2">กลับสู่หน้าเว็บ</p>',
      backdrop: `
      rgba(0,0,0,0.6)
      `,
   }).then(() => {
      location.href = "/";
   });
};
export const SubmitError = () => {
   return Swal.fire({
      html: '<p class="text-2xl font-bold font-bai-jamjuree"> ขออภัย โปรดลองใหม่อีกครั้ง</p>',
      icon: "error",
      background: "#FDFDFD",
      showConfirmButton: true,
      confirmButtonColor: "#B12E45",
      confirmButtonText: '<p class="px-4 md:px-6 lg:px-8 text-lg">ปิด</p>',
      backdrop: `rgba(0,0,0,0.6)`,
   });
};

export const ConfirmationDone = () => {
   Swal.fire({
      html: ' <div class="flex flex-col font-bai-jamjuree"> <p class="text-2xl font-bold"> บันทึกการใช้สิทธิ์สำเร็จ </p> </div> ',
      icon: "success",
      background: "#FDFDFD",
      showConfirmButton: true,
      confirmButtonColor: "#FDFDFD",
      confirmButtonText: '<p class="px-4 md:px-6 lg:px-8 text-lg text-red2">กลับสู่หน้าเว็บ</p>',
      backdrop: `
      rgba(0,0,0,0.6)
      `,
   }).then(() => {
      location.href = "/";
   });
};

export const FillFormSwal = () => {
   return Swal.fire({
      html: '<p class="text-2xl font-bold font-bai-jamjuree"> กรุณากรอกข้อมูลให้ครบถ้วน :)</p>',
      icon: "error",
      background: "#FDFDFD",
      showConfirmButton: true,
      confirmButtonColor: "#B12E45",
      confirmButtonText: '<p class="px-4 md:px-6 lg:px-8 text-lg">ปิด</p>',
      backdrop: `rgba(0,0,0,0.6)`,
   });
};

export const FileTooBigSwal = () => {
   return Swal.fire({
      html: '<div class="font-bai-jamjuree"><p class="text-2xl font-bold"> ขออภัย! ไฟล์มีขนาดใหญ่เกินไป</p> <p>ไฟล์ขนาดใหญ่สูงสุดไม่เกิน (10MB)</p></div>',
      icon: "error",
      background: "#FDFDFD",
      showConfirmButton: true,
      confirmButtonColor: "#B12E45",
      confirmButtonText: '<p class="px-4 md:px-6 lg:px-8 text-lg">ปิด</p>',
      backdrop: `rgba(0,0,0,0.6)`,
   });
};

export const InvalidFileTypeSwal = () => {
   return Swal.fire({
      html: '<div class="font-bai-jamjuree"><p class="text-2xl font-bold"> ขออภัย! ชนิดไฟล์ไม่ถูกต้อง</p> <p>รองรับเฉพาะไฟล์ PDF,JPG,JPEG และ PNG เท่านั้น</p></div>',
      icon: "error",
      background: "#FDFDFD",
      showConfirmButton: true,
      confirmButtonColor: "#B12E45",
      confirmButtonText: '<p class="px-4 md:px-6 lg:px-8 text-lg">ปิด</p>',
      backdrop: `rgba(0,0,0,0.6)`,
   });
};

export const InvalidImageTypeSwal = () => {
   return Swal.fire({
      html: '<div class="font-bai-jamjuree"><p class="text-2xl font-bold"> ขออภัย! ชนิดไฟล์รูปภาพไม่ถูกต้อง</p> <p>รองรับเฉพาะไฟล์รูปภาพ JPG,JPEG และ PNG เท่านั้น</p></div>',
      icon: "error",
      background: "#FDFDFD",
      showConfirmButton: true,
      confirmButtonColor: "#B12E45",
      confirmButtonText: '<p class="px-4 md:px-6 lg:px-8 text-lg">ปิด</p>',
      backdrop: `rgba(0,0,0,0.6)`,
   });
};

export const ComingSoonSwal = () => {
   return Swal.fire({
      html: '<div class="font-bai-jamjuree"><p class="text-2xl font-bold"> ขออภัย!</p> <p> ไม่อยู่ในช่วงเวลาการรับสมัคร </p></div>',
      icon: "error",
      background: "#FDFDFD",
      showConfirmButton: true,
      confirmButtonColor: "#B12E45",
      confirmButtonText: '<p class="px-4 md:px-6 lg:px-8 text-lg">ปิด</p>',
      backdrop: `rgba(0,0,0,0.6)`,
   });
};
