import question from "@/components/homePage/FAQdata.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LeftArrow from "/assets/svg/LeftArrow.svg";
const FAQPageComponent = () => {
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
      <div className='w-full h-full lg:bg-contain bg-base-white lg:bg-[url("/assets/frontPage/faqpage-bg-desktop.png")]'>
         <div className='relative max-w-7xl m-auto my-8 lg:my-16 flex justify-center font-bai-jamjuree'>
            <div
               className='w-5/6 lg:my-auto mt-4 lg:cursor-pointer relative z-10'
               data-aos='fade-down'
            >
               <p className='font-semibold text-7xl tracking-wider drop-shadow-lg text-red1 font-teko mb-4 mt-10'>
                  FAQ
               </p>
               {question.map((item, index) => (
                  <div
                     className={`bg-inherit overflow-y-auto`}
                     onClick={() => {
                        toggleFAQ(index);
                     }}
                  >
                     <div
                        className={`flex justify-between pt-4 pb-2 border-b-[3px] ${selectedQuestion === index
                              ? "border-base-black/50"
                              : "border-base-black/25"
                           } 
                        ${selectedQuestion != index ? "hover:bg-[#f8e4cc]" : null} ${selectedQuestion === index ? "bg-yellow3/50" : "bg-base-white"
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
                              strokeWidth='2'
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
                              strokeWidth='2'
                           >
                              <line x1='5' y1='12' x2='19' y2='12'></line>
                           </svg>
                        )}
                     </div>
                     <div
                        className={`text-base lg:text-lg  ${selectedQuestion === index ? "max-h-[8rem]" : "max-h-0 overflow-hidden"
                           } font-normal text-left  
                                ${selectedQuestion === index ? "pt-4 px-3 pb-2" : "p-0"
                           } bg-white transition-all duration-100 ease-linear`}
                     >
                        {item.answer}
                     </div>
                  </div>
               ))}
               <Link to="/">
               <button>
                  <svg xmlns="http://www.w3.org/2000/svg"
                     className="w-10 h-10 mt-4"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="#ca3450" strokeWidth="3"
                     stroke-linecap="round"
                     stroke-linejoin="round">
                     <path d="M15 18l-6-6 6-6" /></svg>
               </button>
               </Link>
            </div>
         </div>
      </div>
   );
};
export default FAQPageComponent;
