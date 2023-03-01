import SelectInput from "@/components/SelectInput";
import Inputbox from "@/components/Textareainput";

const ConfirmForm = () => {
   return (
      <>
         <div className='flex justify-center mt-8'>
            <div className='bg-yellow3 bg-opacity-40 lg:rounded-2xl rounded-lg flex flex-col font-bai-jamjuree lg:px-16 px-6 pt-4 py-8 w-11/12'>
               <div className='flex'>
                  <img
                     src='/assets/regisPage/yellow_postit.svg'
                     className='lg:w-16 lg:mt-8 mt-2 ml-2 w-8'
                  />
                  <p className='text-red2 lg:text-5xl text-3xl font-semibold lg:mt-8 mt-2 ml-2'>
                     ข้อมูลที่ใช้ในการยืนยันสิทธิ์
                  </p>
               </div>
               <div className='grid grid-cols-7 my-6 items-center'>
                  <div className='col-span-4'>
                     <p className='font-semibold text-2xl'>
                        น้องยืนยันที่จะเข้าร่วมค่ายคอมแคมป์ 34 หรือไม่?{" "}
                        <span className='text-orange'>*</span>
                     </p>
                  </div>
                  <div className='col-span-3'>
                     <SelectInput
                        label=' '
                        name='isConfirm'
                        placeholder={"โปรดเลือก"}
                        options={[
                           { label: "ยืนยัน", value: "1" },
                           { label: "สละสิทธิ์", value: "0" },
                        ]}
                        value={""}
                     />
                  </div>
               </div>
               <div className='flex flex-col'>
                  <div>
                     <p className='font-semibold text-2xl'>
                        อธิบายขั้นตอนการเดินทางมามหาวิทยาลัยโดยละเอียด
                        <span className='text-orange'>*</span>
                     </p>
                  </div>
                  <div className='w-full'>
                     <Inputbox name='describeTravel' value='' row={6} />
                  </div>
               </div>
               <hr />
               <div className='flex'>
                  <img
                     src='/assets/regisPage/green_postit.svg'
                     className='lg:w-16 lg:mt-8 mt-2 ml-2 w-8'
                  />
                  <div className='flex flex-col'>
                     <p className='text-red2 lg:text-5xl text-3xl font-semibold lg:mt-8 mt-2 ml-2'>
                        หลักฐานการโอนเงิน
                     </p>
                     <p className='text-lg mt-6 ml-3'>จะทำการคืนเงินค่ามัดจำให้ ณ วันแรกของการเข้าค่าย</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
export default ConfirmForm;
