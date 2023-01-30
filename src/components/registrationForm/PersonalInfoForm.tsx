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
   const provinces = provinces_data.map(item => ({
      label: item.name_th,
      value: item.name_en,
   }));
   return (
      <>
         <div className='flex flex-col font-bai-jamjuree'>
            <h4 className='text-2xl'> ข้อมูลผู้สมัคร </h4>
            <div className='flex justify-between'>
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
               <Inputbox label='ชื่อ' name='fname' placeholder='' required />
               <Inputbox label='ชื่อกลาง (ถ้ามี)' name='mname' placeholder='' required />
               <Inputbox label='นามสกุล' name='sname' placeholder='' required />
            </div>
            <div className='flex justify-between'>
               <Inputbox label='ชื่อเล่น' name='nickname' placeholder='' required />
               <SelectInput label='วัน' name='date' options={date_data} required />
               <SelectInput label='เดือน' name='month' options={month_data} required />
               <SelectInput label='ปีเกิด' name='birth_year' options={year_data} required />
               <TelInput label='เบอร์โทรศัพท์' name='mobile' placeholder='' required />
               <EmailInput label='Email' name='email' placeholder='' required />
            </div>
            <div className='flex justify-between'>
               <div className='flex'>
                  <SelectInput
                     label='จังหวัดที่พักอาศัย'
                     name='province'
                     options={provinces}
                     required
                  />
                  <SelectInput
                     label='ไซส์เสื้อ'
                     name='shirt_size'
                     options={shirtsize_data}
                     required
                  />
               </div>
               <div className='flex'>
                  <Inputbox label='ยาประจำตัว' name='medicine' placeholder='' required />
                  <Inputbox label='ยาที่แพ้' name='allergic_medicine' placeholder='' required />
                  <Inputbox label='โรคประจำตัว' name='underlying' placeholder='' required />
               </div>
            </div>
            <div className='flex justify-between'>
               <div className='flex'>
                  <Inputbox
                     label='วิธีการเดินทางมหาวิทยาลัย'
                     name='travelby'
                     placeholder=''
                     required
                  />
               </div>
               <div className='flex'>
                  <Inputbox label='อาหารที่แพ้' name='allergic' placeholder='' required />
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
            <div className='flex'>
               <p className='-mt-2 mr-2'> น้องๆ สะดวกที่จะนำโน๊ตบุคมาด้วยหรือไม่ </p>
               <CheckboxInput name='notebook' label=' ' />
               <p className='-mt-2 ml-2'> (สะดวก) </p>
            </div>
         </div>
      </>
   );
};
