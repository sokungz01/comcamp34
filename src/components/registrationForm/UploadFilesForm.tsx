import { useState } from "react";
import FileUploaderComponent from "../FileUploaderComponent";

const requireFilesData = [
   {
      id: 1,
      name: "ภาพถ่ายอิสระของผู้สมัครที่เห็นใบหน้าชัดเจน",
      label: "ภาพถ่ายอิสระของผู้สมัครที่เห็นใบหน้าชัดเจน",
      fileType: "image",
      downloadURL :"",
      path: "",
   },
   {
      id: 2,
      name: "หนังสือขออนุญาตผู้ปกครอง",
      label: "หนังสือขออนุญาตผู้ปกครอง",
      fileType: "pdf",
      downloadURL :"https://google.com",
      path: "",
   },
   {
      id: 3,
      name: "สำเนาบัตรประจำตัวประชาชนหรือสำเนาบัตรนักเรียนของผู้สมัคร",
      label: "สำเนาบัตรประจำตัวประชาชนหรือสำเนาบัตรนักเรียนของผู้สมัคร",
      fileType: "pdf",
      downloadURL :"",
      path: "",
   },
   {
      id: 4,
      name: "เอกสารรับรองความเป็นนักเรียนหรือเอกสารรับรองผลการศึกษา (ปพ.7)",
      label: "เอกสารรับรองความเป็นนักเรียนหรือเอกสารรับรองผลการศึกษา (ปพ.7)",
      fileType: "pdf",
      downloadURL :"",
      path: "",
   },
   {
      id: 5,
      name: "ระเบียนแสดงผลการศึกษาของระดับชั้นมัธยมศึกษาตอนปลาย (ปพ.1) หรือหนังสือแสดงผลการเรียนเฉลี่ย",
      label: "ระเบียนแสดงผลการศึกษาของระดับชั้นมัธยมศึกษาตอนปลาย (ปพ.1) หรือหนังสือแสดงผลการเรียนเฉลี่ย",
      fileType: "pdf",
      downloadURL :"",
      path: "",
   },
];

const UploadFilesForm = () => {
   return (
      <div className='flex justify-center mt-8'>
         <div className='bg-[#FAD9AA] bg-opacity-70 w-11/12 lg:rounded-2xl rounded-lg flex flex-col font-bai-jamjuree lg:px-16 px-6 py-4'>
            <div className='flex'>
               <img src='/assets/regisPage/green_postit.svg' className='lg:w-16 lg:mt-8 mt-8 w-8' />
               <p className='text-red2 lg:text-5xl text-3xl font-semibold mt-8 ml-2'>
               เอกสารที่ต้องอัพโหลด
               </p>
            </div>
            <div className='flex flex-col justify-center items-center h-full'>
               <div className='font-bai-jamjuree flex flex-col'>
                  {requireFilesData.map(item => (
                     <div className='my-4'>
                        <FileUploaderComponent
                           name={item.name}
                           label={item.label}
                           fileType={item.fileType}
                           path={item.path}
                           downloadURL={item.downloadURL}
                        />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};
export default UploadFilesForm;
