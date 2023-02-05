import { Link } from "react-router-dom";
import { useState } from "react";
import LeftArrow from "/assets/svg/LeftArrow.svg";
import RightArrow from "/assets/svg/RightArrow.svg";
import { ConsentForm } from "@/components/registrationForm/ConsentForm";
import { PersonalInfoForm } from "@/components/registrationForm/PersonalInfoForm";
import UploadFilesForm from "@/components/registrationForm/UploadFilesForm";
import { EducationForm } from "@/components/registrationForm/EducationForm";
import { InterestForm } from "@/components/registrationForm/InterestForm";
import { ParentDataForm } from "@/components/registrationForm/ParentDataForm";
import { QuestionFormpage1 } from "@/components/registrationForm/QuestionFormpage1";
import { QuestionFormpage2 } from "@/components/registrationForm/QuestionFormpage2";
import Swal from "sweetalert2";
export const RegistrationPage = () => {
   const ConfirmationPopup = () => {
      Swal.fire({
         html: ' <div class="flex flex-col font-bai-jamjuree"> <p class="text-3xl font-semibold"> ยืนยันการส่งหรือไม่ </p> <p class="text-sm">หากส่งแล้วจะไม่สามารถแก้ไข้ข้อมูลได้อีก</p> </div> ',
         icon: "warning",
         iconColor: "#000",
         background: "#FDFDFD",
         showConfirmButton: true,
         showCancelButton: true,
         confirmButtonColor: "#B12E45",
         confirmButtonText: '<p class="px-4 md:px-6 lg:px-8 text-lg">ยืนยัน</p>',
         cancelButtonColor: "#eee",
         cancelButtonText: '<p class="text-base-black px-4 md:px-6 lg:px-8 text-lg">ยกเลิก</p>',
         customClass: {
            actions: "flex flex-row w-full justify-center ",
            confirmButton: "mr-2 sm:mr-8",
            cancelButton: "ml-2 sm:ml-8",
         },
         backdrop: `
         rgba(0,0,0,0.6)
         `,
      });
   };
   const [page, setPage] = useState<number>(0);
   const nextPage = () => {
      if (page >= 1 && page < 7) setPage(page + 1);
   };

   const prevPage = () => {
      if (page > 1) {
         setPage(page - 1);
      }
   };
   return (
      <>
         <div className='bg-base-white h-full min-h-screen overflow-hidden font-bai-jamjuree relative'>
            <div className='flex justify-between py-4'>
               <div className='flex flex-row ml-8'>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     fill='none'
                     viewBox='0 0 24 24'
                     strokeWidth='1.5'
                     stroke='currentColor'
                     className='w-12 h-12'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                     />
                  </svg>
                  <p className='text-base-black font-semibold mt-2.5 ml-4'>
                     administrator@comcamp.io
                  </p>
               </div>
               <Link to='/'>
                  <button className='bg-red2 text-white py-2 px-8 rounded-lg font-semibold mr-12'>
                     Log out
                  </button>
               </Link>
            </div>
            <div className='flex justify-center'>
               <p className='xl:text-7xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-teko tracking-widest text-red2 font-semibold mt-3 mb-3'>
                  {page === 1 || page <= 1 ? "Registration" : "Registration"}
               </p>
            </div>
            <div>
               <div className='w-full h-full relative z-10'>
                  {page === 0 || page <= 0 ? <ConsentForm setPage={setPage} /> : null}
                  {page === 1 ? <PersonalInfoForm /> : null}
                  {page === 2 ? <EducationForm /> : null}
                  {page === 3 ? <InterestForm /> : null}
                  {page === 4 ? <ParentDataForm /> : null}
                  {page === 5 ? <UploadFilesForm /> : null}
                  {page === 6 ? <QuestionFormpage1 /> : null}
                  {page === 7 ? <QuestionFormpage2 /> : null}
               </div>
            </div>
            <div className='flex flex-col justify-center pt-4 relative z-10 my-8 pb-16'>
               {page === 7 ? (
                  <div className='flex flex-row justify-center mb-8'>
                     <button
                        onClick={ConfirmationPopup}
                        className='text-2xl lg:text-3xl text-white font-teko bg-red2 lg:px-12 lg:py-1.5 px-8 py-1 rounded-lg '
                     >
                        Submit
                     </button>
                  </div>
               ) : null}
               {page > 0 ? (
                  <div className='flex flex-row justify-center items-center gap-y-4 bottom-5 z-10'>
                     {page === 1 ? null : (
                        <button onClick={prevPage}>
                           <img src={LeftArrow} className='w-6 lg:w-9' />
                        </button>
                     )}
                     <h1 className='text-red2 text-lg lg:text-2xl px-6'>{page} of 7</h1>
                     {page === 7 ? null : (
                        <button onClick={nextPage}>
                           <img src={RightArrow} className='w-6 lg:w-9' />
                        </button>
                     )}
                  </div>
               ) : null}
            </div>

            <div className='absolute z-0 bottom-0 w-full'>
               <img src='/assets/regisPage/building.svg' className='w-full' />
            </div>
         </div>
      </>
   );
};
