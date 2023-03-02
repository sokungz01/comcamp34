import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LeftArrow from "/assets/svg/LeftArrow.svg";
import RightArrow from "/assets/svg/RightArrow.svg";
import { CustomSwal } from "@/lib/CustomSwal";
import ExaminationInfo from "@/components/ConfirmmationForm/ExaminationInfo";
import ConfirmForm from "@/components/ConfirmmationForm/ConfirmForm";
import { DateForm, Confirmation } from "@/types/ConfirmationType";
const ResultPage = () => {
   const navigate = useNavigate();
   const [page, setPage] = useState<number>(1);
   const handleLogout = () => {
      signOut(auth)
         .then(() => {
            navigate("/");
         })
         .catch(error => {
            // An error happened.
         });
      sessionStorage.clear();
   };

   const [dateData, setDateData] = useState<DateForm>({
      date: "",
      month: "",
      year: "",
   });

   const [dataConfirmation, setdataConfirmation] = useState<Confirmation>({
      isConfirm: "",
      describeTravel: "",
      transaction_Name: "",
      transaction_URL: "",
      transaction_date: "",
      transaction_hours: "",
      transaction_minutes: "",
   });

   const prevPage = () => {
      setPage(page - 1);
   };
   const nextPage = () => {
      setPage(page + 1);
   };

   return (
      <div className='bg-base-white h-full min-h-screen overflow-hidden font-bai-jamjuree relative '>
         <div className='flex justify-between py-4 '>
            <div className='flex flex-row justify-between items-center ml-4 lg:ml-8'>
               <img
                  src={`${sessionStorage.getItem("photoURL")}`}
                  alt='Profile'
                  referrerPolicy='no-referrer'
                  className='lg:w-12 lg:h-12 w-6 h-6 rounded-full'
               />
               <p className='text-base-black font-semibold lg:mt-2.5lg:ml-4 ml-2 text-sm lg:text-base'>
                  {sessionStorage.getItem("email")}
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
               />
            ) : null}
            {page === 2 ? <ExaminationInfo /> : null}
         </div>

         <div className='flex flex-col justify-center pt-4 relative z-10 my-8 pb-16'>
            {page === 7 ? (
               <div className='flex flex-row justify-center mb-8'>
                  <button
                     onClick={CustomSwal}
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
   );
};
export default ResultPage;
