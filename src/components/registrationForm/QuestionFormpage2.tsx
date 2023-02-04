import Textarea from "@/components/Textareainput"

export const QuestionFormpage2 = () =>{
    return(
        <>
        <div className="flex justify-center mt-8">
        <div className="bg-red1 bg-opacity-10 flex flex-col font-bai-jamjuree w-11/12 lg:rounded-2xl rounded-lg lg:mx-40 mx-6 lg:px-40 pt-12 px-6">
            <div className=" text-5xl font-bold lg:mb-24 mb-8 flex"><img src='/assets/regisPage/green_postit.svg' className='lg:w-16 lg:mt-8 mt-8 w-8'/><p className="text-red2 lg:text-5xl text-3xl font-semibold mt-8 ml-2">คำถามในการเลือก</p></div>
            <ul>
                <li><p>4. น้อง ๆ คิดว่า ในอีก 10 ปีข้างหน้า อะไรจะเปลี่ยนแปลงไป และอะไรจะยังคงเหมือนเดิมบ้าง (ยกตัวอย่างมาอย่างน้อย 3 ข้อ ไม่จำเป็นต้องเป็นเรื่องเทคโนโลยี) และน้อง ๆ คิดว่าตัวเองจะปรับตัวให้เข้ากับสิ่งที่เปลี่ยนแปลงอย่างไร และจะใช้ประโยชน์จากสิ่งที่จะไม่เปลี่ยนแปลงได้อย่างไรบ้าง</p></li>
                <li><Textarea name="q4" row={4} className="lg:px-8 lg:py-8 px-3 py-2 lg:mx-7 mx-1 lg:mt-12 mt-6 lg:mb-16 mb-7"/></li>
                <li><p>5. ถ้าหากน้องได้รับทุนในการทำธุรกิจก้อนหนึ่ง น้องจะเลือกทำธุรกิจอะไร เพราะอะไรน้องถึงเลือกทำธุรกิจนั้น และจะสร้างเทคโนโลยีอะไรมาเพื่อมาพัฒนาธุรกิจของตนเอง และเพราะอะไรถึงเลือกเทคโนโลยีนั้น</p></li>
                <li><Textarea name="q5" row={4} className="lg:px-8 lg:py-8 px-3 py-2 lg:mx-7 mx-1 lg:mt-12 mt-6 lg:mb-16 mb-7"/></li>
                <li><p>6. จงแต่งเรื่องจากคำที่กำหนดให้ต่อไปนี้  comcamp34, นัมโดซาน, ห่านบางมด, y2k, พุดดิ้งมะพร้าวอ่อน, ทรงอย่างแบด, โมโม่, ตึกแดง</p></li>
                <li><Textarea name="q6" row={4} className="lg:px-8 lg:py-8 px-3 py-2 lg:mx-7 mx-1 lg:mt-12 mt-6 lg:mb-16 mb-7"/></li>
            </ul>
        </div>
        </div>
        </>
    );
};