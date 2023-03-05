import { Fragment, useEffect } from "react";
import Choice from "./Choice";
import { Page5 } from "@/types/ConfirmationType";
const ExaminationPage5 = ({ data, setData }: { data: Page5; setData: any }) => {
    return (
      <>
         <div className='flex justify-center mt-8'>
            <div className='bg-yellow3 bg-opacity-40 lg:rounded-2xl rounded-lg flex flex-col font-bai-jamjuree lg:px-16 px-6 pt-4 py-8 w-11/12'>
               <p className='text-red2 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center mt-3'>
                  ข้อสอบรายวิชา Introduction to Web Development
               </p>

               <div className='my-7'>
                  <div>
                     <p className='font-bold text-lg lg:text-2xl'>
                        5.1 ข้อใดใช้ HTML Attribute ไม่ถูกต้อง 
                        <span className='text-orange'>*</span>
                     </p>
                        <Choice
                           name='q5_1'
                           choice1='<img src=”img1.png” width=”300px” height=”400px”>'
                           choice2='<a 
                           href="https://comcamp.io">
                           Click</a>'
                           choice3='<p style=”color: blue;”>The first paragraph</p>                           '
                           choice4='<h1 font-size=”30px”>This is Heading</h1>'
                           value={data.q5_1}
                           obj={data}
                           setObj={setData}
                        />
                  </div>
                  <hr className='h-px my-8 bg-black/30 border-0'/>
                  <div className='mt-6'>
                     <p className='font-bold text-lg lg:text-2xl'>
                        5.2 การนำ CSS ไปใช้กับ HTML มีได้กี่วิธี มีอะไรบ้าง<span className='text-orange'>*</span>
                     </p>
                        <Choice
                           name='q5_2'
                           choice1='มี  2 วิธี Inline, External '
                           choice2='มี  2 วิธี Internal, External'
                           choice3='มี  3 วิธี Inline, Internal, Extern'
                           choice4='มี 3 วิธี Inline, Internal, External'
                           value={data.q5_2}
                           obj={data}
                           setObj={setData}
                        />
                  </div>
                  <hr className='h-px my-8 bg-black/30 border-0'/>
                  <div className="mt-6">
                     <p className='font-bold text-lg lg:text-2xl'>
                        2.3 จากวงจรและโค้ดดังรูปเมื่อทำการกด RUN จะเกิดอะไรขึ้นกับหลอด LED
                        <span className='text-orange'>*</span>
                     </p>
                     <div className="flex h-full w-full bg-white/70 justify-center rounded-xl my-6 sm:py-6">
                        <img 
                            src="/assets/confirmationPage/q5-3.png"
                            className="h-full sm:object-contain sm:h-fit rounded-xl border-4"
                        />
                     </div>
                        <Choice
                           name='q5_3'
                           choice1='y = 6x + 5'
                           choice2='y = 6x + 3'
                           choice3='y = 7x + 3'
                           choice4='y = 7x + 5'
                           value={data.q5_3}
                           obj={data}
                           setObj={setData}
                        />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
export default ExaminationPage5;
