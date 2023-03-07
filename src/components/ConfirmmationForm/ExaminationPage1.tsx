import { useEffect,Fragment } from "react";
import Choice from "./Choice";
import Inputbox from "@/components/Inputbox";
import { Page1 } from "@/types/ConfirmationType";
const ExaminationPage1 = ({ data, setData }: { data: Page1; setData: any }) => {

   useEffect(
      () => {
         if(data.q1_1 !== "e"){
            setData((data: Page1) => ({
               ...data,
               reason_q1_1: "",
            }));
         }
         if(data.q1_2 !== "e"){
            setData((data: Page1) => ({
               ...data,
               reason_q1_2: "",
            }));
         }
         if(data.q1_3 !== "e"){
            setData((data: Page1) => ({
               ...data,
               reason_q1_3: "",
            }));
         }
      },[data.q1_1,data.q1_2,data.q1_3]
   )

   return (
      <>
         <div className='flex justify-center mt-8'>
            <div className='bg-yellow3 bg-opacity-40 lg:rounded-2xl rounded-lg flex flex-col font-bai-jamjuree lg:px-16 px-6 pt-4 py-8 w-11/12'>
               <p className='text-red2 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center mt-3'>
                  ข้อสอบรายวิชา Fundamentals of C Programming
               </p>

               <div className='my-7'>
                  <div>
                     <p className='font-bold text-lg lg:text-2xl'>
                        1.1 ผลลัพธ์ของโปรแกรมนี้ตรงกับข้อไหน?
                        <span className='text-orange'>*</span>
                     </p>
                     <div className='flex h-full w-full bg-white/70 justify-center rounded-xl my-6 sm:py-6'>
                        <img
                           src='/assets/confirmationPage/q1-1.png'
                           className=' w-full sm:object-contain sm:w-3/4 lg:w-2/3 rounded-xl border-4'
                        />
                     </div>
                     <Choice
                        name='q1_1'
                        choice1='Hello world'
                        choice2='Hello, world!'
                        choice3=' \Hello, world'
                        choice4=' \Hello, world!'
                        choice5='Compile ไม่ผ่าน/ไม่แสดงผล'
                        value={data.q1_1}
                        obj={data}
                        setObj={setData}
                     />
                     {data.q1_1 == "e" ? (
                        <Inputbox
                           name='reason_q1_1'
                           label='เหตุผลที่ Compile ไม่ผ่าน/ไม่แสดงผล'
                           value={data.reason_q1_1}
                           obj={data}
                           setObj={setData}
                           placeholder='เหตุผลที่เลือก [ตัวอย่าง: line 6 - int main()]'
                        />
                     ) : (
                        <></>
                     )}
                  </div>
                  <hr className='h-px my-8 bg-black/30 border-0' />
                  <div className='mt-6'>
                     <p className='font-bold text-lg lg:text-2xl'>
                        1.2 ผลลัพธ์ของโปรแกรมนี้ตรงกับข้อไหน? ?
                        <span className='text-orange'>*</span>
                     </p>
                     <div className='flex h-full w-full bg-white/70 justify-center rounded-xl my-6 sm:py-6'>
                        <img
                           src='/assets/confirmationPage/q1-2.png'
                           className=' w-full sm:object-contain sm:w-3/4 lg:w-2/3 rounded-xl border-4'
                        />
                     </div>
                     <Choice
                        name='q1_2'
                        choice1=' 1 2 3 4'
                        choice2='0 1 2 3 4'
                        choice3='1 2 3 4 5'
                        choice4='0 1 2 3 4 5'
                        choice5='Compile ไม่ผ่าน/ไม่แสดงผล'
                        value={data.q1_2}
                        obj={data}
                        setObj={setData}
                     />
                      {data.q1_2 == "e" ? (
                        <Inputbox
                           name='reason_q1_2'
                           label='เหตุผลที่ Compile ไม่ผ่าน/ไม่แสดงผล'
                           value={data.reason_q1_2}
                           obj={data}
                           setObj={setData}
                           placeholder='เหตุผลที่เลือก [ตัวอย่าง: line 6 - int main()]'
                        />
                     ) : (
                        <></>
                     )}
                  </div>
                  <hr className='h-px my-8 bg-black/30 border-0' />
                  <div className='mt-6'>
                     <p className='font-bold text-lg lg:text-2xl'>
                        1.3 ผลลัพธ์ของโปรแกรมนี้ตรงกับข้อไหน?
                        <span className='text-orange'>*</span>
                     </p>
                     <div className='flex h-full w-full bg-white/70 justify-center rounded-xl my-6 sm:py-6'>
                        <img
                           src='/assets/confirmationPage/q1-3.png'
                           className=' w-full sm:object-contain sm:w-3/4 lg:w-2/3 rounded-xl border-4'
                        />
                     </div>
                     <Choice
                        name='q1_3'
                        choice1='จบการทำงาน'
                        choice2='input: 1 output: 1'
                        choice3='input: ฟ จบการทำงาน'
                        choice4='input: a output: 4194432                        '
                        choice5='Compile ไม่ผ่าน/ไม่แสดงผล'
                        value={data.q1_3}
                        obj={data}
                        setObj={setData}
                     /> {data.q1_3 == "e" ? (
                        <Inputbox
                           name='reason_q1_3'
                           label='เหตุผลที่ Compile ไม่ผ่าน/ไม่แสดงผล'
                           value={data.reason_q1_3}
                           obj={data}
                           setObj={setData}
                           placeholder='เหตุผลที่เลือก [ตัวอย่าง: line 6 - int main()]'
                        />
                     ) : (
                        <></>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
export default ExaminationPage1;
