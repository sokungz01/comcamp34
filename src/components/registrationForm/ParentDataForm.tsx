import { useEffect, useState } from "react";
import Inputbox from "@/components/Inputbox";
import SelectInput from "@/components/SelectInput";
import TelInput from "@/components/Telephoneinputbox";
import EmailInput from "@/components/EmailInput";
import CheckboxInput from "@/components/Checkboxinput";

export const ParentDataForm = () => {
   const [value,setValue] = useState({
      parent_pname:'',
      parent_fname:'',
      parent_mname:'',
      parent_sname:'',
      parent_relation:'',
      parent_mobile:'',
      parent_email:'',
      same_parent:false,
      emergency_pname:'',
      emergency_fname:'',
      emergency_mname:'',
      emergency_sname:'',
      emergency_relation:'',
      emergency_mobile:'',
      emergency_email:'',
   });

   useEffect(() => {
      if (value.same_parent) {
         setValue({ ...value , 
            emergency_pname : value.parent_pname,
            emergency_fname : value.parent_fname,
            emergency_mname : value.parent_mname,
            emergency_sname : value.parent_sname,
            emergency_relation : value.parent_relation,
            emergency_mobile : value.parent_mobile,
            emergency_email : value.parent_email
         });
      }
   },[value.same_parent,value.parent_pname,value.parent_fname,value.parent_mname,value.parent_sname,value.parent_relation,value.parent_mobile,value.parent_email]);

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
                     setObj={setValue}
                     obj={value}
                     value={value.parent_pname}
                  />
               </div>
               <div className='col-span-2  w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2 pl-3'>
                  <Inputbox
                     label='ชื่อ'
                     name='parent_fname'
                     placeholder='สมชาย'
                     required
                     setObj={setValue}
                     obj={value}
                     value={value.parent_fname}
                  />
               </div>
               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                  <Inputbox
                     label='ชื่อกลาง (ถ้ามี)'
                     name='parent_mname'
                     placeholder='-'
                     required
                     setObj={setValue}
                     obj={value}
                     value={value.parent_mname}
                  />
               </div>
               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-6 lg:pl-2 xl:pr-6 lg:pr-2'>
                  <Inputbox
                     label='นามสกุล'
                     name='parent_sname'
                     placeholder='อารมณ์ดี'
                     required
                     setObj={setValue}
                     obj={value}
                     value={value.parent_sname}
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
                     setObj={setValue}
                     obj={value}
                     value={value.parent_relation}
                  />
               </div>
               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-1 w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                  <TelInput
                     label='เบอร์โทรศัพท์'
                     name='parent_mobile'
                     placeholder='0911000000'
                     required
                     setObj={setValue}
                     obj={value}
                     value={value.parent_mobile}
                  />
               </div>
               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-1 w-full xl:pl-6 lg:pl-2 xl:pr-6 lg:pr-2'>
                  <EmailInput
                     label='Email'
                     name='parent_email'
                     placeholder='somchai@gmail.com'
                     setObj={setValue}
                     obj={value}
                     value={value.parent_email}
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
               <div >
                  <CheckboxInput
                     name='same_parent'
                     label=' '
                     checked={value.same_parent}
                     obj={value}
                     setObj={setValue}
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
                     setObj={setValue}
                     obj={value}
                     value={value.emergency_pname}
                  />
               </div>
               <div className='col-span-2  w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2 pl-3'>
                  <Inputbox
                     label='ชื่อ'
                     name='emergency_fname'
                     placeholder='สมหญิง'
                     required
                     setObj={setValue}
                     obj={value}
                     value={value.emergency_fname}
                  />
               </div>
               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                  <Inputbox
                     label='ชื่อกลาง (ถ้ามี)'
                     name='emergency_mname'
                     placeholder='-'
                     required
                     setObj={setValue}
                     obj={value}
                     value={value.emergency_mname}
                  />
               </div>
               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-6 lg:pl-2 xl:pr-6 lg:pr-2'>
                  <Inputbox
                     label='นามสกุล'
                     name='emergency_sname'
                     placeholder='อารมณ์ดี'
                     required
                     setObj={setValue}
                     obj={value}
                     value={value.emergency_sname}
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
                     setObj={setValue}
                     obj={value}
                     value={value.emergency_relation}
                  />
               </div>

               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-1 w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                  <TelInput
                     label='เบอร์โทรศัพท์'
                     name='emergency_mobile'
                     placeholder='0922000000'
                     required
                     setObj={setValue}
                     obj={value}
                     value={value.emergency_mobile}
                  />
               </div>
               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-1 w-full xl:pl-6 lg:pl-2 xl:pr-6 lg:pr-2'>
                  <EmailInput
                     label='Email'
                     name='emergency_email'
                     placeholder='-'
                     setObj={setValue}
                     obj={value}
                     value={value.emergency_email}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};
