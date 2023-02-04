import Inputbox from "@/components/Inputbox";
import SelectInput from "@/components/SelectInput";
import CheckboxInput from "@/components/Checkboxinput";
import Textareainput from "@/components/Textareainput";
import course_name from "@/components/registrationForm/DropdownData/course_name.json";

export const InterestForm = () => {
   const course = course_name.map(item => ({
      label: item.name,
      value: item.name,
   }));
   return (
      <div className="flex justify-center">
         <div className='bg-green1 bg-opacity-30 rounded-xl flex flex-col font-bai-jamjuree px-16 py-4 w-11/12'>
            <h4 className='text-4xl text-red2 font-semibold mb-2'> ความสนใจ </h4>
            <div className='flex mt-3'>
               <h6 className='text-black font-semibold mr-6'>
                  เคยเข้าร่วมค่ายคอมแคมป์มาก่อนหรือไม่
               </h6>
               <CheckboxInput name='status' label='(เคย)' />
            </div>
            <h6 className='text-black text-center mt-6'>
               หากน้อง ๆ มีความสนใจที่จะเข้าศึกษาต่อในภาควิชาวิศวกรรมคอมพิวเตอร์มจธ. น้อง ๆ
               จะเลือกเรียนหลักสูตรใด เพราะเหตุใด*
            </h6>
            <div className='flex pl-12 mt-6'>
               <div className='flex justify-center'>
                  <h6 className='mr-6'> หลักสูตร </h6>
               </div>
               <div className=''>
                  <SelectInput label=' ' name='course' options={course} />
               </div>
               <div className='flex justify-start ml-6'>
                  <h6 className=''>เหตุผล</h6>
                  <Textareainput label=' ' name='a' row={2} className='lg:px-80 ml-6 py-3 rounded-2xl' />
               </div>
            </div>
            <h6 className='text-black font-semibold text-lg mt-6'>
               ค่ายที่เคยเข้าร่วมแล้วประทับใจ 2 ลำดับของน้อง ๆ*
            </h6>
            <div className='flex mt-6 ml-12'>
               <div className='w-3/12 mr-24'>
                  <Inputbox label='ชื่อค่ายลำดับที่ 1' name='' placeholder='Comcamp 31' />
               </div>
               <div className='w-7/12'>
                  <Inputbox
                     label='มหาวิทยาลัยหรือหน่วยงานที่จัด'
                     name=''
                     placeholder='มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี'
                  />
               </div>
            </div>
            <div className='flex mt-6 ml-12'>
               <div className='w-3/12 mr-24'>
                  <Inputbox label='ชื่อค่ายลำดับที่ 2' name='' placeholder='Comcamp 33' />
               </div>
               <div className='w-7/12'>
                  <Inputbox
                     label='มหาวิทยาลัยหรือหน่วยงานที่จัด'
                     name=''
                     placeholder='มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี'
                  />
               </div>
            </div>
            <div className='flex mt-8 mb-8'>
               <h6 className='text-black font-semibold mr-6'>ไม่เคยเข้าร่วมค่ายใด ๆ มาก่อน</h6>
               <CheckboxInput name='status' label=' ' />
            </div>
         </div>
      </div>
   );
};
