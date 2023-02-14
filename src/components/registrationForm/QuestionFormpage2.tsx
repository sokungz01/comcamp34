import Textarea from "@/components/Textareainput";
import { useState, useEffect } from "react";
import { QuestionPage2 } from "@/types/RegistrationType";
import { getData, updateData } from "@/lib/Fetch";

export const QuestionFormpage2 = ({ data, setData }: { data: QuestionPage2; setData: any }) => {
   return (
      <>
         <div className='flex justify-center mt-8'>
            <div className='bg-red2 bg-opacity-10 flex flex-col font-bai-jamjuree w-11/12 lg:rounded-2xl rounded-lg lg:mx-40 mx-6 lg:px-8 xl:px-32 px-6 py-4 pb-8'>
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
                  question='4.น้อง ๆ คิดว่า ในอีก 10 ปีข้างหน้า อะไรจะเปลี่ยนแปลงไป และอะไรจะยังคงเหมือนเดิมบ้าง (ยกตัวอย่างมาอย่างน้อย 3 ข้อ ไม่จำเป็นต้องเป็นเรื่องเทคโนโลยี) และน้อง ๆ คิดว่าตัวเองจะปรับตัวให้เข้ากับสิ่งที่เปลี่ยนแปลงอย่างไร และจะใช้ประโยชน์จากสิ่งที่จะไม่เปลี่ยนแปลงได้อย่างไรบ้าง'
                  name='q4'
                  row={6}
                  setObj={setData}
                  obj={data}
                  value={data.q4}
               />
               <Textarea
                  question='5.ถ้าหากน้องได้รับทุนในการทำธุรกิจก้อนหนึ่ง น้องจะเลือกทำธุรกิจอะไร เพราะอะไรน้องถึงเลือกทำธุรกิจนั้น และจะสร้างเทคโนโลยีอะไรมาเพื่อมาพัฒนาธุรกิจของตนเอง และเพราะอะไรถึงเลือกเทคโนโลยีนั้น'
                  name='q5'
                  row={6}
                  setObj={setData}
                  obj={data}
                  value={data.q5}
               />
               <Textarea
                  question='6.จงแต่งเรื่องจากคำที่กำหนดให้ต่อไปนี้  comcamp34, นัมโดซาน, ห่านบางมด, y2k, พุดดิ้งมะพร้าวอ่อน, ทรงอย่างแบด, โมโม่, ตึกแดง'
                  name='q6'
                  row={6}
                  setObj={setData}
                  obj={data}
                  value={data.q6}
               />
               <p className="lg:text-lg text-sm">7.ภาควิชาคอมพิวเตอร์กำลังจัดงาน Comcamp 34 ให้น้อง ๆ ทุกคนที่ผ่านเข้ารอบ โดยมีการจัดเลี้ยงน้ำชาต้อนรับภายในเวลา 1 ชม. โดยในชามีส่วนผสมของน้ำตาล ซึ่งพี่ยิมได้ซื้อน้ำตาลมา 512 ก้อน แล้วพบว่ามีการหยิบยาเบื่อหนูมา 1 ก้อน ซึ่งมีลักษณะคล้ายน้ำตาล ไม่สามารถแยกด้วยตาเปล่าได้ พี่ยิมซึ่งเป็นพี่ที่มีเกรดเฉลี่ยเป็นอันดับ 1 ของภาควิชา ได้ค้นหาวิธีทดสอบโดยการใช้มดมาชิมน้ำตาล</p>
               <p className="lg:text-lg text-sm font-semibold">คำถาม : พี่ยิมต้องใช้มดจำนวนน้อยที่สุดกี่ตัวในการหาว่าก้อนไหนเป็นยาเบื่อหนู (ยาเบื่อหนูออกฤทธิ์ภายในเวลา 1 ชม.) จงเขียนอธิบายหลักการโดยละเอียด</p>
               <Textarea
                  question=' '
                  name='q7'
                  row={6}
                  setObj={setData}
                  obj={data}
                  value={data.q7}
               />
            </div>
         </div>
      </>
   );
};
