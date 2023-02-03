import Inputbox from "@/components/Inputbox";
import SelectInput from "@/components/SelectInput";
import GpaxInput from "@/components/GpaxInput";
import provinces_data from "@/components/registrationForm/DropdownData/provinces_data.json";
import faculty_name from "@/components/registrationForm/DropdownData/faculty_name.json";
import study_plan_name from "@/components/registrationForm/DropdownData/study_plan_name.json";
import grade_data from "@/components/registrationForm/DropdownData/grade_data.json";

export const EducationForm = () => {
   const provinces = provinces_data.map(item => ({
      label: item.name_th,
      value: item.name_en,
   }));
   const faculty = faculty_name.map(item => ({
      label: item.faculty_name,
      value: item.faculty_name,
   }));
   const study_plan = study_plan_name.map(item => ({
      label: item.name,
      value: item.name,
   }));
   const grade = grade_data.map(item => ({
      label: item.name,
      value: item.name,
   }));
   return (
      <div className='flex justify-center'>
         <div className='bg-yellow3 bg-opacity-40 rounded-xl flex flex-col font-bai-jamjuree px-16 py-4 w-11/12'>
            <h4 className='text-4xl text-red2 font-semibold mb-2'> ประวัติการศึกษา </h4>
            <div className='flex mt-4'>
               <div className='w-7/12 mr-8'>
                  <Inputbox
                     label='ชื่อสถานศึกษาปัจจุบัน'
                     name='school_name'
                     placeholder='โรงเรียนเฉลิมพระเกียรติสมเด็จพระศรีนครินทร์ กำแพงเพชร'
                     required
                  />
               </div>
               <div className='w-1/6'>
                  <SelectInput
                     label='จังหวัดที่ตั้งสถานศึกษา'
                     name='Location'
                     options={provinces}
                     required
                  />
               </div>
            </div>
            <div className='flex mt-2'>
               <div className='w-1/10 mr-8'>
                  <SelectInput
                     label='ระดับการศึกษาปัจจุบัน'
                     name='grade'
                     options={grade}
                     required
                  />
               </div>
               <div className='w-1/10 mr-8'>
                  <SelectInput
                     label='แผนการเรียน'
                     name='study_plan'
                     options={study_plan}
                     required
                  />
               </div>
               <div className='w-1/12'>
                  <GpaxInput label='เกรดเฉลี่ย' name='gpax' placeholder='4.00' required />
               </div>
            </div>
            <h4 className='mt-4 text-4xl text-red2 font-semibold mb-2'> ความสนใจ </h4>
            <h6 className='mt-4 text-2xl text-black mb-4'>มหาวิทยาลัย คณะและสาขาที่สนใจอันดับ 1</h6>
            <div className='flex'>
               <div className='w-2/6 mr-8'>
                  <Inputbox
                     label='มหาวิทยาลัย'
                     name='university_1'
                     placeholder='มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าฯ ธนบุรี'
                  />
               </div>
               <div className='w-2/6 mr-8'>
                  <SelectInput label='คณะ' name='facalty_1' options={faculty} />
               </div>
               <div className='w-2/6'>
                  <Inputbox label='สาขา' name='major_1' placeholder='วิศวกรรมคอมพิวเตอร์' />
               </div>
            </div>
            <h6 className='mt-4 text-2xl text-black mb-4'>มหาวิทยาลัย คณะและสาขาที่สนใจอันดับ 2</h6>
            <div className='flex'>
               <div className='w-2/6 mr-8'>
                  <Inputbox
                     label='มหาวิทยาลัย'
                     name='university_2'
                     placeholder='มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าฯ ธนบุรี'
                  />
               </div>
               <div className='w-2/6 mr-8'>
                  <SelectInput label='คณะ' name='facalty_2' options={faculty} />
               </div>
               <div className='w-2/6'>
                  <Inputbox label='สาขา' name='major_2' placeholder='วิศวกรรมคอมพิวเตอร์' />
               </div>
            </div>
            <h6 className='mt-4 text-2xl text-black mb-4'>มหาวิทยาลัย คณะและสาขาที่สนใจอันดับ 3</h6>
            <div className='flex'>
               <div className='w-2/6 mr-8'>
                  <Inputbox
                     label='มหาวิทยาลัย'
                     name='university_3'
                     placeholder='มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าฯ ธนบุรี'
                  />
               </div>
               <div className='w-2/6 mr-8'>
                  <SelectInput label='คณะ' name='facalty_3' options={faculty} />
               </div>
               <div className='w-2/6'>
                  <Inputbox label='สาขา' name='major_3' placeholder='วิศวกรรมคอมพิวเตอร์' />
               </div>
            </div>
         </div>
      </div>
   );
};
