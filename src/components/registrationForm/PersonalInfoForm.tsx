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
   const [pname, setPname] = useState<string>("");
   const [fname, setFname] = useState<string>("");
   const [mname, setMname] = useState<string>("");
   const [sname, setSname] = useState<string>("");
   const [nickname, setNickname] = useState<string>("");
   const [date, setDate] = useState<string>("");
   const [month, setMonth] = useState<string>("");
   const [birth_year, setBirthyear] = useState<string>("");
   const [telephone, setTelephone] = useState<string>("");
   const [email, setEmail] = useState<string>("");
   const [province, setProvince] = useState<string>("");
   const [shirtsize, setShirtsize] = useState<string>("");
   const [medicine, setMedicine] = useState<string>("");
   const [allergic_medicine, setAllergic_medicine] = useState<string>("");
   const [underlying, setUnderlying] = useState<string>("");
   const [travelby, setTravelby] = useState<string>("");
   const [allergic, setAllergic] = useState<string>("");
   const [special, setSpecial] = useState({ label: "", value: "" });

   const provinces = provinces_data.map(item => ({
      label: item.name_th,
      value: item.name_en,
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
                  <div className='col-span-1 lg:col-span-1 w-full xl:pr-6 lg:pr-2'>
                     <SelectInput
                        label='คำนำหน้าชื่อ'
                        name='pname'
                        obj={pname}
                        setObj={setPname}
                        options={[
                           { label: "นาย", value: "นาย" },
                           { label: "นาง", value: "นาง" },
                           { label: "นางสาว", value: "นางสาว" },
                        ]}
                        required
                     />
                  </div>
                  <div className='col-span-2  w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2 pl-3'>
                     <Inputbox
                        label='ชื่อ'
                        name='fname'
                        placeholder='ธนาธร'
                        setObj={setFname}
                        obj={fname}
                        required
                     />
                  </div>
                  <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                     <Inputbox
                        label='ชื่อกลาง (ถ้ามี)'
                        name='mname'
                        placeholder='-'
                        required
                        obj={mname}
                        setObj={setMname}
                     />
                  </div>
                  <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-6 lg:pl-2'>
                     <Inputbox
                        label='นามสกุล'
                        name='sname'
                        placeholder='อารมณ์ดี'
                        required
                        obj={sname}
                        setObj={setSname}
                     />
                  </div>
               </div>
               <div className='grid lg:grid-cols-7 grid-cols-3 lg:mt-6'>
                  <div className='lg:col-span-1 col-span-3 mt-2 lg:mt-0 w-full xl:pr-6 lg:pr-2'>
                     <Inputbox
                        label='ชื่อเล่น'
                        name='nickname'
                        placeholder='ซัน'
                        required
                        obj={nickname}
                        setObj={setNickname}
                     />
                  </div>
                  <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                     <div className='flex flex-row'>
                        <div className='w-full lg:pr-2 pr-2'>
                           <SelectInput
                              label='วัน'
                              name='date'
                              options={date_data}
                              required
                              obj={date}
                              setObj={setDate}
                           />
                        </div>
                        <div className='w-full lg:pr-2 lg:pl-2 pr-1 pl-1'>
                           <SelectInput
                              label='เดือน'
                              name='month'
                              options={month_data}
                              required
                              obj={month}
                              setObj={setMonth}
                           />
                        </div>
                        <div className='w-full  lg:pl-2 pr-1 pl-1'>
                           <SelectInput
                              label='ปีเกิด'
                              name='birth_year'
                              options={year_data}
                              obj={birth_year}
                              setObj={setBirthyear}
                              required
                           />
                        </div>
                     </div>
                  </div>
                  <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                     <TelInput
                        label='เบอร์โทรศัพท์'
                        name='mobile'
                        placeholder='0903540000'
                        required
                        obj={telephone}
                        setobj={setTelephone}
                     />
                  </div>
                  <div className='lg:col-span-2 col-span-3 mt-2 lg:mt-0 w-full xl:pl-6 lg:pl-2'>
                     <EmailInput
                        label='Email'
                        name='email'
                        placeholder='comcamp34@gmail.com'
                        required
                        obj={email}
                        setObj={setEmail}
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
                              obj={province}
                              setObj={setProvince}
                           />
                        </div>
                        <div className='w-1/2 lg:w-1/3 ml-4'>
                           <SelectInput
                              label='ขนาดเสื้อ'
                              name='shirt_size'
                              options={shirtsize_data}
                              required
                              obj={shirtsize}
                              setObj={setShirtsize}
                           />
                        </div>
                     </div>
                  </div>
                  <div className='lg:col-span-4 col-span-3 flex lg:flex-row flex-col mt-2 lg:mt-0'>
                     <div className='w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                        <Inputbox
                           label='ยาประจำตัว'
                           name='medicine'
                           placeholder='Aspirin'
                           required
                           obj={medicine}
                           setObj={setMedicine}
                        />
                     </div>
                     <div className='w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2 mt-2 lg:mt-0'>
                        <Inputbox
                           label='ยาที่แพ้'
                           name='allergic_medicine'
                           placeholder='Paracetamol'
                           required
                           obj={allergic_medicine}
                           setObj={setAllergic_medicine}
                        />
                     </div>
                     <div className='w-full xl:pl-6 lg:pl-2 mt-2 lg:mt-0 lg:pr-2'>
                        <Inputbox
                           label='โรคประจำตัว'
                           name='underlying'
                           placeholder='หอบหืด'
                           required
                           obj={underlying}
                           setObj={setUnderlying}
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
                              obj={travelby}
                              setObj={setTravelby}
                           />
                        </div>
                     </div>
                  </div>
                  <div className='lg:col-span-4 col-span-3 flex lg:flex-row flex-col'>
                     <div className='lg:w-1/2 w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                        <Inputbox
                           label='อาหารที่แพ้'
                           name='allergic'
                           placeholder='กุ้ง,ปลาหมึก'
                           required
                           obj={allergic}
                           setObj={setAllergic}
                        />
                     </div>
                     <div className='lg:w-1/2 w-full xl:pl-6 xl:pr-6 lg:pr-2 lg:pl-2'>
                        <DropdownSearch
                           className=''
                           label='อาหารที่ต้องการเป็นพิเศษ'
                           name='special'
                           setObj={setSpecial}
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
                     น้องๆ สะดวกที่จะนำ laptop มาด้วยหรือไม่
                  </p>
                  <div className='lg:mt-1 -mt-1'>
                     <CheckboxInput name='notebook' label=' ' />
                  </div>
                  <p className='lg:text-xl text-xs  font-semibold ml-2'> (สะดวก) </p>
               </div>
            </div>
         </div>
      </>
   );
};
