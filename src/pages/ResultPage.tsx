import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useNavigate } from "react-router-dom";
import TestAuto from "@/components/ConfirmmationForm/TestAuto";
const ResultPage = () => {
   const navigate = useNavigate();
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
         <div className='relative z-10 flex h-screen'>
            <div className='m-auto'>
               Result
               <TestAuto />
            </div>
         </div>

         <div className='absolute z-0 bottom-0 w-full'>
            <img src='/assets/regisPage/bgLogin.png' className='w-full opacity-50' />
         </div>
      </div>
   );
};
export default ResultPage;
