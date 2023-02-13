import { ComingSoonSwal } from "@/lib/CustomSwal";
import isMobile from "is-mobile";
import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";

const LandingSection: React.FC = () => {
   return (
      <div className='min-h-screen overflow-hidden flex flex-col content-start justify-center font-teko tracking-wider bg-base-white'>
         <div className='lg:z-[99] absolute mx-auto top-0 left-0 right-0 flex flex-col content-start justify-center'>
            <img
               className='mt-40 mb-10 lg:w-1/4 w-2/3 mx-auto'
               src='/assets/frontPage/animated-logo.png'
            />
            <div className='flex flex-col content-start justify-center mx-auto'>
               <p className='mx-auto font-normal lg:font-medium lg:text-5xl text-3xl text-red2'>
                  Open 15 February - 5 March 2023
               </p>
               {/* <Link
                  to='/registration'
               > */}
               <button
                  onClick={ComingSoonSwal}
                  className='z-[998] inline-block mx-auto lg:text-3xl lg:font-normal px-6 py-1 lg:px-10 lg:py-0.5 leading-none text-base-white bg-red2 lg:border-2 lg:border-red2 my-4 lg:mt-8 rounded-lg'
               >
                  Register
               </button>
               {/* </Link> */}
            </div>
         </div>
         <Parallax speed={isMobile() ? 30 : 100}>
            <img
               className='relative 2xl:-bottom-[40%] xl:-bottom-[45%] -bottom-[50%] w-screen lg:block hidden'
               data-aos='fade-up'
               data-aos-offset='-1000'
               data-aos-delay='50'
               data-aos-duration='3000'
               src='/assets/frontPage/landing-bg-tower-desktop.png'
            />
            <img
               className='relative w-screen -bottom-[57%] lg:hidden block'
               data-aos='fade-up'
               data-aos-offset='-1000'
               data-aos-delay='50'
               data-aos-duration='3000'
               src='/assets/frontPage/landing-bg-tower-mobile.png'
            />
         </Parallax>
      </div>
   );
};

export default LandingSection;
