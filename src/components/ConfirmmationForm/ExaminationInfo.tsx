import { notPassSwal } from "@/lib/CustomSwal";
const ExaminationInfo = () => {
   return (
      <>
         <div className='flex justify-center mt-8'>
            <div className='bg-yellow3 bg-opacity-40 lg:rounded-2xl rounded-lg flex flex-col font-bai-jamjuree lg:px-16 px-6 pt-4 py-8 w-11/12'>
               <p className='text-red2 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center mt-3'>
                  ข้อสอบสำหรับคัดเลือกกลุ่มเรียน โครงการ Comcamp 34
               </p>
               <p className='text-sm text-center md:font-semibold mt-6 md:mt-2 mb-4 w-11/12 '>
                  วันพุธที่ 15 มีนาคม 2566 เวลา 09:09 น. ถึง วันอังคารที่ 22 มีนาคม 2566 เวลา 23:59
                  น.
               </p>
               <div className='flex justify-center'>
                  <div className='text-md md:text-xl bg-white h-full overflow-y-auto rounded-lg p-6 mb-4 mx-2 w-full lg:w-5/6'>
                     <p className='font-bold'> คำชี้แจ้ง </p>
                     <p className='font-semibold ml-4 mt-2'>1. ข้อสอบมีทั้งหมด 5 ข้อจำนวน 5 หน้า</p>
                     <p className='font-semibold ml-4 mt-2'>2. ข้อสอบมีทั้งหมด 5 ข้อ</p>
                     <ul className='ml-8'>
                        <li>- ข้อที่ 1 คิดเป็นร้อยละ 19 ของคะแนนทั้งหมด</li>
                        <li>- ข้อที่ 2 คิดเป็นร้อยละ 19 ของคะแนนทั้งหมด</li>
                        <li>- ข้อที่ 3 คิดเป็นร้อยละ 19 ของคะแนนทั้งหมด</li>
                        <li>- ข้อที่ 4 คิดเป็นร้อยละ 19 ของคะแนนทั้งหมด</li>
                        <li>- ข้อที่ 5 คิดเป็นร้อยละ 19 ของคะแนนทั้งหมด</li>
                     </ul>
                     <p className='ml-6'>
                        คิดเป็นร้อยละ 95 ของคะแนนทั้งหมด + ร้อยละ 5 จากคำถามในการคัดเลือก ข้อที่ 7
                     </p>
                     <p className='font-semibold ml-4 mt-2'>
                        3. ให้ส่งคำตอบ โดยกดปุ่ม ส่ง (Submit) ภายในวันอังคารที่ 22 มีนาคม 2566 เวลา
                        23.59 น.
                     </p>
                     <p className='font-semibold ml-4 mt-2'>
                        4. อนุญาตให้ใช้เครื่องคิดคำนวณ โปรแกรมต่างๆ
                        หรือคอมพิวเตอร์ในการสืบค้นข้อมูลได้
                     </p>
                     <p className='font-semibold ml-4 mt-2'>
                        5. ข้อสอบไม่มีการแก้ไขใด ๆ หากมีปัญหาให้น้องเขียนสมมติฐานประกอบการตัดสินใจ
                     </p>
                     <p className='font-semibold ml-4 mt-2'>
                        6. การประเมินผลการคัดเลือก จะเน้นหลักการ และแนวคิดในการตอบคำถามเป็นหลัก
                     </p>

                     <p className='font-bold text-center mt-8 text-md lg:text-xl xl:text-2xl'>
                        <span className='text-red2'>ไม่อนุญาต</span>ให้นำข้อสอบฉบับนี้ไปเผยแพร่
                        หรือส่งไฟล์ต่อให้ผู้อื่น
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
export default ExaminationInfo;
