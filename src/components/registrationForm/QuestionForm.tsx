import Textarea from "@/components/Textareainput"

export const QuestionForm = () =>{
    return(
        <>
        <div className="mx-32 bg-amber-200 rounded-3xl">
        <div className="flex flex-col font-bai-jamjuree px-42.5 my-56 mx-40">
            <div className="mt-12 text-5xl font-bold mb-24"><h3>คำถามในการเลือก</h3></div>
            <ul>
                <li><h3>1. น้อง ๆ คาดหวังอะไรจากค่าย comcamp</h3></li>
                <li><Textarea name="Q1"/></li>
                <li><h3>2. หากน้องได้มาเข้าร่วมค่าย comcamp โดยที่น้องยังไม่ค่อยมีพื้นฐานทางด้านคอมพิวเตอร์มาก่อน และน้องสามารถเลือกกลุ่มได้ น้องจะเลือกอยู่กับกลุ่มที่ยังไม่มีพื้นฐานทางด้านคอมพิวเตอร์เหมือนกัน หรือกลุ่มที่มีพื้นฐานคอมพิวเตอร์ในระดับกลาง-สูง พร้อมเหตุผล</h3></li>
                <li><Textarea name="Q2"/></li>
                <li><h3>3. หากระหว่างการเข้าค่าย comcamp น้อง ๆ พบว่าเพื่อนในกลุ่มมีปัญหา ไม่สนุกกับการทำกิจกรรม หรือไม่อยากมีส่วนร่วมกับกิจกรรมที่กำลังเกิดขึ้น น้อง ๆ จะมีวิธีการพูดคุยหรือแก้ไขปัญหานี้กับเพื่อนคนนั้นอย่างไร?</h3></li>
                <li><Textarea name="Q3"/></li>
            </ul>
        </div>
        </div>
        </>
    );
};