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
      <div className="flex justify-center">
         <div className='bg-red1 bg-opacity-10 w-11/12 rounded-xl flexflex-col font-bai-jamjuree px-16 py-4'>
            <h4 className='text-4xl text-red2 font-semibold mb-2'> ข้อมูลผู้ปกครอง </h4>
            <div className='flex mt-4 '>
               <div className='w-1/6 mr-2'>
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
               <div className='flex flex-row w-5/6'>
                  <div className='mx-2 w-full'>
                     <Inputbox
                        label='ชื่อ'
                        name='parent_fname'
                        placeholder='ธนาธร'
                        required
                        obj={parent_fname}
                        setObj={setparent_fname}
                     />
                  </div>
                  <div className='mx-2 w-full'>
                     <Inputbox
                        label='ชื่อกลาง (ถ้ามี)'
                        name='parent_mname'
                        placeholder=''
                        required
                        obj={parent_mname}
                        setObj={setparent_mname}
                     />
                  </div>
                  <div className='mx-2 w-full'>
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
            </div>
            <div className='flex  mt-2'>
               <div className='flex justify-between'>
                  <div className='w-full mr-2'>
                     <Inputbox
                        label='ความสัมพันธ์'
                        name='parent_relation'
                        placeholder=''
                        required
                        obj={parent_relation}
                        setObj={setparent_relation}
                     />
                  </div>
                  <div className='w-full ml-2'>
                     <TelInput
                        label='เบอร์โทรศัพท์'
                        name='parent_mobile'
                        placeholder=''
                        required
                        obj={parent_mobile}
                        setobj={setparent_mobile}
                     />
                  </div>
                  <div className='w-full ml-2'>
                     <EmailInput
                        label='Email'
                        name='parent_email'
                        placeholder=''
                        obj={parent_email}
                        setObj={setparent_email}
                     />
                  </div>
               </div>
            </div>

            <h4 className='text-4xl text-red2 font-semibold mb-2 mt-2'>
               ผู้ปกครองที่ติดต่อได้ในกรณีฉุกเฉิน
            </h4>
            <div className='flex mt-4'>
               <p className='mr-2'> เหมือนกับผู้ปกครอง </p>
               <CheckboxInput
                  onclick={() => (sameParent ? setsameParent(false) : setsameParent(true))}
                  setobj={setsameParent}
                  obj={sameParent}
                  name='same_parent'
                  label=' '
               />
               <p className='ml-2'> </p>
            </div>
            <div className='flex mt-4'>
               <div className='w-1/6 mr-2'>
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
               <div className='flex flex-row w-5/6'>
                  <div className='mx-2 w-full'>
                     <Inputbox
                        label='ชื่อ'
                        name='emergency_fname'
                        placeholder='ธนาธร'
                        required
                        setObj={setemergency_fname}
                        obj={emergency_fname}
                     />
                  </div>
                  <div className='mx-2 w-full'>
                     <Inputbox
                        label='ชื่อกลาง (ถ้ามี)'
                        name='emergency_mname'
                        placeholder=''
                        required
                        setObj={setemergency_mname}
                        obj={emergency_mname}
                     />
                  </div>
                  <div className='mx-2 w-full'>
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
            </div>
            <div className='flex  mt-2'>
               <div className='w-full mr-2'>
                  <Inputbox
                     label='ความสัมพันธ์'
                     name='emergency_relation'
                     placeholder=''
                     required
                     setObj={setemergency_relation}
                     obj={emergency_relation}
                  />
               </div>
               <div className='flex justify-center'>
                  <div className='w-full ml-2'>
                     <TelInput
                        label='เบอร์โทรศัพท์'
                        name='emergency_mobile'
                        placeholder=''
                        required
                        setobj={setemergency_mobile}
                        obj={emergency_mobile}
                     />
                  </div>
                  <div className='w-full ml-2'>
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
      </div>
   );
};
