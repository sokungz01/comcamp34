// import React from 'react'
const TimelineSection = () => {
   return (
      <div className='w-full h-screen text-center bg-contain bg-base-white bg-[url("/assets/frontPage/bgTimelineSection.svg")]'>
         <div className='flex mx-auto justify-center relative '>
            <p
               className='text-red2 drop-shadow-lg lg:text-8xl text-6xl md:text-8xl font-semibold mt-8 ml-2 font-teko tracking-wider '
               data-aos='fade-down'
            >
               Timeline
            </p>
            <img
               className='md:w-[8rem] w-[6rem]'
               src='assets/frontPage/HammerTimelineSection.svg'
               id='Hammer'
            />
         </div>

         <div className='max-w-7xl m-auto my-24 grid grid-cols-1 gap-1 font-bai-jamjuree text-center '>
            <div
               className='mx-auto relative hidden lg:block '
               data-aos='zoom-in'
               data-aos-delay='300'
            >
               <img src='assets/frontPage/Timeline15febimage.svg' />
            </div>
            <div
               className='mx-auto relative block lg:hidden '
               data-aos='zoom-in'
               data-aos-delay='300'
            >
               <img src='assets/frontPage/Timeline15febMobileimage.svg' />
            </div>
         </div>
      </div>
   );
};
export default TimelineSection;
