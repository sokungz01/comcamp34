import { useEffect, useState } from "react";
import { RegistrationPage } from "./RegistrationPage";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";
import { Login } from "@/lib/Fetch";
import { CustomSwal } from "@/lib/CustomSwal";
import { registerEvent } from "@/gaEvents";
import { loginEvent } from "@/gaEvents";
import ResultPage from "./ResultPage";

const LoginPage = () => {
   const [isLogin, setIsLogin] = useState<boolean>(false);
   const login = async () => {
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();

      if (result) {
         try {
            const res = await Login(idToken);
            if (res.status === 200 || res.status === 201) {
               setIsLogin(true);
               // Set Token (Session)
               registerEvent();
               sessionStorage.setItem("syncPage", res.data.page);
               sessionStorage.setItem("token", res.data.accessToken);
               sessionStorage.setItem("email", result.user.email as string);
               sessionStorage.setItem("photoURL", result.user.photoURL as string);
            }
            if (res.status == 208) {
               // User Already Submit Form
               CustomSwal();
            }
         } catch (error) {
            console.log("ERROR");
         }
      }
   };
   useEffect(() => {
      if (sessionStorage.getItem("token")) {
         setIsLogin(true);
         loginEvent();

      }

      return () => {};
   }, []);

   return isLogin ? (
      // <RegistrationPage />
      <ResultPage/>
   ) : (
      <div className='bg-base-white h-full min-h-screen overflow-hidden font-bai-jamjuree relative '>
         <div className='relative flex flex-row h-screen justify-center z-20'>
            <div className='m-auto'>
               <div className='grid lg:grid-cols-2 lg:divide-x-4 lg:divide-y-0 divide-y-4'>
                  <div className='flex flex-col items-center'>
                     <img
                        src='/assets/large-logo.png'
                        className='2xl:h-100 xl:h-84 lg:h-72 md:h-64 sm:h-60 h-52 lg:mr-16'
                     />
                  </div>
                  <div className='flex flex-col items-center'>
                     <div className='m-auto'>
                        <a
                           className='flex w-full rounded-md items-center justify-center px-8 py-3 mt-4 text-gray-600 bg-white cursor-pointer transition-colors duration-300 transform border hover:bg-gray-100 shadow-lg '
                           onClick={login}
                        >
                           <svg className='w-4 h-4 lg:w-6 lg:h-6' viewBox='0 0 40 40'>
                              <path
                                 d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                                 fill='#FFC107'
                              />
                              <path
                                 d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                                 fill='#FF3D00'
                              />
                              <path
                                 d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                                 fill='#4CAF50'
                              />
                              <path
                                 d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                                 fill='#1976D2'
                              />
                           </svg>
                           <span className='mx-2 sm:text-sm font-semibold'>
                              Sign in with Google
                           </span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className='absolute z-10 bottom-0 w-full'>
            <img src='/assets/regisPage/bgLogin.png' className='w-full' />
         </div>
      </div>
   );
};

export default LoginPage;
