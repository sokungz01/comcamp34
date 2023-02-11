const TimelineSection = () => {
   return (
      <div
         id='timeline'
         className='pt-20 w-full text-center bg-contain bg-base-white bg-[url("/assets/frontPage/timeline-bg.svg")]'
      >
         <div
            className='flex mx-auto justify-center relative '
            data-aos='fade-down'
            data-aos-delay='200'
         >
            <p className='text-red2 drop-shadow-lg lg:text-8xl text-6xl md:text-8xl font-semibold mt-8 ml-2 font-teko tracking-wider '>
               Timeline
            </p>
            <img
               className='md:w-[8rem] w-[6rem]'
               src='assets/frontPage/timeline-icon-hammer.svg'
               id='Hammer'
               alt='Hammer'
            />
         </div>
         <div className='max-w-7xl m-auto my-20 grid grid-cols-1 gap-1 font-bai-jamjuree text-center '>
            <div
               className='mx-auto relative hidden lg:block '
               data-aos='zoom-in'
               data-aos-delay='300'
            >
               <img
                  src='assets/frontPage/timeline-image-1-desktop.png'
                  alt=''
                  className='px-16 xl:px-10'
               />
            </div>
            <div
               className='mx-auto relative block lg:hidden'
               data-aos='zoom-in'
               data-aos-delay='300'
            >
               <img src='assets/frontPage/timeline-image-1-mobile.png' alt='' className='px-5' />
            </div>
         </div>
      </div>
   );
};
export default TimelineSection;
