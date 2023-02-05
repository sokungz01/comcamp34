import Textarea from "@/components/Textareainput";
import { useState } from "react";

export const QuestionFormpage1 = () => {
    const [q1, setQ1] = useState<string>("");
    const [q2, setQ2] = useState<string>("");
    const [q3, setQ3] = useState<string>("");
    return (
      <>
         <div className='flex justify-center mt-8'>
            <div className='bg-[#A1CDC7] bg-opacity-70 flex flex-col font-bai-jamjuree w-11/12 lg:rounded-2xl rounded-lg lg:mx-40 mx-6 lg:px-8 xl:px-32 px-6 py-4 pb-8'>
               <div className=' text-5xl font-bold lg:mb-12 mb-4 flex'>
                  <img
                     src='/assets/regisPage/yellow_postit.svg'
                     className='lg:w-16 lg:mt-8 mt-2 w-8'
                  />
                  <p className='text-red2 lg:text-5xl text-2xl font-semibold lg:mt-8 mt-2 ml-2'>
                     คำถามในการเลือก
                  </p>
               </div>
               <Textarea
                  question='1.น้อง ๆ คาดหวังอะไรจากค่าย comcamp'
                  name='q1'
                  setObj={setQ1}
                  obj={q1}
               />
               <Textarea
                  question='2.หากน้องได้มาเข้าร่วมค่าย comcamp โดยที่น้องยังไม่ค่อยมีพื้นฐานทางด้านคอมพิวเตอร์มาก่อน และน้องสามารถเลือกกลุ่มได้ น้องจะเลือกอยู่กับกลุ่มที่ยังไม่มีพื้นฐานทางด้านคอมพิวเตอร์เหมือนกัน หรือกลุ่มที่มีพื้นฐานคอมพิวเตอร์ในระดับกลาง-สูง พร้อมเหตุผล'
                  name='q2'
                  setObj={setQ2}
                  obj={q2}
               />
               <Textarea
                  question='3.หากระหว่างการเข้าค่าย comcamp น้อง ๆ พบว่าเพื่อนในกลุ่มมีปัญหา ไม่สนุกกับการทำกิจกรรม หรือไม่อยากมีส่วนร่วมกับกิจกรรมที่กำลังเกิดขึ้น น้อง ๆ จะมีวิธีการพูดคุยหรือแก้ไขปัญหานี้กับเพื่อนคนนั้นอย่างไร?'
                  name='q3'
                  setObj={setQ3}
                  obj={q3}
               />
            </div>
         </div>
      </>
   );
};
