import Inputbox from "@/components/Inputbox";
import SelectInput from "@/components/SelectInput";
import GpaxInput from "@/components/GpaxInput";
import provinces_data from "@/components/registrationForm/DropdownData/provinces_data.json";
import faculty_name from "@/components/registrationForm/DropdownData/faculty_name.json";
import study_plan_name from "@/components/registrationForm/DropdownData/study_plan_name.json";
import grade_data from "@/components/registrationForm/DropdownData/grade_data.json";
import DropdownSearch from "../DropdownSearch";
import university_data from "@/components/registrationForm/DropdownData/university.json";
import { Education } from "@/types/RegistrationType";

export const EducationForm = ({ data, setData }: { data: Education; setData: any }) => {
   const provinces = provinces_data.map(item => ({
      label: item.name_th,
      value: item.name_en,
   }));
   const university = university_data.map(item => ({
      label: item.name,
      value: item.name,
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
      <div className='flex justify-center mt-8'>
         <div className='bg-yellow3 bg-opacity-40 lg:rounded-2xl rounded-lg flex flex-col font-bai-jamjuree lg:px-16 px-6 py-4 w-11/12'>
            <div className='flex'>
               <img
                  src='/assets/regisPage/green_postit.svg'
                  className='lg:w-16 lg:mt-8 mt-2 ml-2 w-8'
               />
               <p className='text-red2 lg:text-5xl text-3xl font-semibold lg:mt-8 mt-2 ml-2'>
                  ประวัติการศึกษา
               </p>
            </div>
            <div className='lg:flex mt-4'>
               <div className='w-full'>
                  <Inputbox
                     label='ชื่อสถานศึกษาปัจจุบัน'
                     name='school_name'
                     placeholder='โรงเรียนเฉลิมพระเกียรติสมเด็จพระศรีนครินทร์ กำแพงเพชร'
                     required
                     obj={data}
                     setObj={setData}
                     value={data.school_name}
                  />
               </div>
            </div>
            <div className='flex flex-col lg:flex-row lg:flex-shrink lg:mt-4'>
               <div className='flex flex-row justify-between lg:mt-0 mt-2'>
                  <div className='lg:w-4/6 w-1/2 mr-2'>
                     <SelectInput
                        label='จังหวัดที่ตั้งสถานศึกษา'
                        name='location'
                        options={provinces}
                        obj={data}
                        setObj={setData}
                        value={data.location}
                        required
                     />
                  </div>
                  <div className='lg:w-4/6 w-1/2 lg:mr-2'>
                     <SelectInput
                        label='ระดับการศึกษาปัจจุบัน'
                        name='grade'
                        options={grade}
                        obj={data}
                        setObj={setData}
                        value={data.grade}
                        required
                     />
                  </div>
               </div>
               <div className='flex flex-row lg:mt-0 mt-2'>
                  <div className='lg:w-4/6 w-1/2 mr-2'>
                     <DropdownSearch
                        label='แผนการเรียน'
                        name='study_plan'
                        obj={data}
                        setObj={setData}
                        defaultValue={{ label: data.study_plan, value: data.study_plan }}
                        data={study_plan}
                        placeholder='แผนการเรียน'
                        required
                     />
                  </div>
                  <div className='lg:w-4/6 w-1/2'>
                     <GpaxInput
                        label='เกรดเฉลี่ย'
                        name='gpax'
                        placeholder='4.00'
                        obj={data}
                        setObj={setData}
                        value={data.gpax}
                        required
                     />
                  </div>
               </div>
            </div>
            <div className='flex'>
               <img src='/assets/regisPage/green_postit.svg' className='lg:w-16 lg:mt-8 mt-8 w-8' />
               <p className='text-red2 lg:text-5xl text-3xl font-semibold mt-8 ml-2'>ความสนใจ</p>
            </div>
            <h6 className='mt-4 lg:text-2xl text-base text-black lg:mb-4'>
               มหาวิทยาลัย คณะและสาขาที่สนใจอันดับ 1
            </h6>
            <div className='lg:flex'>
               <div className='lg:w-2/6 lg:mr-8 lg:mt-0 mt-2'>
                  <DropdownSearch
                     label='มหาวิทยาลัย'
                     name='university_1'
                     obj={data}
                     setObj={setData}
                     defaultValue={{ label: data.university_1, value: data.university_1 }}
                     data={university}
                     placeholder='มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าฯ ธนบุรี'
                  />
               </div>
               <div className='lg:w-2/6 lg:mr-8 lg:mt-0 mt-2'>
                  <SelectInput
                     label='คณะ'
                     name='facalty_1'
                     options={faculty}
                     obj={data}
                     setObj={setData}
                     value={data.facalty_1}
                  />
               </div>
               <div className='lg:w-2/6 lg:mt-0 mt-2'>
                  <Inputbox
                     label='สาขา'
                     name='major_1'
                     placeholder='วิศวกรรมคอมพิวเตอร์'
                     obj={data}
                     setObj={setData}
                     value={data.major_1}
                  />
               </div>
            </div>
            <h6 className='mt-4 lg:text-2xl text-base text-black lg:mb-4'>
               มหาวิทยาลัย คณะและสาขาที่สนใจอันดับ 2
            </h6>
            <div className='lg:flex'>
               <div className='lg:w-2/6 lg:mr-8 lg:mt-0 mt-2'>
                  <DropdownSearch
                     label='มหาวิทยาลัย'
                     name='university_2'
                     obj={data}
                     setObj={setData}
                     defaultValue={{ label: data.university_2, value: data.university_2 }}
                     data={university}
                     placeholder='มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าฯ ธนบุรี'
                  />
               </div>
               <div className='lg:w-2/6 lg:mr-8 lg:mt-0 mt-2'>
                  <SelectInput
                     label='คณะ'
                     name='facalty_2'
                     options={faculty}
                     obj={data}
                     setObj={setData}
                     value={data.facalty_2}
                  />
               </div>
               <div className='lg:w-2/6 lg:mt-0 mt-2'>
                  <Inputbox
                     label='สาขา'
                     name='major_2'
                     placeholder='วิศวกรรมคอมพิวเตอร์'
                     obj={data}
                     setObj={setData}
                     value={data.major_2}
                  />
               </div>
            </div>
            <h6 className='mt-4 lg:text-2xl text-base text-black lg:mb-4'>
               มหาวิทยาลัย คณะและสาขาที่สนใจอันดับ 3
            </h6>
            <div className='lg:flex lg:mb-12 mb-4'>
               <div className='lg:w-2/6 lg:mr-8 lg:mt-0 mt-2'>
                  <DropdownSearch
                     label='มหาวิทยาลัย'
                     name='university_3'
                     obj={data}
                     setObj={setData}
                     defaultValue={{ label: data.university_3, value: data.university_3 }}
                     data={university}
                     placeholder='มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าฯ ธนบุรี'
                  />
               </div>
               <div className='lg:w-2/6 lg:mr-8 lg:mt-0 mt-2'>
                  <SelectInput
                     label='คณะ'
                     name='facalty_3'
                     options={faculty}
                     obj={data}
                     setObj={setData}
                     value={data.facalty_3}
                  />
               </div>
               <div className='lg:w-2/6 lg:mt-0 mt-2'>
                  <Inputbox
                     label='สาขา'
                     name='major_3'
                     placeholder='วิศวกรรมคอมพิวเตอร์'
                     obj={data}
                     setObj={setData}
                     value={data.major_3}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};
