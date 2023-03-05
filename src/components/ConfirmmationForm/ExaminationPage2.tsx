import { Fragment, useEffect } from "react";
import Choice from "./Choice";
import { Page2 } from "@/types/ConfirmationType";
const ExaminationPage2 = ({ data, setData }: { data: Page2; setData: any }) => {
   useEffect(
    ()=>{
        console.log(data);
    }
   ),[data];
    return (
      <>
         <div className='flex justify-center mt-8'>
            <div className='bg-yellow3 bg-opacity-40 lg:rounded-2xl rounded-lg flex flex-col font-bai-jamjuree lg:px-16 px-6 pt-4 py-8 w-11/12'>
               <p className='text-red2 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center mt-3'>
                  ข้อสอบรายวิชา Introduction to Microcontroller
               </p>

               <div className='my-7'>
                  <div>
                     <p className='font-bold text-lg lg:text-2xl'>
                        2.1 อุปกรณ์ Microcontroller มีความใกล้เคียงกับอุปกรณ์ใดต่อไปนี้มากที่สุด
                        <span className='text-orange'>*</span>
                     </p>
                     <div className='flex flex-col my-3'>
                        <Choice
                           name='q2_1'
                           choice1='Microwave'
                           choice2='Microscope'
                           choice3='Microcomputer'
                           choice4='Microphone'
                           choice5='ไม่มีข้อใดถูกเลย'
                           value={data.q2_1}
                           obj={data}
                           setObj={setData}
                        />
                     </div>
                  </div>
                  <hr className='h-px my-8 bg-black/30 border-0'/>
                  <div className='mt-6'>
                     <p className='font-bold text-lg lg:text-2xl'>
                        2.2
                        จากวงจรและโค้ดดังรูปหากต้องการให้หลอดไฟติดค้างตลอดเวลาจะต้องเขียนโค้ดอย่างไร
                        ?<span className='text-orange'>*</span>
                     </p>
                     <div className='flex flex-col my-3'>
                        <Choice
                           name='q2_2'
                           choice1={
                              <Fragment>
                                 <p>
                                    <span className='mr-1 lg:mr=3'>1)D2,</span>
                                    <span className='mx-1 lg:mx-3'>2)D2,</span>
                                    <span className='mx-1 lg:mx-3'>3)LOW,</span>
                                    <span className='mx-1 lg:mx-3'>4)888</span>
                                 </p>
                              </Fragment>
                           }
                           choice2={
                              <Fragment>
                                 <p>
                                    <span className='mr-1 lg:mr=3'>1)D2,</span>
                                    <span className='mx-1 lg:mx-3'>2)D2,</span>
                                    <span className='mx-1 lg:mx-3'>3)HIGH,</span>
                                    <span className='mx-1 lg:mx-3'>4)888</span>
                                 </p>
                              </Fragment>
                           }
                           choice3={
                              <Fragment>
                                 <p>
                                    <span className='mr-1 lg:mr=3'>1)2,</span>
                                    <span className='mx-1 lg:mx-5'>2)2,</span>
                                    <span className='mx-1 lg:mx-3'>3)LOW,</span>
                                    <span className='mx-1 lg:mx-3'>4)888</span>
                                 </p>
                              </Fragment>
                           }
                           choice4={
                              <Fragment>
                                 <p>
                                    <span className='mr-1 lg:mr=3'>1)D2,</span>
                                    <span className='mx-1 lg:mx-3'>2)2,</span>
                                    <span className='mx-1 lg:mx-3'>3)HIGH,</span>
                                    <span className='mx-1 lg:mx-3'>4)888</span>
                                 </p>
                              </Fragment>
                           }
                           choice5={
                              <Fragment>
                                 <p>
                                    <span className='mr-1 lg:mr=3'>1)2,</span>
                                    <span className='mx-1 lg:mx-5'>2)2,</span>
                                    <span className='mx-1 lg:mx-3'>3)HIGH,</span>
                                    <span className='mx-1 lg:mx-3'>4)888</span>
                                 </p>
                              </Fragment>
                           }
                           value={data.q2_2}
                           obj={data}
                           setObj={setData}
                        />
                     </div>
                  </div>
                  <div className="mt-6">
                     <p className='font-bold text-lg lg:text-2xl'>
                        2.3 จากวงจรและโค้ดดังรูปเมื่อทำการกด RUN จะเกิดอะไรขึ้นกับหลอด LED
                        <span className='text-orange'>*</span>
                     </p>
                     <div className='flex flex-col my-3'>
                        <Choice
                           name='q2_3'
                           choice1='หลอด LED สว่างเป็นเวลา 1 วินาที และดับเป็นเวลา 1 วินาทีแล้วหยุดทำงาน'
                           choice2='หลอด LED ดับเป็นเวลา 1 วินาที และสว่างเป็นเวลา 1 วินาทีแล้วสลับกันไปเรื่อยๆ'
                           choice3='หลอด LED สว่างเป็นเวลา 1 วีนาที และดับเป็นเวลา 1 วินาที สลับกันไปเรื่อยๆ'
                           choice4='หลอดไม่สว่าง'
                           choice5='ไม่มีข้อใดถูกเลย'
                           value={data.q2_3}
                           obj={data}
                           setObj={setData}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
export default ExaminationPage2;
