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
import { useState, useEffect } from "react";
import { Personal, DateForm } from "@/types/RegistrationType";

 export const PersonalInfoForm = ({
   data,
   setData,
   dateData,
   setDateData,
}: {
   data: Personal;
   setData: any;
   dateData: DateForm;
   setDateData: any;
}) => {
   const provinces = provinces_data.map(item => ({
      label: item.name_th,
      value: item.name_th,
   }));

   useEffect(() => {
      const format_date = dateData.day + "-" + dateData.month + "-" + dateData.year;
      setData({ ...data, birth_date: format_date });
   }, [dateData.day, dateData.month, dateData.year]);
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
                        name='prefix'
                        obj={data}
                        setObj={setData}
                        value={data.prefix}
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
                        name='firstname'
                        placeholder='ธนาธร'
                        obj={data}
                        setObj={setData}
                        value={data.firstname}
                        required
                     />
                  </div>
                  <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-2 xl:pr-2 lg:pr-1 lg:pl-1'>
                     <Inputbox
                        label='ชื่อกลาง (ถ้ามี)'
                        name='middlename'
                        placeholder='-'
                        obj={data}
                        setObj={setData}
                        value={data.middlename}
                     />
                  </div>
                  <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-2 lg:pl-1'>
                     <Inputbox
                        label='นามสกุล'
                        name='surname'
                        placeholder='อารมณ์ดี'
                        required
                        obj={data}
                        setObj={setData}
                        value={data.surname}
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
                        obj={data}
                        setObj={setData}
                        value={data.nickname}
                     />
                  </div>
                  <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 xl:pl-2 xl:pr-2 lg:pr-1 lg:pl-1'>
                     <div className='flex flex-row'>
                        <div className='w-3/5 lg:pr-0.5 pr-2'>
                           <SelectInput
                              label='วัน'
                              name='day'
                              options={date_data}
                              required
                              obj={dateData}
                              setObj={setDateData}
                              value={dateData.day}
                           />
                        </div>
                        <div className='w-full lg:pr-0.5 lg:pl-0.5 pr-1 pl-1'>
                           <SelectInput
                              label='เดือน'
                              name='month'
                              options={month_data}
                              required
                              obj={dateData}
                              setObj={setDateData}
                              value={dateData.month}
                           />
                        </div>
                        <div className='w-2/3 lg:pl-0.5 pr-1 pl-1'>
                           <SelectInput
                              label='ปีเกิด'
                              name='year'
                              options={year_data}
                              obj={dateData}
                              setObj={setDateData}
                              value={dateData.year}
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
                        obj={data}
                        setObj={setData}
                        value={data.mobile}
                     />
                  </div>
                  <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-2 lg:pl-1'>
                     <EmailInput
                        label='Email'
                        name='email'
                        placeholder='comcamp34@gmail.com'
                        required
                        obj={data}
                        setObj={setData}
                        value={data.email}
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
                              obj={data}
                              setObj={setData}
                              value={data.province}
                           />
                        </div>
                        <div className='w-1/2 lg:w-1/3 ml-4'>
                           <SelectInput
                              label='ขนาดเสื้อ'
                              name='shirt_size'
                              options={shirtsize_data}
                              required
                              obj={data}
                              setObj={setData}
                              value={data.shirt_size}
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
                           obj={data}
                           setObj={setData}
                           value={data.medicine}
                        />
                     </div>
                     <div className='w-full xl:pl-2 xl:pr-2 lg:pr-1 lg:pl-1 mt-2 lg:mt-0'>
                        <Inputbox
                           label='ยาที่แพ้'
                           name='allergic_medicine'
                           placeholder='Paracetamol'
                           obj={data}
                           setObj={setData}
                           value={data.allergic_medicine}
                        />
                     </div>
                     <div className='w-full xl:pl-2 lg:pl-1 mt-2 lg:mt-0 lg:pr-2'>
                        <Inputbox
                           label='โรคประจำตัว'
                           name='underlying'
                           placeholder='หอบหืด'
                           obj={data}
                           setObj={setData}
                           value={data.underlying}
                        />
                     </div>
                  </div>
               </div>
               <div className='grid lg:grid-cols-7 grid-cols-3 lg:mt-6 mt-2'>
                  <div className='col-span-3'>
                     <div className='flex flex-row'>
                        <div className='lg:w-11/12 w-full lg:placeholder:mr-4'>
                           <Inputbox
                              label='วิธีการเดินทางมามหาวิทยาลัย'
                              name='travelby'
                              placeholder='รถยนต์ส่วนตัว'
                              required
                              obj={data}
                              setObj={setData}
                              value={data.travelby}
                           />
                        </div>
                     </div>
                  </div>
                  <div className='lg:col-span-4 col-span-3 flex lg:flex-row flex-col'>
                     <div className='lg:w-1/2 w-full xl:pl-2 xl:pr-2 lg:pr-1 lg:pl-1 mt-2 lg:mt-0'>
                        <Inputbox
                           label='อาหารที่แพ้'
                           name='allergic_food'
                           placeholder='กุ้ง,ปลาหมึก'
                           obj={data}
                           setObj={setData}
                           value={data.allergic_food}
                        />
                     </div>
                     <div className='lg:w-1/2 w-full xl:pl-2 xl:pr-2 lg:pr-1 lg:pl-1'>
                        <DropdownSearch
                           label='อาหารที่ต้องการเป็นพิเศษ'
                           name='special'
                           obj={data}
                           setObj={setData}
                           defaultValue={{ label: data.special, value: data.special }}
                           data={[
                              { label: "อาหารฮาลาล", value: "อาหารฮาลาล" },
                              { label: "อาหารมังสวิรัติ", value: "อาหารมังสวิรัติ" },
                              { label: "อาหารเจ", value: "อาหารเจ" },
                           ]}
                           placeholder='เลือก'
                        />
                     </div>
                  </div>
               </div>
               <div className='flex flex-row my-8'>
                  <p className='lg:text-xl text-xs font-semibold mr-2'>
                     น้องๆ สะดวกที่จะนำ laptop มาด้วยหรือไม่
                  </p>
                  <div className='lg:mt-1 -mt-1'>
                     <CheckboxInput
                        name='notebook'
                        label=' '
                        setObj={setData}
                        obj={data}
                        checked={data.notebook}
                     />
                  </div>
                  <p className='lg:text-xl text-xs  font-semibold ml-2'> (สะดวก) </p>
               </div>
            </div>
         </div>
      </>
   );
};
