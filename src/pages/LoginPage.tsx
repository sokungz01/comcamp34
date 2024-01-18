import { Link } from "react-router-dom";
const LoginPage = () => {

   return (
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
                  <Link
                     to='/registration'
                     className='z-[9999] inline-block mx-auto lg:text-xl lg:font-normal px-8 py-2 leading-none text-base-white bg-red1 hover:bg-red1/80 lg:border-2 lg:border-red2 my-4 lg:mt-8 rounded-xl'
                  >
                     Registration Page
                  </Link>
                  <Link
                     to='/confirmation'
                     className='z-[9999] inline-block mx-auto lg:text-xl lg:font-normal px-8 py-2 leading-none text-base-white bg-red1 hover:bg-red1/80 lg:border-2 lg:border-red2 my-4 lg:mt-8 rounded-xl'
                  >
                     Confirmation Page
                  </Link>
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
