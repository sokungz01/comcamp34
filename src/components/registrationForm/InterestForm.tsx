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
         camp1: "",
         by1: "",
         camp2: "",
         by2: "",
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
               <h6 className='text-black font-semibold lg:text-lg text-sm lg:mr-6 mr-2'>
                  เคยเข้าร่วมค่ายคอมแคมป์มาก่อนหรือไม่
               </h6>
               <CheckboxInput
                  name='status'
                  label=' '
                  obj={data}
                  setObj={setData}
                  checked={data.status}
               />
               <p className='ml-2'>(เคย)</p>
            </div>
            <p className='text-black lg:text-center text-xs lg:text-lg lg:mt-6 mt-2'>
               หากน้อง ๆ มีความสนใจที่จะเข้าศึกษาต่อในภาควิชาวิศวกรรมคอมพิวเตอร์มจธ. น้อง ๆ
               จะเลือกเรียนหลักสูตรใด เพราะเหตุใด*
            </p>
            <div className='lg:flex lg:pl-12 lg:mt-6 mt-3'>
               <div className='lg:flex'>
                  <h6 className='lg:mr-6 lg:mb-0 mb-3'> หลักสูตร </h6>
                  <div className='w-full'>
                     <SelectInput
                        label=' '
                        name='course'
                        placeholder='หลักสูตรที่สนใจ'
                        options={course}
                        obj={data}
                        setObj={setData}
                        value={data.course}
                     />
                  </div>
               </div>
               <div className='lg:flex lg:ml-6 lg:mt-0 mt-2'>
                  <h6 className='lg:mb-0'>เหตุผล</h6>
                  <Textareainput
                     question=''
                     name='a'
                     row={2}
                     className='xl:px-80 lg:px-36 lg:ml-6 py-3 lg:rounded-2xl rounded-xl'
                     obj={data}
                     setObj={setData}
                     value={data.a}
                  />
               </div>
            </div>
            <div className='flex lg:flex-row flex-col text-black font-semibold lg:text-lg text-sm lg:mt-6 mt-3'>
               <div className='mr-24'>ค่ายที่เคยเข้าร่วมแล้วประทับใจ 2 ลำดับของน้อง ๆ*</div>
               <div className='flex mt-4 lg:mt-0'>
                  <h6 className='text-black font-semibold lg:text-lg text-sm lg:mr-6 mr-2'>
                     ไม่เคยเข้าร่วมค่ายใด ๆ มาก่อน
                  </h6>
                  <CheckboxInput
                     name='no_previous_camp'
                     label=' '
                     obj={data}
                     setObj={setData}
                     checked={data.no_previous_camp}
                     onclick={() => {
                        // if(){
                        // }
                     }}
                  />
               </div>
            </div>
            <div className='flex mt-2'></div>
            <div className='lg:flex lg:mt-6 lg:ml-12'>
               <div className='lg:w-3/12 lg:mr-24 mt-2 lg:mt-0'>
                  <Inputbox
                     label='ชื่อค่ายลำดับที่ 1'
                     name='camp1'
                     placeholder='Comcamp 31'
                     obj={data}
                     setObj={setData}
                     value={data.camp1}
                     disabled={data.no_previous_camp}
                  />
               </div>
               <div className='lg:w-7/12 lg:mt-0 mt-2'>
                  <Inputbox
                     label='มหาวิทยาลัยหรือหน่วยงานที่จัด'
                     name='by1'
                     placeholder='มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี'
                     obj={data}
                     setObj={setData}
                     value={data.by1}
                     disabled={data.no_previous_camp}
                  />
               </div>
            </div>
            <div className='lg:flex lg:mt-6 lg:ml-12'>
               <div className='lg:w-3/12 lg:mr-24 mt-2 lg:mt-0'>
                  <Inputbox
                     label='ชื่อค่ายลำดับที่ 2'
                     name='camp2'
                     placeholder='Comcamp 33'
                     obj={data}
                     setObj={setData}
                     value={data.camp2}
                     disabled={data.no_previous_camp}
                  />
               </div>
               <div className='lg:w-7/12 lg:mt-0 mt-2'>
                  <Inputbox
                     label='มหาวิทยาลัยหรือหน่วยงานที่จัด'
                     name='by2'
                     placeholder='มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี'
                     obj={data}
                     setObj={setData}
                     value={data.by2}
                     disabled={data.no_previous_camp}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};
