import { useState } from "react";

const Inputbox = ({
   label,
   name,
   obj,
   setObj,
   placeholder,
   required,
   value,
}: {
   label?: string;
   name: string;
   obj?: object;
   setObj?: any;
   placeholder: string;
   required?: boolean;
   value: string;
}) => {
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setObj({ ...obj, [name]: value });
   };
   return (
      <div>
         <div className='flex mb-2'>
            <p className='text-gray-700 xl:text-xl lg:text-lg md:text-xs sm:text-xs'>
               {label ? label : name}
            </p>
            {required ? <p className='text-orange text-md'>*</p> : <p></p>}
         </div>
         <input
            type='text'
            className='w-full bg-white xl:text-2xl lg:text-2xl text-md border shadow-lg py-2.5 pl-2.5 px-6 -mt-1.5 xl:mt-1 lg:mt-1 rounded-lg text-base-black invalid:ring-red1'
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={handleChange}
            required={required}
         />
      </div>
   );
};

export default Inputbox;
