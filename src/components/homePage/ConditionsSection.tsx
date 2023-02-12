const ConditionsSection = () => {
   return (
      <div
         id='conditions'
         className='pt-20 w-full text-center bg-contain bg-base-white lg:bg-[url("/assets/frontPage/condition-bg-desktop.png")] bg-[url("/assets/frontPage/condition-bg-mobile.png")]'
      >
         <p
            className='text-red2 drop-shadow-lg lg:text-8xl text-6xl md:text-8xl font-semibold mt-8 font-teko tracking-wider'
            data-aos='fade-down'
            data-aos-delay='200'
         >
            Conditions
         </p>
         <div className='xl:max-w-7xl max-w-4xl m-auto my-32 grid lg:grid-cols-4 grid-cols-1 gap-1 font-bai-jamjuree text-center xl:text-lg text-md '>
            <div className='mx-auto relative ' data-aos='flip-right' data-aos-delay='300'>
               <img src='assets/frontPage/condition-image-card-1.png' />
               <p className='absolute xl:bottom-[12%] bottom-[15%] mx-5 inset-x-0'>
                  กำลังศึกษาอยู่
                  <br />
                  ชั้นมัธยมศึกษาปีที่ 4-5
                  <br />
                  หรือเทียบเท่า
                  <br />
                  ในปีการศึกษา 2565
               </p>
            </div>
            <div className='mx-auto relative' data-aos='flip-left' data-aos-delay='400'>
               <img src='assets/frontPage/condition-image-card-2.png' />
               <p className='absolute xl:bottom-[12%] bottom-[15%] mx-5 inset-x-0'>
                  มีความสนใจ
                  <br />
                  ในด้านคอมพิวเตอร์และ
                  <br />
                  ภาควิชาวิศวกรรมคอมพิวเตอร์
                  <br />
                  โดยไม่จำเป็นต้องมีพื้นฐาน
               </p>
            </div>
            <div className='mx-auto relative' data-aos='flip-right' data-aos-delay='500'>
               <img src='assets/frontPage/condition-image-card-3.png' />
               <p className='absolute xl:bottom-[12%] bottom-[15%] mx-5 inset-x-0'>
                  สามารถเข้าพักในระยะเวลา
                  <br />
                  และสถานที่ที่กำหนด
                  <br />
                  ตลอดโครงการ
                  <br />
               </p>
            </div>
            <div className='mx-auto relative' data-aos='flip-left' data-aos-delay='600'>
               <img src='assets/frontPage/condition-image-card-4.png' />
               <p className='absolute xl:bottom-[12%] bottom-[15%] mx-5 inset-x-0'>
                  ผู้ปกครองอนุญาตให้
                  <br />
                  นักเรียนเข้ากิจกรรม
                  <br />
                  <br />
               </p>
            </div>
         </div>
      </div>
   );
};
export default ConditionsSection;
