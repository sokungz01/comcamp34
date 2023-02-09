import { useState } from "react";
import FileUploaderComponent from "../FileUploaderComponent";
import { UploadFile } from "@/types/RegistrationType";
const UploadFilesForm = ({ data, setData }: { data: UploadFile; setData: any }) => {
   return (
      <div className='flex justify-center mt-8'>
         <div className='bg-[#FAD9AA] bg-opacity-70 w-11/12 lg:rounded-2xl rounded-lg flex flex-col font-bai-jamjuree lg:px-16 px-6 pt-4 pb-12'>
            <div className='flex'>
               <img src='/assets/regisPage/green_postit.svg' className='lg:w-16 lg:mt-8 mt-2 w-8' />
               <p className='text-red2 lg:text-5xl text-2xl font-semibold lg:mt-8 mt-2 ml-2'>
                  เอกสารที่ต้องอัพโหลด
               </p>
            </div>
            <div className='relative flex flex-col justify-center items-center h-full'>
               <div className='font-bai-jamjuree flex flex-col mt-4'>
                  <div className='flex xl:flex-row flex-col'>
                     <div className='mr-0 xl:mr-4 w-full'>
                        <FileUploaderComponent
                           label='ภาพถ่ายอิสระของผู้สมัครที่เห็นใบหน้าชัดเจน'
                           name='photo'
                           fileType='image'
                           path=''
                        />
                     </div>
                     <div className='ml-0 mt-4 xl:mt-0 xl:ml-4 w-full h-full'>
                        <FileUploaderComponent
                           label='หนังสือขออนุญาตผู้ปกครอง'
                           name='agreement'
                           fileType='pdf'
                           downloadURL='https://drive.google.com/file/d/1xaXUaF4kqbo0HF_bcBGS-C-QUN3ezW6P/view?usp=share_link'
                           path=''
                        />
                     </div>
                  </div>
                  <div className='mt-4 xl:mt-8 w-full xl:w-3/4 2xl:w-4/5'>
                     <FileUploaderComponent
                        label='สำเนาบัตรประจำตัวประชาชนหรือสำเนาบัตรนักเรียนของผู้สมัคร'
                        name='card'
                        fileType='pdf'
                        path=''
                     />
                  </div>
                  <div className='mt-4 xl:mt-8 w-full xl:w-3/4 2xl:w-4/5'>
                     <FileUploaderComponent
                        label='เอกสารรับรองความเป็นนักเรียนหรือเอกสารรับรองผลการศึกษา (ปพ.7)'
                        name='pp7'
                        fileType='pdf'
                        path=''
                     />
                  </div>
                  <div className='mt-4 xl:mt-8 w-full xl:w-3/4 2xl:w-4/5'>
                     <FileUploaderComponent
                        label='ระเบียนแสดงผลการศึกษาของระดับชั้นมัธยมศึกษาตอนปลาย (ปพ.1) หรือหนังสือแสดงผลการเรียนเฉลี่ย'
                        name='pp1'
                        fileType='pdf'
                        path=''
                     />
                  </div>
               </div>
               <img
                  className='hidden xl:block xl:absolute z-20 xl:-right-32 2xl:-right-24 bottom-0 h-3/4'
                  src='/assets/regisPage/uploadFormBG.png'
               />
            </div>
         </div>
      </div>
   );
};
export default UploadFilesForm;
