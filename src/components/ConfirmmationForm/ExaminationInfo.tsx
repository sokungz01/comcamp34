const ExaminationInfo = () => {
   return (
      <>
         <div className='flex justify-center mt-8'>
            <div className='bg-yellow3 bg-opacity-40 lg:rounded-2xl rounded-lg flex flex-col font-bai-jamjuree lg:px-16 px-6 pt-4 py-8 w-11/12'>
               <p className='text-red2 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center mt-3'>
                  แบบทดสอบสำหรับวัดความรู้พื้นฐาน โครงการ Comcamp 34
               </p>
               <p className='text-sm text-center md:font-semibold mt-6 md:mt-2 mb-4 w-full '>
                  วันพุธที่ 15 มีนาคม 2566 เวลา 00:09 น. ถึง วันศุกร์ที่ 17 มีนาคม 2566 เวลา 23:59
                  น.
               </p>
               <div className='flex justify-center'>
                  <div className='text-md md:text-xl bg-white h-full overflow-y-auto rounded-lg p-6 mb-4 mx-2 w-full lg:w-5/6'>
                     <p className='font-bold'> คำชี้แจ้ง </p>
                     <p className='ml-4 mt-2'>1. แบบทดสอบ มีทั้งหมด 5 ข้อ</p>
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
                     <p className='ml-4 mt-2'>
                        2. ให้น้อง ๆ ส่งคำตอบ โดยกดปุ่ม ส่ง (Submit){" "}
                        <span className='font-bold'>
                           ภายในวันศุกร์ที่ 17 มีนาคม 2566 เวลา 23.59 น.
                        </span>
                        หรือก่อนหมดเวลายืนยันสิทธิ์
                     </p>
                     <p className='ml-4 mt-2'>
                        3. น้อง ๆ สามารถใช้อินเตอร์เน็ตในการค้นคว้าหาคําตอบได้
                     </p>
                     <p className='ml-4 mt-2'>
                        4. แบบทดสอบไม่มีการแก้ไขใด ๆ หากแบบทดสอบมีปัญหาให้น้องเขียนสมมติฐานประกอบการตัดสินใจ
                     </p>
                     <p className='ml-4 mt-2'>
                        5. การประเมินผลการคัดเลือก จะเน้นหลักการ และแนวคิดในการตอบคำถามเป็นหลัก
                     </p>
                     <p className='ml-4 mt-2'>
                        6. บททดสอบไม่มีผลต่อการคัดเลือกใด ๆ เป็นเพียงการวัดพื้นฐานของน้อง ๆ เท่านั้น
                     </p>

                     <p className='font-bold text-center mt-8 text-md lg:text-xl xl:text-2xl'>
                        บททดสอบชุดนี้เป็นเพียงการวัดพื้นฐานของน้อง ๆ ไม่มีผลต่อการคัดเลือกใด ๆ แต่อยากให้น้อง ๆ ตั้งใจทําอย่างสุดความสามารถ
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
export default ExaminationInfo;
