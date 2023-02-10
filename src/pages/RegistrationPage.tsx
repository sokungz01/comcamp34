import { Link, useNavigate } from "react-router-dom";
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
import {
   Education,
   Interest,
   ParentData,
   Personal,
   UploadFile,
   QuestionPage1,
   QuestionPage2,
} from "@/types/RegistrationType";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
export const RegistrationPage = () => {
   const navigate = useNavigate();
   const [page, setPage] = useState<number>(0);
   const [dataPersonalInfoForm, setPersonalInfoForm] = useState<Personal>({
      prefix: "",
      firstname: "",
      middlename: "",
      surname: "",
      nickname: "",
      date: "",
      month: "",
      birth_year: "",
      birth_date: "",
      mobile: "",
      email: "",
      province: "",
      shirt_size: "",
      medicine: "",
      allergic_medicine: "",
      underlying: "",
      travelby: "",
      allergic_food: "",
      special: "",
      notebook: false,
   });
   const [dataEducationForm, setEducationForm] = useState<Education>({
      school_name: "",
      school_province: "",
      student_level: "",
      study_plan: "",
      gpax: "",
      university_1: "",
      faculty_1: "",
      major_1: "",
      university_2: "",
      faculty_2: "",
      major_2: "",
      university_3: "",
      faculty_3: "",
      major_3: "",
   });
   const [dataInterestForm, setInterestForm] = useState<Interest>({
      comcamp_previous: false,
      major_interest: "",
      reason_major_interest: "",
      camp1: "",
      camp1_by: "",
      camp2: "",
      camp2_by: "",
      no_previous_camp: false,
   });
   const [dataParentDataForm, setParentDataForm] = useState<ParentData>({
      parent_prefix: "",
      parent_firstname: "",
      parent_middlename: "",
      parent_surname: "",
      parent_relation: "",
      parent_mobile: "",
      parent_email: "",
      same_parent: false,
      emergency_prefix: "",
      emergency_firstname: "",
      emergency_middlename: "",
      emergency_surname: "",
      emergency_relation: "",
      emergency_mobile: "",
      emergency_email: "",
   });
   const [dataUploadFilesForm, setUploadFilesForm] = useState<UploadFile>({
      image_URL: "",
      agreement_URL: "",
      card_URL: "",
      pp7_URL: "",
      pp1_URL: "",
   });
   const [dataQuestionFormpage1, setQuestionFormpage1] = useState<QuestionPage1>({
      q1: "",
      q2: "",
      q3: "",
   });
   const [dataQuestionFormpage2, setQuestionFormpage2] = useState<QuestionPage2>({
      q4: "",
      q5: "",
      q6: "",
   });

   const ConfirmationPopup = () => {
      if (
         dataQuestionFormpage2.q4.length &&
         dataQuestionFormpage2.q5.length &&
         dataQuestionFormpage2.q6.length
      ) {
         console.log(
            dataPersonalInfoForm,
            dataEducationForm,
            dataInterestForm,
            dataParentDataForm,
            dataQuestionFormpage1,
            dataQuestionFormpage2,
         );
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
         }).then(result => {
            if (result.isConfirmed) {
               Swal.fire({
                  html: ' <div class="flex flex-col font-bai-jamjuree"> <p class="text-3xl font-semibold"> บันทึกการสมัครสำเร็จ </p> <p class="text-sm">โปรดติดตามการประกาศผลทาง Social media</p>  </div> ',
                  icon: "success",
                  background: "#FDFDFD",
                  showConfirmButton: true,
                  confirmButtonColor: "#FDFDFD",
                  confirmButtonText:
                     '<p class="px-4 md:px-6 lg:px-8 text-lg text-red2">กลับสู่หน้าเว็บ</p>',
                  backdrop: `
                  rgba(0,0,0,0.6)
                  `,
               }).then(() => {
                  location.href = "/";
               });
            }
         });
      } else {
         Swal.fire({
            html: '<p class="text-3xl font-semibold font-bai-jamjuree"> กรุณากรอกข้อมูลให้ครบถ้วน :)</p>',
            icon: "error",
            background: "#FDFDFD",
            showConfirmButton: true,
            confirmButtonColor: "#B12E45",
            confirmButtonText: '<p class="px-4 md:px-6 lg:px-8 text-lg">โอเค</p>',
            backdrop: `
            rgba(0,0,0,0.6)
            `,
         });
      }
   };
   const handleLogout = () => {
      signOut(auth)
         .then(() => {
            navigate("/");
         })
         .catch(error => {
            // An error happened.
         });
   };
   function isNumber(str: any) {
      if (str.trim() === "") {
         return false;
      }
      if (str.includes("E") === true || str.includes("e") === true) {
         return false;
      }
      return !isNaN(str);
   }
   function checkEmail(str: any) {
      const RegEx =
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (RegEx.test(str)) {
         return true;
      }
      return false;
   }
   function checkGrade(str: any) {
      const Reg = /^(\d{1}\.){1}\d{2}$/;
      if (Reg.test(str) && parseFloat(str) <= 4) {
         return true;
      }
      return false;
   }
   const nextPage = () => {
      if (page === 1) {
         if (
            dataPersonalInfoForm.prefix.length &&
            dataPersonalInfoForm.firstname.length &&
            dataPersonalInfoForm.surname.length &&
            dataPersonalInfoForm.nickname.length &&
            dataPersonalInfoForm.date.length &&
            dataPersonalInfoForm.month.length &&
            dataPersonalInfoForm.birth_year.length &&
            dataPersonalInfoForm.mobile.length == 10 &&
            dataPersonalInfoForm.mobile[0] == "0" &&
            isNumber(dataPersonalInfoForm.mobile) &&
            dataPersonalInfoForm.email.length &&
            checkEmail(dataPersonalInfoForm.email) &&
            dataPersonalInfoForm.province.length &&
            dataPersonalInfoForm.shirt_size.length &&
            dataPersonalInfoForm.medicine.length &&
            dataPersonalInfoForm.allergic_medicine.length &&
            dataPersonalInfoForm.underlying.length &&
            dataPersonalInfoForm.travelby.length &&
            dataPersonalInfoForm.allergic_food.length
         ) {
            setPage(page + 1);
         } else {
            Swal.fire({
               html: '<p class="text-3xl font-semibold font-bai-jamjuree"> กรุณากรอกข้อมูลให้ครบถ้วน :)</p>',
               icon: "error",
               background: "#FDFDFD",
               showConfirmButton: true,
               confirmButtonColor: "#B12E45",
               confirmButtonText: '<p class="px-4 md:px-6 lg:px-8 text-lg">โอเค</p>',
               backdrop: `
                  rgba(0,0,0,0.6)
                  `,
            });
         }
      } else if (page === 2) {
         if (
            dataEducationForm.school_name.length &&
            dataEducationForm.school_province.length &&
            dataEducationForm.student_level.length &&
            dataEducationForm.study_plan.length &&
            dataEducationForm.gpax.length &&
            checkGrade(dataEducationForm.gpax)
         ) {
            setPage(page + 1);
         } else {
            Swal.fire({
               html: '<p class="text-3xl font-semibold font-bai-jamjuree"> กรุณากรอกข้อมูลให้ครบถ้วน :)</p>',
               icon: "error",
               background: "#FDFDFD",
               showConfirmButton: true,
               confirmButtonColor: "#B12E45",
               confirmButtonText: '<p class="px-4 md:px-6 lg:px-8 text-lg">โอเค</p>',
               backdrop: `
                  rgba(0,0,0,0.6)
                  `,
            });
         }
      } else if (page === 3) {
         if (
            dataInterestForm.major_interest.length &&
            dataInterestForm.reason_major_interest.length &&
            (dataInterestForm.no_previous_camp === true ||
               (dataInterestForm.camp1.length && dataInterestForm.camp1_by.length))
         ) {
            setPage(page + 1);
         } else {
            Swal.fire({
               html: '<p class="text-3xl font-semibold font-bai-jamjuree"> กรุณากรอกข้อมูลให้ครบถ้วน :)</p>',
               icon: "error",
               background: "#FDFDFD",
               showConfirmButton: true,
               confirmButtonColor: "#B12E45",
               confirmButtonText: '<p class="px-4 md:px-6 lg:px-8 text-lg">โอเค</p>',
               backdrop: `
               rgba(0,0,0,0.6)
               `,
            });
         }
      } else if (page === 4) {
         if (
            dataParentDataForm.parent_prefix.length &&
            dataParentDataForm.parent_firstname.length &&
            dataParentDataForm.parent_surname.length &&
            dataParentDataForm.parent_relation.length &&
            dataParentDataForm.parent_mobile.length == 10 &&
            dataParentDataForm.parent_mobile[0] === "0" &&
            isNumber(dataParentDataForm.parent_mobile) &&
            dataParentDataForm.emergency_prefix.length &&
            dataParentDataForm.emergency_firstname.length &&
            dataParentDataForm.emergency_surname.length &&
            dataParentDataForm.emergency_relation.length &&
            dataParentDataForm.emergency_mobile.length == 10 &&
            dataParentDataForm.emergency_mobile[0] === "0" &&
            isNumber(dataParentDataForm.emergency_mobile)
         ) {
            setPage(page + 1);
         } else {
            Swal.fire({
               html: '<p class="text-3xl font-semibold font-bai-jamjuree"> กรุณากรอกข้อมูลให้ครบถ้วน :)</p>',
               icon: "error",
               background: "#FDFDFD",
               showConfirmButton: true,
               confirmButtonColor: "#B12E45",
               confirmButtonText: '<p class="px-4 md:px-6 lg:px-8 text-lg">โอเค</p>',
               backdrop: `
               rgba(0,0,0,0.6)
               `,
            });
         }
      } else if (page === 5) {
         setPage(page + 1);
      } else if (page === 6) {
         if (
            dataQuestionFormpage1.q1.length &&
            dataQuestionFormpage1.q2.length &&
            dataQuestionFormpage1.q3.length
         ) {
            setPage(page + 1);
         } else {
            Swal.fire({
               html: '<p class="text-3xl font-semibold font-bai-jamjuree"> กรุณากรอกข้อมูลให้ครบถ้วน :)</p>',
               icon: "error",
               background: "#FDFDFD",
               showConfirmButton: true,
               confirmButtonColor: "#B12E45",
               confirmButtonText: '<p class="px-4 md:px-6 lg:px-8 text-lg">โอเค</p>',
               backdrop: `
               rgba(0,0,0,0.6)
               `,
            });
         }
      }
   };

   const prevPage = () => {
      if (page > 1) {
         setPage(page - 1);
      }
   };
   return (
      <>
         <div className='bg-base-white h-full min-h-screen overflow-hidden font-bai-jamjuree relative '>
            <div className='flex justify-between py-4 '>
               <div className='flex flex-row justify-between items-center ml-4 lg:ml-8'>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     fill='none'
                     viewBox='0 0 24 24'
                     strokeWidth='1.5'
                     stroke='currentColor'
                     className='lg:w-12 lg:h-12 w-6 h-6'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                     />
                  </svg>
                  <p className='text-base-black font-semibold lg:mt-2.5lg:ml-4 ml-2 text-sm lg:text-base'>
                     administrator@comcamp.io
                  </p>
               </div>

               <button
                  className='bg-red2 text-white lg:py-2 lg:px-8 py-1.5 px-4 rounded-lg font-semibold text-sm lg:text-base mr-2 lg:mr-12'
                  onClick={handleLogout}
               >
                  Log out
               </button>
            </div>
            <div className='flex justify-center'>
               <p className='xl:text-7xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-teko tracking-widest text-red2 font-semibold mt-3 mb-3'>
                  {page === 1 || page <= 1 ? "Registration" : "Registration"}
               </p>
            </div>
            <div>
               <div className='w-full h-full relative z-10'>
                  {page === 0 || page <= 0 ? <ConsentForm setPage={setPage} /> : null}
                  {page === 1 ? (
                     <PersonalInfoForm data={dataPersonalInfoForm} setData={setPersonalInfoForm} />
                  ) : null}
                  {page === 2 ? (
                     <EducationForm data={dataEducationForm} setData={setEducationForm} />
                  ) : null}
                  {page === 3 ? (
                     <InterestForm data={dataInterestForm} setData={setInterestForm} />
                     ) : null}
                  {page === 4 ? (
                     <ParentDataForm data={dataParentDataForm} setData={setParentDataForm} />
                  ) : null}
                  {page === 5 ? (
                     <UploadFilesForm data={dataUploadFilesForm} setData={setUploadFilesForm} />
                  ) : null}
                  {page === 6 ? (
                     <QuestionFormpage1
                        data={dataQuestionFormpage1}
                        setData={setQuestionFormpage1}
                     />
                  ) : null}
                  {page === 7 ? (
                     <QuestionFormpage2
                        data={dataQuestionFormpage2}
                        setData={setQuestionFormpage2}
                     />
                  ) : null}
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
               <img src='/assets/regisPage/bgLogin.png' className='w-full opacity-50' />
            </div>
         </div>
      </>
   );
};
