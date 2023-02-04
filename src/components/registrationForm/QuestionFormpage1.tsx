import Textarea from "@/components/Textareainput"

export const QuestionFormpage1 = () =>{
    return(
        <>
        <div className="flex justify-center mt-8">
        <div className="bg-teal-500 bg-opacity-10 flex flex-col font-bai-jamjuree w-11/12 lg:rounded-2xl rounded-lg lg:mx-40 mx-6 lg:px-40 pt-12 px-6">
            <div className=" text-5xl font-bold lg:mb-24 mb-8 flex"><img src='/assets/regisPage/green_postit.svg' className='lg:w-16 lg:mt-8 mt-8 w-8'/><p className="text-red2 lg:text-5xl text-3xl font-semibold mt-8 ml-2">คำถามในการเลือก</p></div>
            <ul>
                <li><p>1. น้อง ๆ คาดหวังอะไรจากค่าย comcamp</p></li>
                <li><Textarea name="q1" row={4} className="lg:px-8 lg:py-8 px-3 py-2 lg:mx-7 mx-1 lg:mt-12 mt-6 lg:mb-16 mb-7"/></li>
                <li><p>2. หากน้องได้มาเข้าร่วมค่าย comcamp โดยที่น้องยังไม่ค่อยมีพื้นฐานทางด้านคอมพิวเตอร์มาก่อน และน้องสามารถเลือกกลุ่มได้ น้องจะเลือกอยู่กับกลุ่มที่ยังไม่มีพื้นฐานทางด้านคอมพิวเตอร์เหมือนกัน หรือกลุ่มที่มีพื้นฐานคอมพิวเตอร์ในระดับกลาง-สูง พร้อมเหตุผล</p></li>
                <li><Textarea name="q2" row={4} className="lg:px-8 lg:py-8 px-3 py-2 lg:mx-7 mx-1 lg:mt-12 mt-6 lg:mb-16 mb-7"/></li>
                <li><p>3. หากระหว่างการเข้าค่าย comcamp น้อง ๆ พบว่าเพื่อนในกลุ่มมีปัญหา ไม่สนุกกับการทำกิจกรรม หรือไม่อยากมีส่วนร่วมกับกิจกรรมที่กำลังเกิดขึ้น น้อง ๆ จะมีวิธีการพูดคุยหรือแก้ไขปัญหานี้กับเพื่อนคนนั้นอย่างไร?</p></li>
                <li><Textarea name="q3" row={4} className="lg:px-8 lg:py-8 px-3 py-2 lg:mx-7 mx-1 lg:mt-12 mt-6 lg:mb-16 mb-7"/></li>
            </ul>
        </div>
        </div>
        </>
    );
};