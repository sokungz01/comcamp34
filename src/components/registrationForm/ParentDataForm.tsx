import { useEffect, useState } from "react";
import Inputbox from "@/components/Inputbox";
import SelectInput from "@/components/SelectInput";
import TelInput from "@/components/Telephoneinputbox";
import EmailInput from "@/components/EmailInput";
import CheckboxInput from "@/components/Checkboxinput";

export const ParentDataForm = ({
   data,
   setData,
}: {
   data: {
      parent_pname: string;
      parent_fname: string;
      parent_mname: string;
      parent_sname: string;
      parent_relation: string;
      parent_mobile: string;
      parent_email: string;
      same_parent: boolean;
      emergency_pname: string;
      emergency_fname: string;
      emergency_mname: string;
      emergency_sname: string;
      emergency_relation: string;
      emergency_mobile: string;
      emergency_email: string;
   };
   setData: any;
}) => {
   useEffect(() => {
      if (data.same_parent) {
         setData({
            ...data,
            emergency_pname: data.parent_pname,
            emergency_fname: data.parent_fname,
            emergency_mname: data.parent_mname,
            emergency_sname: data.parent_sname,
            emergency_relation: data.parent_relation,
            emergency_mobile: data.parent_mobile,
            emergency_email: data.parent_email,
         });
      }
   }, [
      data.same_parent,
      data.parent_pname,
      data.parent_fname,
      data.parent_mname,
      data.parent_sname,
      data.parent_relation,
      data.parent_mobile,
      data.parent_email,
   ]);

   return (
      <div className='flex mt-8 justify-center'>
         <div className='bg-red1 bg-opacity-10 w-11/12 lg:rounded-2xl rounded-lg flex flex-col font-bai-jamjuree lg:px-16 px-6 py-4 pb-12'>
            <div className='flex'>
               <img src='/assets/regisPage/green_postit.svg' className='lg:w-16 lg:mt-8 mt-2 w-8' />
               <p className='text-red2 lg:text-5xl text-2xl font-semibold lg:mt-8 mt-2 ml-2'>
                  ข้อมูลติดต่อผู้ปกครอง
               </p>
            </div>
            <div className='grid lg:grid-cols-7 grid-cols-3 mt-2 lg:mt-8'>
               <div className='col-span-1 lg:col-span-1 w-full xl:pr-6 lg:pr-2'>
                  <SelectInput
                     label='คำนำหน้าชื่อ'
                     name='parent_pname'
                     options={[
                        { label: "นาย", value: "นาย" },
                        { label: "นาง", value: "นาง" },
                        { label: "นางสาว", value: "นางสาว" },
                     ]}
                     required
                     setObj={setData}
                     obj={data}
                     value={data.parent_pname}
                  />
               </div>
               <div className='col-span-2  w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2 pl-3'>
                  <Inputbox
                     label='ชื่อ'
                     name='parent_fname'
                     placeholder='สมชาย'
                     required
                     setObj={setData}
                     obj={data}
                     value={data.parent_fname}
                  />
               </div>
               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                  <Inputbox
                     label='ชื่อกลาง (ถ้ามี)'
                     name='parent_mname'
                     placeholder='-'
                     required
                     setObj={setData}
                     obj={data}
                     value={data.parent_mname}
                  />
               </div>
               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-6 lg:pl-2 xl:pr-6 lg:pr-2'>
                  <Inputbox
                     label='นามสกุล'
                     name='parent_sname'
                     placeholder='อารมณ์ดี'
                     required
                     setObj={setData}
                     obj={data}
                     value={data.parent_sname}
                  />
               </div>
            </div>
            <div className='grid lg:grid-cols-7 grid-cols-3 lg:mt-6'>
               <div className='lg:col-span-1 col-span-3 mt-2 lg:mt-0 w-full xl:pr-6 lg:pr-2'>
                  <Inputbox
                     label='ความสัมพันธ์'
                     name='parent_relation'
                     placeholder='บิดา'
                     required
                     setObj={setData}
                     obj={data}
                     value={data.parent_relation}
                  />
               </div>
               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-1 w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                  <TelInput
                     label='เบอร์โทรศัพท์'
                     name='parent_mobile'
                     placeholder='0911000000'
                     required
                     setObj={setData}
                     obj={data}
                     value={data.parent_mobile}
                  />
               </div>
               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-1 w-full xl:pl-6 lg:pl-2 xl:pr-6 lg:pr-2'>
                  <EmailInput
                     label='Email'
                     name='parent_email'
                     placeholder='somchai@gmail.com'
                     setObj={setData}
                     obj={data}
                     value={data.parent_email}
                  />
               </div>
            </div>
            <div className='flex'>
               <img src='/assets/regisPage/red_postit.svg' className='lg:w-16 lg:mt-8 mt-2 w-8' />
               <p className='text-red2 lg:text-5xl text-2xl font-semibold lg:mt-8 mt-2 ml-2'>
                  ผู้ปกครองที่ติดต่อได้ในกรณีฉุกเฉิน
               </p>
            </div>
            <div className='flex flex-row my-4'>
               <p className='mr-2'> ข้อมูลติดต่อเดียวกันกับข้อมูลด้านบน </p>
               <div>
                  <CheckboxInput
                     name='same_parent'
                     label=' '
                     checked={data.same_parent}
                     obj={data}
                     setObj={setData}
                     
                  />
               </div>
            </div>
            <div className='grid lg:grid-cols-7 grid-cols-3 mt-1 lg:mt-1'>
               <div className='col-span-1 lg:col-span-1 w-full xl:pr-6 lg:pr-2'>
                  <SelectInput
                     label='คำนำหน้าชื่อ'
                     name='emergency_pname'
                     options={[
                        { label: "นาย", value: "นาย" },
                        { label: "นาง", value: "นาง" },
                        { label: "นางสาว", value: "นางสาว" },
                     ]}
                     required
                     setObj={setData}
                     obj={data}
                     value={data.emergency_pname}
                     disabled={data.same_parent}
                  />
               </div>
               <div className='col-span-2  w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2 pl-3'>
                  <Inputbox
                     label='ชื่อ'
                     name='emergency_fname'
                     placeholder='สมหญิง'
                     required
                     setObj={setData}
                     obj={data}
                     value={data.emergency_fname}
                     disabled={data.same_parent}
                  />
               </div>
               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                  <Inputbox
                     label='ชื่อกลาง (ถ้ามี)'
                     name='emergency_mname'
                     placeholder='-'
                     required
                     setObj={setData}
                     obj={data}
                     value={data.emergency_mname}
                     disabled={data.same_parent}
                  />
               </div>
               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-6 lg:pl-2 xl:pr-6 lg:pr-2'>
                  <Inputbox
                     label='นามสกุล'
                     name='emergency_sname'
                     placeholder='อารมณ์ดี'
                     required
                     setObj={setData}
                     obj={data}
                     value={data.emergency_sname}
                     disabled={data.same_parent}
                  />
               </div>
            </div>
            <div className='grid lg:grid-cols-7 grid-cols-3 lg:mt-6'>
               <div className='lg:col-span-1 col-span-3 mt-2 lg:mt-0 w-full xl:pr-6 lg:pr-2'>
                  <Inputbox
                     label='ความสัมพันธ์'
                     name='emergency_relation'
                     placeholder='มารดา'
                     required
                     setObj={setData}
                     obj={data}
                     value={data.emergency_relation}
                     disabled={data.same_parent}
                  />
               </div>

               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-1 w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                  <TelInput
                     label='เบอร์โทรศัพท์'
                     name='emergency_mobile'
                     placeholder='0922000000'
                     required
                     setObj={setData}
                     obj={data}
                     value={data.emergency_mobile}
                     disabled={data.same_parent}
                  />
               </div>
               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-1 w-full xl:pl-6 lg:pl-2 xl:pr-6 lg:pr-2'>
                  <EmailInput
                     label='Email'
                     name='emergency_email'
                     placeholder='-'
                     setObj={setData}
                     obj={data}
                     value={data.emergency_email}
                     disabled={data.same_parent}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};
