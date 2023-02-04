import question from "@/components/homePage/FAQdata.json"
import { useState } from "react";
import { Link } from 'react-router-dom';
const FAQSection=()=>{
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const toggleFAQ=(i:any)=>{
        if(selectedQuestion === i){
            return setSelectedQuestion(null);
        }
        setSelectedQuestion(i);
    }

    return(
        <div className='w-full text-center lg:bg-contain bg-base-white lg:bg-[url("/assets/frontPage/bgFAQsection.png")] bg-[url("/assets/frontPage/bgFAQsectionMobile.png")]'>
         <div className="max-w-7xl m-auto my-32 grid lg:grid-cols-6 grid-cols-5 gap-1 font-bai-jamjuree text-center">
            <div className="col-span-full lg:hidden flex flex-col" data-aos="fade-down">
                <p className="font-semibold text-6xl tracking-wider drop-shadow-lg text-red1">FAQ??</p>
                <p className="font-normal text-xl">คำถามที่พบบ่อย</p>
            </div>
            <div className="lg:block hidden" data-aos="fade-left">
                <img src="assets/frontPage/FAQimage1.png"/>
            </div>
            <div className="col-span-2 relative lg:block hidden" data-aos="fade-down">
                <img src="assets/frontPage/FAQwhiteboard.png" className="w-3/4 m-auto mt-20"/>
                
            </div>
            <div className="lg:col-span-2 col-span-4 my-auto cursor-pointer ml-6 lg:ml-8" data-aos="fade-down">
                {question.map((item,index)=>(
                    index<4 &&
                    <div className={`bg-inherit`} onClick={()=>{ toggleFAQ(index)}}>
                        <div className={`flex justify-between pt-4 pb-2 border-b-[3px] ${selectedQuestion === index ? "border-base-black/50":"border-base-black/25"} 
                        ${selectedQuestion != index ? "hover:bg-yellow3/25":null} ${selectedQuestion === index ? "bg-yellow3/50":"bg-inherit"}`}>
                        <p className="mx-3 text-base lg:text-lg font-semibold text-left text-base-black/75">{item.question}</p>
                        {selectedQuestion != index ? <svg className="w-6 h-6 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" 
                        stroke="#17171B" stroke-width="2" >
                            <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>:
                            <svg className="w-6 h-6 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                            fill="none" stroke="#000000" stroke-width="2" >
                            <line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        }
                        </div>   
                            <div className={
                                `text-base lg:text-lg  ${selectedQuestion===index?"max-h-[8rem]":"max-h-0 overflow-hidden"} font-normal text-left  
                                ${selectedQuestion ===index? "pt-4 px-3 pb-2":"p-0"} bg-white transition-all duration-100 ease-linear`}>
                                {item.answer}
                            </div>                    
                        </div>
                ))}
                <Link to="faq">
                <p className="text-left text-base lg:text-lg  font-semibold text-red1 mt-4 flex">ดูเพิ่มเติม
                <svg className="w-6 h-6 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ca3450" 
                stroke-width="3"><path d="M9 18l6-6-6-6"/></svg>
                </p>
                </Link>
                
            </div>
            <div className="col-span-1 relative hidden lg:block" data-aos="fade-right">
                <img src='assets/frontPage/FAQimage2.png' className="bottom-0 absolute"/>
            </div>
            <div className="col-span-1 relative block lg:hidden">
                <img src='assets/frontPage/FAQimage2.png' className="bottom-0 absolute"/>
            </div>
         </div>
      </div>
    )
}
export default FAQSection;