import { useState } from "react";
import Inputbox from "@/components/Inputbox";
import SelectInput from "@/components/SelectInput";
import TelInput from "@/components/Telephoneinputbox";
import EmailInput from "@/components/EmailInput";
import DropdownSearch from "@/components/DropdownSearch";
import CheckboxInput from "@/components/Checkboxinput";
import date_data from "@/components/registrationForm/DropdownData/date_data.json";
import month_data from "@/components/registrationForm/DropdownData/month_data.json";
import year_data from "@/components/registrationForm/DropdownData/year_data.json";
import provinces_data from "@/components/registrationForm/DropdownData/provinces_data.json";
import shirtsize_data from "@/components/registrationForm/DropdownData/shirtsize_data.json";

export const PersonalInfoForm = () => {
   const [name,setName] = useState<string>("");
   const provinces = provinces_data.map(item => ({
      label: item.name_th,
      value: item.name_en,
   }));
   return (
      <>
         <div className='flex justify-center mt-8'>
            <div className='relative bg-red1 bg-opacity-10 w-11/12 lg:rounded-2xl rounded-lg flex flex-col font-bai-jamjuree lg:px-16 px-6 py-4'>
               <div className="flex">
                  <img src="/assets/regisPage/green_postit.svg" className="lg:w-16 lg:mt-8 mt-8 w-8"/>
                  <p className='text-red2 lg:text-5xl text-3xl font-semibold mt-8 ml-2'> ข้อมูลผู้สมัคร </p>
               </div>
               <div className='grid grid-cols-7 mt-16'>
                  <div className='col-span-1 w-full xl:pr-6 lg:pr-2'>
                     <SelectInput
                        label='คำนำหน้าชื่อ'
                        name='pname'
                        options={[
                           { label: "นาย", value: "นาย" },
                           { label: "นาง", value: "นาง" },
                           { label: "นางสาว", value: "นางสาว" },
                        ]}
                        required
                     />
                  </div>
                  <div className='col-span-2 w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                     <Inputbox 
                        label='ชื่อ' 
                        name='fname' 
                        placeholder='ธนาธร' 
                        setObj={setName}
                        obj={name}
                        required />
                  </div>
                  <div className='col-span-2 w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                     <Inputbox label='ชื่อกลาง (ถ้ามี)' name='mname' placeholder='' required />
                  </div>
                  <div className='col-span-2 w-full xl:pl-6 lg:pl-2'>
                     <Inputbox label='นามสกุล' name='sname' placeholder='' required />
                  </div>
               </div>
               <div className='grid grid-cols-7 mt-6'>
                  <div className='col-span-1 w-full xl:pr-6 lg:pr-2'>
                     <Inputbox label='ชื่อเล่น' name='nickname' placeholder='' required />
                  </div>
                  <div className='col-span-2 xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                     <div className='flex flex-row'>
                        <div className='w-full pr-3'>
                           <SelectInput label='วัน' name='date' options={date_data} required />
                        </div>
                        <div className='w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                           <SelectInput label='เดือน' name='month' options={month_data} required />
                        </div>
                        <div className='w-full xl:pl-6 lg:pl-2'>
                           <SelectInput
                              label='ปีเกิด'
                              name='birth_year'
                              options={year_data}
                              required
                           />
                        </div>
                     </div>
                  </div>
                  <div className='col-span-2 w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                     <TelInput label='เบอร์โทรศัพท์' name='mobile' placeholder='' required />
                  </div>
                  <div className='col-span-2 w-full xl:pl-6 lg:pl-2'>
                     <EmailInput label='Email' name='email' placeholder='' required />
                  </div>
               </div>
               <div className='grid grid-cols-7 mt-16'>
                  <div className='col-span-3'>
                     <div className='flex flex-row'>
                        <div className='w-1/2 mr-4'>
                           <SelectInput
                              label='จังหวัดที่พักอาศัย'
                              name='province'
                              options={provinces}
                              required
                           />
                        </div>
                        <div className='w-1/3 ml-4'>
                           <SelectInput
                              label='ขนาดเสื้อ'
                              name='shirt_size'
                              options={shirtsize_data}
                              required
                           />
                        </div>
                     </div>
                  </div>
                  <div className='col-span-4 flex flex-row'>
                     <div className='w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                        <Inputbox label='ยาประจำตัว' name='medicine' placeholder='' required />
                     </div>
                     <div className='w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                        <Inputbox
                           label='ยาที่แพ้'
                           name='allergic_medicine'
                           placeholder=''
                           required
                        />
                     </div>
                     <div className='w-full xl:pl-6 lg:pl-2'>
                        <Inputbox label='โรคประจำตัว' name='underlying' placeholder='' required />
                     </div>
                  </div>
               </div>
               <div className='grid grid-cols-7 mt-6'>
                  <div className='col-span-3'>
                     <div className='flex flex-row'>
                        <div className='w-1/2 mr-4'>
                           <Inputbox
                              label='วิธีการเดินทางมหาวิทยาลัย'
                              name='travelby'
                              placeholder=''
                              required
                           />
                        </div>
                     </div>
                  </div>
                  <div className='col-span-4 flex flex-row'>
                     <div className='w-1/2 xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                        <Inputbox label='อาหารที่แพ้' name='allergic' placeholder='' required />
                     </div>
                     <div className='w-1/2 xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                        <DropdownSearch
                           label='อาหารที่ต้องการเป็นพิเศษ'
                           name='special'
                           obj={{ label: "", value: "" }}
                           setObj={""}
                           data={[
                           { label: "อาหารฮาลาล", value: "อาหารฮาลาล" },
                           { label: "อาหารเจ", value: "อาหารเจ" },
                           ]}
                           placeholder=''
                           required
                        />
                     </div>
                  </div>
               </div>
               <div className="flex flex-row my-8">             
                  <p className='text-xl font-semibold mr-2'> น้องๆ สะดวกที่จะนำโน๊ตบุคมาด้วยหรือไม่ </p>
                  <div className="mt-1">
                     <CheckboxInput name='notebook' label=' ' />
                  </div>
                  <p className='text-xl font-semibold ml-2'> (สะดวก) </p>
               </div>
            </div>
         </div>
      </>
   );
};
