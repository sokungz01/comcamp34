import { useEffect, useState } from "react";
import Inputbox from "@/components/Inputbox";
import SelectInput from "@/components/SelectInput";
import TelInput from "@/components/Telephoneinputbox";
import EmailInput from "@/components/EmailInput";
import CheckboxInput from "@/components/Checkboxinput";

export const ParentDataForm = () => {
   const [sameParent, setsameParent] = useState(false);
   const [parent_pname, setparent_pname] = useState();
   const [parent_fname, setparent_fname] = useState<string>("");
   const [parent_mname, setparent_mname] = useState<string>("");
   const [parent_sname, setparent_sname] = useState<string>("");
   const [parent_relation, setparent_relation] = useState<string>("");
   const [parent_mobile, setparent_mobile] = useState<string>("");
   const [parent_email, setparent_email] = useState<string>("");
   const [emergency_fname, setemergency_fname] = useState<string>("");
   const [emergency_pname, setemergency_pname] = useState();
   const [emergency_mname, setemergency_mname] = useState<string>("");
   const [emergency_sname, setemergency_sname] = useState<string>("");
   const [emergency_relation, setemergency_relation] = useState<string>("");
   const [emergency_mobile, setemergency_mobile] = useState<string>("");
   const [emergency_email, setemergency_email] = useState<string>("");

   useEffect(() => {
      if (sameParent) {
         setemergency_fname(parent_fname);
         setemergency_pname(parent_pname);
         setemergency_mname(parent_mname);
         setemergency_sname(parent_sname);
         setemergency_relation(parent_relation);
         setemergency_mobile(parent_mobile);
         setemergency_email(parent_email);
      }
   });
   return (
      <div className='flex mt-8 justify-center'>
         <div className='bg-red1 bg-opacity-10 w-11/12 lg:rounded-2xl rounded-lg flex flex-col font-bai-jamjuree lg:px-16 px-6 py-4 pb-12'>
            <div className='flex'>
               <img src='/assets/regisPage/green_postit.svg' className='lg:w-16 lg:mt-8 mt-8 w-8' />
               <p className='text-red2 lg:text-5xl text-3xl font-semibold mt-8 ml-2'>
                  ข้อมูลติดต่อผู้ปกครอง
               </p>
            </div>
            <div className='grid lg:grid-cols-7 grid-cols-3 mt-8 lg:mt-7'>
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
                     setObj={setparent_pname}
                     obj={parent_pname}
                  />
               </div>
               <div className='col-span-2  w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2 pl-3'>
                  <Inputbox
                     label='ชื่อ'
                     name='parent_fname'
                     placeholder='ธนาธร'
                     required
                     obj={parent_fname}
                     setObj={setparent_fname}
                  />
               </div>
               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                  <Inputbox
                     label='ชื่อกลาง (ถ้ามี)'
                     name='parent_mname'
                     placeholder=''
                     required
                     obj={parent_mname}
                     setObj={setparent_mname}
                  />
               </div>
               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-6 lg:pl-2'>
                  <Inputbox
                     label='นามสกุล'
                     name='parent_sname'
                     placeholder=''
                     required
                     obj={parent_sname}
                     setObj={setparent_sname}
                  />
               </div>
            </div>
            <div className='grid lg:grid-cols-7 grid-cols-3 lg:mt-6'>
               <div className='lg:col-span-1 col-span-3 mt-2 lg:mt-0 w-full xl:pr-6 lg:pr-2'>
                  <Inputbox
                     label='ความสัมพันธ์'
                     name='parent_relation'
                     placeholder=''
                     required
                     obj={parent_relation}
                     setObj={setparent_relation}
                  />
               </div>
               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-1 w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                  <TelInput
                     label='เบอร์โทรศัพท์'
                     name='parent_mobile'
                     placeholder=''
                     required
                     obj={parent_mobile}
                     setobj={setparent_mobile}
                  />
               </div>
               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-1 w-full xl:pl-6 lg:pl-2'>
                  <EmailInput
                     label='Email'
                     name='parent_email'
                     placeholder=''
                     obj={parent_email}
                     setObj={setparent_email}
                  />
               </div>
            </div>
            <div className='flex'>
               <img src='/assets/regisPage/red_postit.svg' className='lg:w-16 lg:mt-8 mt-8 w-8' />
               <p className='text-red2 lg:text-5xl text-3xl font-semibold mt-8 ml-2'>
                  ผู้ปกครองที่ติดต่อได้ในกรณีฉุกเฉิน
               </p>
            </div>
            <div className='flex flex-row my-4'>
               <p className='mr-2'> ข้อมูลติดต่อเดียวกันกับข้อมูลด้านบน </p>
               <div >
                  <CheckboxInput
                     onclick={() => (sameParent ? setsameParent(false) : setsameParent(true))}
                     setobj={setsameParent}
                     obj={sameParent}
                     name='same_parent'
                     label=' '
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
                     setObj={setemergency_pname}
                     obj={emergency_pname}
                  />
               </div>
               <div className='col-span-2  w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2 pl-3'>
                  <Inputbox
                     label='ชื่อ'
                     name='emergency_fname'
                     placeholder='ธนาธร'
                     required
                     setObj={setemergency_fname}
                     obj={emergency_fname}
                  />
               </div>
               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                  <Inputbox
                     label='ชื่อกลาง (ถ้ามี)'
                     name='emergency_mname'
                     placeholder=''
                     required
                     setObj={setemergency_mname}
                     obj={emergency_mname}
                  />
               </div>
               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-6 lg:pl-2'>
                  <Inputbox
                     label='นามสกุล'
                     name='emergency_sname'
                     placeholder=''
                     required
                     setObj={setemergency_sname}
                     obj={emergency_sname}
                  />
               </div>
            </div>
            <div className='grid lg:grid-cols-7 grid-cols-3 lg:mt-6'>
               <div className='lg:col-span-1 col-span-3 mt-2 lg:mt-0 w-full xl:pr-6 lg:pr-2'>
                  <Inputbox
                     label='ความสัมพันธ์'
                     name='emergency_relation'
                     placeholder=''
                     required
                     setObj={setemergency_relation}
                     obj={emergency_relation}
                  />
               </div>

               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-1 w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                  <TelInput
                     label='เบอร์โทรศัพท์'
                     name='emergency_mobile'
                     placeholder=''
                     required
                     setobj={setemergency_mobile}
                     obj={emergency_mobile}
                  />
               </div>
               <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-1 w-full xl:pl-6 lg:pl-2'>
                  <EmailInput
                     label='Email'
                     name='emergency_email'
                     placeholder=''
                     setObj={setemergency_email}
                     obj={emergency_email}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};
