import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LeftArrow from "/assets/svg/LeftArrow.svg";
import RightArrow from "/assets/svg/RightArrow.svg";
import { FillFormSwal, ConfirmationSubmitDone, SubmitDone, SubmitError} from "@/lib/CustomSwal";
import {
   ConfirmForm,
   ExaminationInfo,
   ExaminationPage1,
   ExaminationPage2,
   ExaminationPage3,
   ExaminationPage4,
   ExaminationPage5,
} from "@/components/ConfirmmationForm";
import {
   DateForm,
   Confirmation,
   Page1,
   Page2,
   Page3,
   Page4,
   Page5,
} from "@/types/ConfirmationType";

const ResultPage = () => {
   const navigate = useNavigate();
   const [page, setPage] = useState<number>(1);
   const [confirm, setConfirm] = useState<boolean>(true);
   const [pass, setPass] = useState<boolean>(false);

   const ConfirmationPopup = async () => {
      if (
         dataExaminationPage5.q5_1?.length &&
         dataExaminationPage5.q5_2?.length &&
         dataExaminationPage5.q5_3?.length
      ) {
         const token = sessionStorage.getItem("token") as string;
         Swal.fire({
            html: ' <div class="flex flex-col font-bai-jamjuree"> <p class="text-2xl font-bold"> ยืนยันการส่งหรือไม่ </p> <p class="text-sm">หากส่งแล้วจะไม่สามารถแก้ไขข้อมูลได้อีก</p> </div> ',
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
         });
      } else {
         FillFormSwal();
      }
   };

   const waiveSwal = () => {
      const token = sessionStorage.getItem("token") as string;
      Swal.fire({
         html: ' <div class="flex flex-col font-bai-jamjuree"> <p class="text-2xl font-bold"> คุณยืนยันที่จะ<span class="text-red1">สละสิทธิ์</span><br />การเข้าค่ายคอมแคมป์ใช่หรือไม่ </p> <p class="text-sm">หากดำเนินการแล้วจะไม่สามารถแก้ไขข้อมูลได้อีก</p> </div> ',
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
         console.log(dataConfirmation.isConfirm);
      });
   };
   const handleLogout = () => {
      navigate("/");
   };

   const [dateData, setDateData] = useState<DateForm>({
      date: "",
      month: "",
      year: "",
   });

   const [dataConfirmation, setdataConfirmation] = useState<Confirmation>({
      isConfirm: "",
      shirt_size: "",
      describeTravel: "",
      describeBackhome: "",
      transaction_Name: "",
      transaction_URL: "",
      transaction_date: "",
      transaction_hours: "",
      transaction_minutes: "",
   });

   const [dataExaminationPage1, setDataExaminationPage1] = useState<Page1>({
      q1_1: "",
      reason_q1_1: "",
      q1_2: "",
      reason_q1_2: "",
      q1_3: "",
      reason_q1_3: "",
   });

   const [dataExaminationPage2, setDataExaminationPage2] = useState<Page2>({
      q2_1: "",
      q2_2: "",
      q2_3: "",
   });

   const [dataExaminationPage3, setDataExaminationPage3] = useState<Page3>({
      q3_1: "",
      q3_2: "",
   });

   const [dataExaminationPage4, setDataExaminationPage4] = useState<Page4>({
      q4_1: "",
      q4_2: "",
   });

   const [dataExaminationPage5, setDataExaminationPage5] = useState<Page5>({
      q5_1: "",
      q5_2: "",
      q5_3: "",
   });

   const listData = [
      setdataConfirmation,
      setDataExaminationPage1,
      setDataExaminationPage2,
      setDataExaminationPage3,
      setDataExaminationPage4,
      setDataExaminationPage5,
   ];

   const prevPage = async () => {
      window.scrollTo(0, 0);
      const token = sessionStorage.getItem("token") as string;

      setPage(page - 1);
   };
   const nextPage = async () => {
      const token = sessionStorage.getItem("token") as string;
      setPage(page + 1);
      window.scrollTo(0, 0);
   };
   return (
      <>
         <div className='bg-base-white h-full min-h-screen overflow-hidden font-bai-jamjuree relative '>
            <div className='flex justify-between py-4 '>
            <div className='flex flex-row justify-between items-center ml-4 lg:ml-8'>
                  <img
                     src={`https://cdn.discordapp.com/attachments/1140509663138435172/1196801468775276595/snorlax.png?ex=65b8f339&is=65a67e39&hm=e95b01ecff8dadce2562d1749f41586fef3710687147cf1d4949fee74df03a73&`}
                     alt='Profile'
                     referrerPolicy='no-referrer'
                     className='lg:w-12 lg:h-12 w-6 h-6 rounded-full'
                  />
                  <p className='text-base-black font-semibold lg:mt-2.5lg:ml-4 ml-2 text-sm lg:text-base'>
                     {/* {sessionStorage.getItem("email")} */}
                    Snorlax@mail.xyz
                  </p>
               </div>


               <button
                  className='bg-red2 text-white lg:py-2 lg:px-8 py-1.5 px-4 rounded-lg font-semibold text-sm lg:text-base mr-2 lg:mr-12'
                  onClick={handleLogout}
               >
                  Log out
               </button>
            </div>
            {/* Form Section */}
            <div className='flex justify-center'>
               <div className='flex w-full justify-center'>
                  <p className='xl:text-7xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-teko tracking-widest text-red2 font-semibold mt-3 mb-3'>
                     {page == 1 ? "Confirmation" : "Examination"}
                  </p>
               </div>
            </div>
            <div className='w-full h-full relative z-10'>
               {page === 1 ? (
                  <ConfirmForm
                     data={dataConfirmation}
                     setData={setdataConfirmation}
                     dateData={dateData}
                     setDateData={setDateData}
                     confirm={confirm}
                     setConfirm={setConfirm}
                  />
               ) : null}
               {page === 2 ? <ExaminationInfo /> : null}
               {page === 3 ? (
                  <ExaminationPage1 data={dataExaminationPage1} setData={setDataExaminationPage1} />
               ) : null}
               {page === 4 ? (
                  <ExaminationPage2 data={dataExaminationPage2} setData={setDataExaminationPage2} />
               ) : null}
               {page === 5 ? (
                  <ExaminationPage3 data={dataExaminationPage3} setData={setDataExaminationPage3} />
               ) : null}
               {page === 6 ? (
                  <ExaminationPage4 data={dataExaminationPage4} setData={setDataExaminationPage4} />
               ) : null}
               {page === 7 ? (
                  <ExaminationPage5 data={dataExaminationPage5} setData={setDataExaminationPage5} />
               ) : null}
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
                        <button onClick={confirm ? nextPage : waiveSwal}>
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
export default ResultPage;
