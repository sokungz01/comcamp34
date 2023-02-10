import question from "@/components/homePage/FAQdata.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const FAQSection = () => {
   const [selectedQuestion, setSelectedQuestion] = useState<any>(null);

   const toggleFAQ = (i: any) => {
      if (selectedQuestion === i) {
         return setSelectedQuestion(null);
      }
      setSelectedQuestion(i);
   };
   useEffect(() => {
      setSelectedQuestion(0);
   }, []);
   return (
      <div className='w-full text-center lg:bg-contain bg-base-white lg:bg-[url("/assets/frontPage/faq-bg-desktop.png")] bg-[url("/assets/frontPage/faq-bg-mobile.png")]'>
         <div className='relative max-w-[1380px] m-auto my-32 grid lg:grid-cols-7 grid-cols-5 gap-1 font-bai-jamjuree text-center'>
            <div className='col-span-full lg:hidden flex flex-col' data-aos='fade-down'>
               <p className='font-semibold text-7xl tracking-wider drop-shadow-lg text-red1 font-teko'>
                  FAQ??
               </p>
               <p className='font-normal text-xl mt-1'>คำถามที่พบบ่อย</p>
            </div>
            <div className='lg:block hidden' data-aos='fade-left'>
               <img src='assets/frontPage/faq-image-person-1.png' className="w-[90%] mt-4"/>
            </div>
            <div className='col-span-2 relative lg:block hidden' data-aos='fade-down'>
               <img
                  src='assets/frontPage/faq-image-whiteboard.svg'
                  className='w-3/4 m-auto mt-0 md:mt-[15%] xl:mt-[25%]'
               />
            </div>
            <div
               className='lg:col-span-3 col-span-full lg:my-auto mt-4 lg:cursor-pointer ml-8 lg:mr-0 mr-24 sm:mr-36 lg:ml-8 relative z-10'
               data-aos='fade-down'
            >
               {question.map(
                  (item, index) =>
                     index < 4 && (
                        <div
                           className={`bg-inherit`}
                           onClick={() => {
                              toggleFAQ(index);
                           }}
                        >
                           <div
                              className={`flex justify-between pt-4 pb-2 border-b-[3px] ${
                                 selectedQuestion === index
                                    ? "border-base-black/50"
                                    : "border-base-black/25"
                              } 
                        ${selectedQuestion != index ? "hover:bg-[#f8e4cc]" : null} ${
                                 selectedQuestion === index ? "bg-yellow3/50" : "bg-base-white"
                              }`}
                           >
                              <p className='ml-1 mr-5 text-base lg:text-lg font-semibold text-left text-base-black/75'>
                                 {item.question}
                              </p>
                              {selectedQuestion != index ? (
                                 <svg
                                    className='w-6 h-6 absolute right-0'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='#17171B'
                                    stroke-width='2'
                                 >
                                    <line x1='12' y1='5' x2='12' y2='19'></line>
                                    <line x1='5' y1='12' x2='19' y2='12'></line>
                                 </svg>
                              ) : (
                                 <svg
                                    className='w-6 h-6 absolute right-0'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='#000000'
                                    stroke-width='2'
                                 >
                                    <line x1='5' y1='12' x2='19' y2='12'></line>
                                 </svg>
                              )}
                           </div>
                           <div
                              className={`text-base lg:text-lg  ${
                                 selectedQuestion === index
                                    ? "max-h-[8rem]"
                                    : "max-h-0 overflow-hidden"
                              } font-normal text-left  
                                ${
                                   selectedQuestion === index ? "pt-4 px-3 pb-2" : "p-0"
                                } bg-white transition-all duration-100 ease-linear`}
                           >
                              {item.answer}
                           </div>
                        </div>
                     ),
               )}
               <Link to='faq'>
                  <p className='text-left text-base lg:text-lg  font-semibold text-red1 mt-2 flex'>
                     ดูเพิ่มเติม
                     <svg
                        className='w-6 h-6 my-auto'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='#ca3450'
                        stroke-width='3'
                     >
                        <path d='M9 18l6-6-6-6' />
                     </svg>
                  </p>
               </Link>
            </div>
            <img
               src='assets/frontPage/faq-image-person-2.png'
               className='block lg:hidden bottom-0 sm:-bottom-10 absolute -z-5 sm:w-1/6 w-1/4 right-0'
            />
            <div className='col-span-1 relative hidden lg:block' data-aos='fade-right'>
               <img src='assets/frontPage/faq-image-person-2.png' className='bottom-0 absolute right-0' />
            </div>
         </div>
      </div>
   );
};
export default FAQSection;
