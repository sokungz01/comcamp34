import { useState } from "react";
import { Page3 } from "@/types/ConfirmationType";
import Choice3_1 from "./data/q3_1.json";
import Choice3_2 from "./data/q3_2.json";
const ExaminationPage3 = ({ data, setData }: { data: Page3; setData: any }) => {
   const [question1State, setQuestion1State] = useState<Array<[]>>(
      data.q3_1 === ""
         ? []
         : JSON.parse(data.q3_1).map((items: any) => {
              return (items - 1) as number;
           }),
   );
   const [question2State, setQuestion2State] = useState<Array<[]>>(
      data.q3_2 === ""
         ? []
         : JSON.parse(data.q3_2).map((items: any) => {
              return (items - 1) as number;
           }),
   );
   const isInList = (List: Array<[]>, value: Number) => {
      const indexArr = List.findIndex((items: any) => {
         return items === value;
      });
      return indexArr !== -1 ? true : false;
   };

   const handleOnChangeQ1 = (value: Number) => {
      const indexArr = question1State.findIndex((items: any) => {
         return items === value;
      });

      if (indexArr === -1) {
         question1State.push(value as any);
      } else {
         question1State.splice(indexArr, 1);
      }
      setQuestion1State(question1State.sort());
      const json = JSON.stringify(
         question1State
            .map((items: any) => {
               return (items + 1) as number;
            })
            .sort((a, b) => {
               return a - b;
            }),
      );
      setData({ ...data, q3_1: json });
   };

   const handleOnChangeQ2 = (value: Number) => {
      const indexArr = question2State.findIndex((items: any) => {
         return items === value;
      });

      if (indexArr === -1) {
         question2State.push(value as any);
      } else {
         question2State.splice(indexArr, 1);
      }
      setQuestion2State(question2State.sort());
      const json = JSON.stringify(
         question2State
            .map((items: any) => {
               return (items + 1) as number;
            })
            .sort((a, b) => {
               return a - b;
            }),
      );
      setData({ ...data, q3_2: json });
   };

   return (
      <>
         <div className='flex justify-center mt-8'>
            <div className='bg-yellow3 bg-opacity-40 lg:rounded-2xl rounded-lg flex flex-col font-bai-jamjuree lg:px-16 px-6 pt-4 py-8 w-11/12'>
               <p className='text-red2 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center mt-3'>
                  ข้อสอบรายวิชา Build a Game with Unity
               </p>

               <div className='my-7'>
                  <div>
                     <p className='font-bold text-lg lg:text-2xl'>
                        3.1 ข้อใดเป็น Game Engine
                        <span className='text-orange'>*</span>
                     </p>
                     <ul className='flex flex-col my-3 sm:ml-8'>
                        {Choice3_1.map((items: any, index: number) => {
                           return (
                              <li key={index} className='my-3'>
                                 <label>
                                    <input
                                       type='checkbox'
                                       id={`q3_1-${index}`}
                                       name='q3_1'
                                       value={items.choice}
                                       checked={isInList(question1State, index)}
                                       onChange={() => handleOnChangeQ1(index)}
                                       className='p-2 form-check-input appearance-none cursor-pointer rounded-md border-2 border-red1 bg-white checked:ring-red-700 checked:ring-2 checked:bg-red-400 checked:border-white'
                                    />
                                    <span className='w-full ml-3 font-semibold text-md sm:text-lg lg:text-xl text-clip'>
                                       {items.choice}
                                    </span>
                                 </label>
                              </li>
                           );
                        })}
                     </ul>
                  </div>
                  <hr className='h-px my-8 bg-black/30 border-0' />
                  <div className='mt-6'>
                     <p className='font-bold text-lg lg:text-2xl'>
                        3.2 นนท์เป็นผู้พัฒนาเกมคนหนึ่ง กำลังพัฒนาเกมคล้ายๆ กับเกม Among Us เป็นเกม
                        2D พัฒนาโดยใช้ Unity Game Engine โดยนนท์มีหน้าที่เขียนโค้ดโครงสร้างหลัก
                        (Infastrcuture) ให้กับเกมเวอร์ชั่น Mobile ข้อใดต่อไปนี้ที่นนท์ทำได้ถูกต้อง
                        <span className='text-orange'>*</span>
                     </p>
                     <ul className='flex flex-col my-3 sm:ml-8'>
                        {Choice3_2.map((items: any, index: number) => {
                           return (
                              <li key={index} className='my-3'>
                                 <label>
                                    <input
                                       type='checkbox'
                                       id={`q3_2-${index}`}
                                       name='q3_2'
                                       value={items.choice}
                                       checked={isInList(question2State, index)}
                                       onChange={() => handleOnChangeQ2(index)}
                                       className='p-2 form-check-input appearance-none cursor-pointer rounded-md border-2 border-red1 bg-white checked:ring-red-700 checked:ring-2 checked:bg-red-400 checked:border-white'
                                    />
                                    <span className='w-full ml-3 font-semibold text-md sm:text-lg lg:text-xl text-clip'>
                                       {items.choice}
                                    </span>
                                 </label>
                              </li>
                           );
                        })}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
export default ExaminationPage3;
