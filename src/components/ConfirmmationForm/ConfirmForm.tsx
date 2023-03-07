import { useEffect, useState } from "react";
import SelectInput from "@/components/SelectInput";
import Inputbox from "@/components/Textareainput";
import FileUploaderComponent from "@/components/FileUploaderComponent";
import { DateForm, Confirmation } from "@/types/ConfirmationType";
import shirtsize from "@/components/registrationForm/DropdownData/shirtsize_data.json";
const ConfirmForm = ({
   data,
   setData,
   dateData,
   setDateData,
   confirm,
   setConfirm,
}: {
   data: Confirmation;
   setData: any;
   dateData: DateForm;
   setDateData: any;
   confirm: boolean;
   setConfirm: any;
}) => {
   const [uploadstatus, setUploadstatus] = useState<boolean>(false);
   const hours = new Array();
   for (let i = 0; i < 24; i++) {
      let convert: unknown = i;
      if (i < 10) {
        hours.push("0" + (convert as string));
         continue;
      }
      hours.push(i);
   }
   const minutes = new Array();
   for (let i = 0; i < 60; i++) {
      let convert: unknown = i;
      if (i < 10) {
         minutes.push("0" + (convert as string));
         continue;
      }
      minutes.push(i);
   }
   const hours_data = hours.map(items => ({
      label: items,
      value: items,
   }));
   const minutes_data = minutes.map(items => ({
      label: items,
      value: items,
   }));
   const shirtsize_data = shirtsize.map(items => ({
      label: items.label,
      value: items.value,
   }));

   useEffect(() => {
      const format_date = dateData.date + "-" + dateData.month + "-" + dateData.year;
      setData({ ...data, transaction_date: format_date });
   }, [dateData.date, dateData.month, dateData.year]);

   useEffect(() => {
      if (data.isConfirm === "0") setConfirm(false);
      else setConfirm(true);
   }, [data.isConfirm]);

   return (
      <>
         <div className='flex justify-center mt-8'>
            <div className='bg-yellow3 bg-opacity-40 lg:rounded-2xl rounded-lg flex flex-col font-bai-jamjuree lg:px-16 px-6 pt-4 py-8 w-11/12'>
               <div className='flex items-end'>
                  <img
                     src='/assets/regisPage/yellow_postit.svg'
                     className='lg:w-16 lg:mt-8 mt-2 ml-2 w-8'
                  />
                  <p className='text-red2 lg:text-5xl text-xl lg:font-semibold font-bold lg:mt-8 mt-2 ml-2'>
                     ข้อมูลที่ใช้ในการยืนยันสิทธิ์
                  </p>
               </div>
               <div className='grid grid-cols-12 lg:gap-8 my-6 items-center'>
                  <div className='col-span-12 lg:col-span-7 mt-3 lg:mt-0 lg:ml-8'>
                     <p className='lg:font-semibold font-bold lg:text-2xl text-md'>
                        น้องยืนยันที่จะเข้าร่วมค่ายคอมแคมป์ 34 หรือไม่?
                        <span className='text-orange'>*</span>
                     </p>
                     <SelectInput
                        label=' '
                        name='isConfirm'
                        placeholder={"โปรดเลือก"}
                        obj={data}
                        setObj={setData}
                        options={[
                           { label: "ยืนยัน", value: "1" },
                           { label: "สละสิทธิ์", value: "0" },
                        ]}
                        value={data.isConfirm}
                     />
                  </div>
                  <div className='hidden lg:block lg:col-span-2'></div>
                  <div className='col-span-12 lg:col-span-3 mt-3 lg:mt-0 lg:mr-8'>
                     <p className='lg:font-semibold font-bold lg:text-2xl text-md'>
                        ขนาดเสื้อ
                        <span className='text-orange'>*</span>
                     </p>
                     <SelectInput
                        label=' '
                        name='shirt_size'
                        placeholder={"โปรดเลือก"}
                        obj={data}
                        setObj={setData}
                        options={shirtsize_data}
                        value={data.shirt_size}
                        disabled={!confirm}
                     />
                  </div>
               </div>
               <div className='flex flex-col'>
                  <div>
                     <p className='lg:font-semibold font-bold lg:text-2xl text-md lg:ml-8'>
                        อธิบายขั้นตอนการเดินทางมามหาวิทยาลัยโดยละเอียด
                        <span className='text-orange'>*</span>
                     </p>
                  </div>
                  <div className='w-full'>
                     <Inputbox
                        name='describeTravel'
                        row={6}
                        obj={data}
                        setObj={setData}
                        placeholder="เดินทางโดยรถตู้สาธารณะจากท่ารถตู้แม่กลองลงที่ตลาดบางปะแก้ว แล้วข้ามฝั่งขึ้นรถเมล์สาย 21/75 มาลงที่มหาวิทยาลัย"
                        value={data.describeTravel}
                        disabled={!confirm}
                     />
                  </div>
               </div>
               <div className='flex flex-col'>
                  <div>
                     <p className='lg:font-semibold font-bold lg:text-2xl text-md lg:ml-8'>
                        อธิบายขั้นตอนการเดินทางกลับบ้านโดยละเอียด
                        <span className='text-orange'>*</span>
                     </p>
                  </div>
                  <div className='w-full'>
                     <Inputbox
                        name='describeBackhome'
                        row={6}
                        obj={data}
                        setObj={setData}
                        placeholder="นั่งรถเมล์สาย 21/75 จากบริเวณด้านหน้ามหาวิทยาลัย ไปลงตลาดบางปะแก้ว แล้วจึงนั่งรถตู้จากตลาดบางปะแก้วกลับสู่ท่ารถตู้แม่กลอง"
                        value={data.describeBackhome}
                        disabled={!confirm}
                     />
                  </div>
               </div>
               <hr className='h-px my-8 bg-black/30 border-0' />
               <div className='flex mt-3 lg:mt-0'>
                  <img
                     src='/assets/regisPage/green_postit.svg'
                     className='lg:w-16 lg:mt-8 mt-2 ml-2 w-8'
                  />
                  <div className='flex flex-col'>
                     <p className='text-red2 lg:text-5xl text-xl lg:font-semibold font-bold lg:mt-8 mt-2 ml-2'>
                        หลักฐานการโอนเงิน
                     </p>
                     <p className='text-sm lg:text-xl lg:mt-3 ml-2 lg:ml-3'>
                        จะทำการคืนเงินค่ายืนยันสิทธิ์ให้หลังจบค่าย
                     </p>
                  </div>
               </div>
               <div className='flex mt-6'>
                  <div className='m-auto'>
                     <div className='flex flex-col items-center'>
                        <img
                           src='/assets/confirmationPage/qrcode.png'
                           className='w-48 lg:w-64 rounded-2xl border-4 border-black/40'
                        />
                        <p className='text-lg lg:text-2xl font-bold mt-3'>
                           <span className='mr-2'>ชื่อบัญชี</span>
                           <span className='mr-2'>:</span>
                           นายอัฐฐ์ อัชชะ
                        </p>
                     </div>
                  </div>
               </div>
               <div className='flex w-full justify-center lg:mt-3'>
                  <div className='mt-3 lg:w-5/6 xl:w-4/5'>
                     <FileUploaderComponent
                        label='หลักฐานการโอนเงินค่ามัดจำในการเข้าร่วมค่าย Comcamp 34'
                        filePath='transaction_URL'
                        fileType='image'
                        obj={data}
                        setObj={setData}
                        fileName={data.transaction_Name}
                        setStatus={setUploadstatus}
                        value={data.transaction_URL}
                        required
                        disabled={!confirm}
                        showPreview
                     />
                  </div>
               </div>
               <p className='lg:font-semibold font-bold lg:text-2xl text-md mt-6 mb-3'>
                  วัน-เวลาในการโอนเงินมัดจำ (อ้างอิงจากสลิป) <span className='text-orange'>*</span>
               </p>
               <div className='grid grid-cols-12 gap-2 lg:gap-4'>
                  <div className='col-span-4 lg:col-span-2'>
                     <SelectInput
                        label='วัน'
                        name='date'
                        placeholder={"วัน"}
                        options={[
                           { label: "15", value: "15" },
                           { label: "16", value: "16" },
                           { label: "17", value: "17" },
                           { label: "18", value: "18" },
                           { label: "19", value: "19" },
                           { label: "20", value: "20" },
                           { label: "21", value: "21" },
                           { label: "22", value: "22" },
                        ]}
                        obj={dateData}
                        setObj={setDateData}
                        value={dateData.date}
                        disabled={!confirm}
                     />
                  </div>
                  <div className='col-span-4 lg:col-span-3'>
                     <SelectInput
                        label='เดือน'
                        name='month'
                        placeholder={"เดือน"}
                        options={[{ label: "มีนาคม", value: "มีนาคม" }]}
                        obj={dateData}
                        setObj={setDateData}
                        value={dateData.month}
                        disabled={!confirm}
                     />
                  </div>
                  <div className='col-span-4 lg:col-span-2'>
                     <SelectInput
                        label='ปี'
                        name='year'
                        placeholder={"ปี"}
                        options={[{ label: "2023", value: "2023" }]}
                        obj={dateData}
                        setObj={setDateData}
                        value={dateData.year}
                        disabled={!confirm}
                     />
                  </div>
                  <div className='hidden lg:block lg:col-span-1'></div>
                  <div className='col-span-6 lg:col-span-2'>
                     <SelectInput
                        label='ชั่วโมง'
                        name='transaction_hours'
                        placeholder={"ชั่วโมง"}
                        options={hours_data}
                        obj={data}
                        setObj={setData}
                        value={data.transaction_hours}
                        disabled={!confirm}
                     />
                  </div>
                  <div className='col-span-6 lg:col-span-2'>
                     <SelectInput
                        label='นาที'
                        name='transaction_minutes'
                        placeholder={"นาที"}
                        options={minutes_data}
                        obj={data}
                        setObj={setData}
                        value={data.transaction_minutes}
                        disabled={!confirm}
                     />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
export default ConfirmForm;
