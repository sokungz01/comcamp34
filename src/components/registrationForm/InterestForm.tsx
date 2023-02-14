import Inputbox from "@/components/Inputbox";
import SelectInput from "@/components/SelectInput";
import CheckboxInput from "@/components/Checkboxinput";
import Textareainput from "@/components/Textareainput";
import course_name from "@/components/registrationForm/DropdownData/course_name.json";
import { Interest } from "@/types/RegistrationType";
import { useState, useEffect } from "react";

export const InterestForm = ({ data, setData }: { data: Interest; setData: any }) => {
   const course = course_name.map(item => ({
      label: item.name,
      value: item.name,
   }));

   useEffect(() => {
      setData({
         ...data,
         camp_1: "",
         camp1_by: "",
         camp_2: "",
         camp2_by: "",
      });
   }, [data.no_previous_camp]);

   return (
      <div className='flex justify-center mt-8 mb-8'>
         <div className='bg-green1 bg-opacity-30 lg:rounded-2xl rounded-lg flex flex-col font-bai-jamjuree lg:px-16 px-6 py-4 w-11/12'>
            <div className='flex'>
               <img src='/assets/regisPage/green_postit.svg' className='lg:w-16 lg:mt-8 mt-2 w-8' />
               <p className='text-red2 lg:text-5xl text-3xl font-semibold lg:mt-8 mt-2 ml-2'>
                  ความสนใจ
               </p>
            </div>
            <div className='flex mt-3'>
               <h6 className='text-black font-semibold lg:text-xl text-xs lg:mr-6 mr-2'>
                  เคยเข้าร่วมค่ายคอมแคมป์มาก่อนหรือไม่
               </h6>
               <div className="lg:mt-1 -mt-0.5">
               <CheckboxInput
                  name='comcamp_previous'
                  label=' '
                  obj={data}
                  setObj={setData}
                  checked={data.comcamp_previous}
               />
               </div>
               <p className="ml-1 lg:ml-4 font-semibold text-xs lg:text-xl">(เคย)</p>
            </div>
            <div className='flex text-black font-semibold text-sm lg:text-xl lg:mt-6 mt-2'>
               <p>หากน้อง ๆ มีความสนใจที่จะเข้าศึกษาต่อในภาควิชาวิศวกรรมคอมพิวเตอร์มจธ. น้อง ๆ
               จะเลือกเรียนหลักสูตรใด เพราะเหตุใด</p>
               <p className="text-orange">*</p>
            </div>
            <div className='flex flex-row lg:mt-6 mt-3'>
               <div className='lg:flex lg:flex-row justify-between w-full'>
                  <div className="lg:flex-col lg:w-1/3">
                     <h6 className='lg:mb-0'> หลักสูตร </h6>
                       <div className="lg:mt-1.5">
                        <SelectInput
                              label=' '
                              name='major_interest'
                              placeholder='หลักสูตรที่สนใจ'
                              options={course}
                              obj={data}
                              setObj={setData}
                              value={data.major_interest}
                           />
                       </div>
                  </div>
                  <div className='lg:flex lg:flex-col lg:w-2/3 lg:mt-0 mt-2'>
                  <h6 className='lg:mb-0 lg:ml-8'>เหตุผล</h6>
                     <div className="w-full">
                        <Textareainput
                        question=''
                        name='reason_major_interest'
                        row={6}
                        obj={data}
                        setObj={setData}
                        value={data.reason_major_interest}
                     />
                     </div>
               </div>
               </div>
               <div>
               </div>
            </div>
            <div className='flex lg:flex-row flex-col text-black font-semibold lg:text-xl text-sm lg:mt-6 mt-3'>
               <div className='mr-0 lg:mr-24 flex'><p>ค่ายที่เคยเข้าร่วมแล้วประทับใจ 2 ลำดับของน้องๆ</p><p className="text-orange">*</p></div>
               <div className='flex mt-4 lg:mt-0'>
                  <h6 className='text-black font-semibold lg:text-xl text-sm lg:mr-6 mr-2'>
                     ไม่เคยเข้าร่วมค่ายใด ๆ มาก่อน
                  </h6>
                  <CheckboxInput
                     name='no_previous_camp'
                     label=' '
                     obj={data}
                     setObj={setData}
                     checked={data.no_previous_camp}
                  />
               </div>
            </div>
            <div className='flex mt-2'></div>
            <div className='lg:flex lg:mt-6 lg:ml-12'>
               <div className='lg:w-3/12 lg:mr-24 mt-2 lg:mt-0'>
                  <Inputbox
                     label='ชื่อค่ายลำดับที่ 1'
                     name='camp_1'
                     placeholder='Comcamp 31'
                     obj={data}
                     setObj={setData}
                     value={data.camp_1}
                     disabled={data.no_previous_camp}
                  />
               </div>
               <div className='lg:w-7/12 lg:mt-0 mt-2'>
                  <Inputbox
                     label='มหาวิทยาลัยหรือหน่วยงานที่จัด'
                     name='camp1_by'
                     placeholder='มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี'
                     obj={data}
                     setObj={setData}
                     value={data.camp1_by}
                     disabled={data.no_previous_camp}
                  />
               </div>
            </div>
            <div className='lg:flex lg:mt-6 lg:ml-12'>
               <div className='lg:w-3/12 lg:mr-24 mt-2 lg:mt-0'>
                  <Inputbox
                     label='ชื่อค่ายลำดับที่ 2'
                     name='camp_2'
                     placeholder='Comcamp 33'
                     obj={data}
                     setObj={setData}
                     value={data.camp_2}
                     disabled={data.no_previous_camp}
                  />
               </div>
               <div className='lg:w-7/12 lg:mt-0 mt-2'>
                  <Inputbox
                     label='มหาวิทยาลัยหรือหน่วยงานที่จัด'
                     name='camp2_by'
                     placeholder='มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี'
                     obj={data}
                     setObj={setData}
                     value={data.camp2_by}
                     disabled={data.no_previous_camp}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};
