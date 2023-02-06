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
   const [value,setValue] = useState({
      pname:"",
      fname:"",
      mname:"",
      sname:"",
      nickname:"",
      date:"",
      month:"",
      birth_year:"",
      mobile:"",
      email:"",
      province:"",
      shirt_size:"",
      medicine:"",
      allergic_medicine:"",
      underlying:"",
      travelby:"",
      allergic:"",
      special:{ label: "", value: "" },
      notebook:false
   });

   const provinces = provinces_data.map(item => ({
      label: item.name_th,
      value: item.name_th,
   }));

   return (
      <>
         <div className='flex justify-center mt-8'>
            <div className='bg-red1 bg-opacity-10 w-11/12 lg:rounded-2xl rounded-lg flex flex-col font-bai-jamjuree lg:px-16 px-6 py-4'>
               <div className='flex'>
                  <img
                     src='/assets/regisPage/green_postit.svg'
                     className='lg:w-16 lg:mt-8 mt-2 w-8'
                  />
                  <p className='text-red2 lg:text-5xl text-2xl font-semibold lg:mt-8 mt-2 ml-2'>
                     ข้อมูลผู้สมัคร
                  </p>
               </div>
               <div className='grid lg:grid-cols-7 grid-cols-3  mt-2 lg:mt-8'>
                  <div className='col-span-1 lg:col-span-1 w-full xl:pr-2 lg:pr-1'>
                     <SelectInput
                        label='คำนำหน้าชื่อ'
                        name='pname'
                        obj={value}
                        setObj={setValue}
                        value={value.pname}
                        options={[
                           { label: "นาย", value: "นาย" },
                           { label: "นาง", value: "นาง" },
                           { label: "นางสาว", value: "นางสาว" },
                        ]}
                        required
                     />
                  </div>
                  <div className='col-span-2  w-full xl:pl-2 xl:pr-2 lg:pr-1 lg:pl-1 pl-3'>
                     <Inputbox
                        label='ชื่อ'
                        name='fname'
                        placeholder='ธนาธร'
                        obj={value}
                        setObj={setValue}
                        value={value.fname}
                        required
                     />
                  </div>
                  <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-2 xl:pr-2 lg:pr-1 lg:pl-1'>
                     <Inputbox
                        label='ชื่อกลาง (ถ้ามี)'
                        name='mname'
                        placeholder='-'
                        required
                        obj={value}
                        setObj={setValue}
                        value={value.mname}
                     />
                  </div>
                  <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-2 lg:pl-1'>
                     <Inputbox
                        label='นามสกุล'
                        name='sname'
                        placeholder='อารมณ์ดี'
                        required
                        obj={value}
                        setObj={setValue}
                        value={value.sname}
                     />
                  </div>
               </div>
               <div className='grid lg:grid-cols-7 grid-cols-3 lg:mt-6'>
                  <div className='lg:col-span-1 col-span-3 mt-2 lg:mt-0 w-full xl:pr-2 lg:pr-1'>
                     <Inputbox
                        label='ชื่อเล่น'
                        name='nickname'
                        placeholder='ซัน'
                        required
                        obj={value}
                        setObj={setValue}
                        value={value.nickname}
                     />
                  </div>
                  <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 xl:pl-2 xl:pr-2 lg:pr-1 lg:pl-1'>
                     <div className='flex flex-row'>
                        <div className='w-3/5 lg:pr-0.5 pr-2'>
                           <SelectInput
                              label='วัน'
                              name='date'
                              options={date_data}
                              required
                              obj={value}
                              setObj={setValue}
                              value={value.date}
                           />
                        </div>
                        <div className='w-full lg:pr-0.5 lg:pl-0.5 pr-1 pl-1'>
                           <SelectInput
                              label='เดือน'
                              name='month'
                              options={month_data}
                              required
                              obj={value}
                              setObj={setValue}
                              value={value.month}
                           />
                        </div>
                        <div className='w-2/3 lg:pl-0.5 pr-1 pl-1'>
                           <SelectInput
                              label='ปีเกิด'
                              name='birth_year'
                              options={year_data}
                              obj={value}
                              setObj={setValue}
                              value={value.birth_year}
                              required
                           />
                        </div>
                     </div>
                  </div>
                  <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-2 xl:pr-2 lg:pr-1 lg:pl-1'>
                     <TelInput
                        label='เบอร์โทรศัพท์'
                        name='mobile'
                        placeholder='0903540000'
                        required
                        obj={value}
                        setObj={setValue}
                        value={value.mobile}
                     />
                  </div>
                  <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-2 lg:pl-1'>
                     <EmailInput
                        label='Email'
                        name='email'
                        placeholder='comcamp34@gmail.com'
                        required
                        obj={value}
                        setObj={setValue}
                        value={value.email}
                     />
                  </div>
               </div>
               <div className='grid lg:grid-cols-7 grid-cols-3 lg:mt-16 mt-2'>
                  <div className='col-span-3'>
                     <div className='flex flex-row'>
                        <div className='w-1/2 mr-4'>
                           <SelectInput
                              label='จังหวัดที่พักอาศัย'
                              name='province'
                              options={provinces}
                              required
                              obj={value}
                              setObj={setValue}
                              value={value.province}
                           />
                        </div>
                        <div className='w-1/2 lg:w-1/3 ml-4'>
                           <SelectInput
                              label='ขนาดเสื้อ'
                              name='shirt_size'
                              options={shirtsize_data}
                              required
                              obj={value}
                              setObj={setValue}
                              value={value.shirt_size}
                           />
                        </div>
                     </div>
                  </div>
                  <div className='lg:col-span-4 col-span-3 flex lg:flex-row flex-col mt-2 lg:mt-0'>
                     <div className='w-full xl:pl-2 xl:pr-2 lg:pr-1 lg:pl-1'>
                        <Inputbox
                           label='ยาประจำตัว'
                           name='medicine'
                           placeholder='Aspirin'
                           required
                           obj={value}
                           setObj={setValue}
                           value={value.medicine}
                        />
                     </div>
                     <div className='w-full xl:pl-2 xl:pr-2 lg:pr-1 lg:pl-1 mt-2 lg:mt-0'>
                        <Inputbox
                           label='ยาที่แพ้'
                           name='allergic_medicine'
                           placeholder='Paracetamol'
                           required
                           obj={value}
                           setObj={setValue}
                           value={value.allergic_medicine}
                        />
                     </div>
                     <div className='w-full xl:pl-2 lg:pl-1 mt-2 lg:mt-0 lg:pr-2'>
                        <Inputbox
                           label='โรคประจำตัว'
                           name='underlying'
                           placeholder='หอบหืด'
                           required
                           obj={value}
                           setObj={setValue}
                           value={value.underlying}
                        />
                     </div>
                  </div>
               </div>
               <div className='grid lg:grid-cols-7 grid-cols-3 lg:mt-6 mt-2'>
                  <div className='col-span-3'>
                     <div className='flex flex-row'>
                        <div className='lg:w-1/2 w-full lg:placeholder:mr-4'>
                           <Inputbox
                              label='วิธีการเดินทางมหาวิทยาลัย'
                              name='travelby'
                              placeholder='รถยนต์ส่วนตัว'
                              required
                              obj={value}
                              setObj={setValue}
                              value={value.travelby}
                           />
                        </div>
                     </div>
                  </div>
                  <div className='lg:col-span-4 col-span-3 flex lg:flex-row flex-col'>
                     <div className='lg:w-1/2 w-full xl:pl-2 xl:pr-2 lg:pr-1 lg:pl-1 mt-2 lg:mt-0'>
                        <Inputbox
                           label='อาหารที่แพ้'
                           name='allergic'
                           placeholder='กุ้ง,ปลาหมึก'
                           required
                           obj={value}
                           setObj={setValue}
                           value={value.allergic}
                        />
                     </div>
                     <div className='lg:w-1/2 w-full xl:pl-2 xl:pr-2 lg:pr-1 lg:pl-1'>
                        <DropdownSearch
                           label='อาหารที่ต้องการเป็นพิเศษ'
                           name='special'
                           obj={value}
                           setObj={setValue}
                           defaultValue={value.special}
                           data={[
                              { label: "อาหารฮาลาล", value: "อาหารฮาลาล" },
                              { label: "อาหารเจ", value: "อาหารเจ" },
                           ]}
                           placeholder='เลือก'
                           required
                        />
                     </div>
                  </div>
               </div>
               <div className='flex flex-row my-8'>
                  <p className='lg:text-xl text-xs font-semibold mr-2'>
                     น้องๆ สะดวกที่จะนำโน๊ตบุคมาด้วยหรือไม่
                  </p>
                  <div className='lg:mt-1 -mt-1'>
                     <CheckboxInput 
                     name='notebook' 
                     label=' ' 
                     setObj={setValue}
                     obj={value}
                     checked={value.notebook}
                     />
                  </div>
                  <p className='lg:text-xl text-xs  font-semibold ml-2'> (สะดวก) </p>
               </div>
            </div>
         </div>
      </>
   );
};
