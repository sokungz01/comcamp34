import { useEffect, useState } from "react";
import Inputbox from "@/components/Inputbox";
import SelectInput from "@/components/SelectInput";
import TelInput from "@/components/Telephoneinputbox";
import EmailInput from "@/components/EmailInput";
import CheckboxInput from "@/components/Checkboxinput";
import { ParentData } from "@/types/RegistrationType";

export const ParentDataForm = ({ data, setData }: { data: ParentData; setData: any }) => {
   useEffect(() => {
      console.log(data);
      if (data.same_parent) {
         setData({
            ...data,
            emergency_prefix: data.parent_prefix,
            emergency_firstname: data.parent_firstname,
            emergency_middlename: data.parent_middlename,
            emergency_surname: data.parent_surname,
            emergency_relation: data.parent_relation,
            emergency_mobile: data.parent_mobile,
            emergency_email: data.parent_email,
         });
      }
   }, [
      data.same_parent,
      data.parent_prefix,
      data.parent_firstname,
      data.parent_middlename,
      data.parent_surname,
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
                     name='parent_prefix'
                     options={[
                        { label: "นาย", value: "นาย" },
                        { label: "นาง", value: "นาง" },
                        { label: "นางสาว", value: "นางสาว" },
                     ]}
                     required
                     setObj={setData}
                     obj={data}
                     value={data.parent_prefix}
                  />
               </div>
               <div className='col-span-2  w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2 pl-3'>
                  <Inputbox
                     label='ชื่อ'
                     name='parent_firstname'
                     placeholder='สมชาย'
                     required
                     setObj={setData}
                     obj={data}
                     value={data.parent_firstname}
                  />
               </div>
               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                  <Inputbox
                     label='ชื่อกลาง (ถ้ามี)'
                     name='parent_middlename'
                     placeholder='-'
                     setObj={setData}
                     obj={data}
                     value={data.parent_middlename}
                  />
               </div>
               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-6 lg:pl-2 xl:pr-6 lg:pr-2'>
                  <Inputbox
                     label='นามสกุล'
                     name='parent_surname'
                     placeholder='อารมณ์ดี'
                     required
                     setObj={setData}
                     obj={data}
                     value={data.parent_surname}
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
                     name='emergency_prefix'
                     options={[
                        { label: "นาย", value: "นาย" },
                        { label: "นาง", value: "นาง" },
                        { label: "นางสาว", value: "นางสาว" },
                     ]}
                     required
                     setObj={setData}
                     obj={data}
                     value={data.emergency_prefix}
                     disabled={data.same_parent}
                  />
               </div>
               <div className='col-span-2  w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2 pl-3'>
                  <Inputbox
                     label='ชื่อ'
                     name='emergency_firstname'
                     placeholder='สมหญิง'
                     required
                     setObj={setData}
                     obj={data}
                     value={data.emergency_firstname}
                     disabled={data.same_parent}
                  />
               </div>
               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                  <Inputbox
                     label='ชื่อกลาง (ถ้ามี)'
                     name='emergency_middlename'
                     placeholder='-'
                     setObj={setData}
                     obj={data}
                     value={data.emergency_middlename}
                     disabled={data.same_parent}
                  />
               </div>
               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-6 lg:pl-2 xl:pr-6 lg:pr-2'>
                  <Inputbox
                     label='นามสกุล'
                     name='emergency_surname'
                     placeholder='อารมณ์ดี'
                     required
                     setObj={setData}
                     obj={data}
                     value={data.emergency_surname}
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
