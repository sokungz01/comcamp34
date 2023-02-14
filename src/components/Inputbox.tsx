import { useState } from "react";
import { PersonalInfoForm } from "./registrationForm/PersonalInfoForm";

const Inputbox = ({
   label,
   name,
   obj,
   setObj,
   placeholder,
   required,
   value,
   disabled,
}: {
   label?: string;
   name: string;
   obj?: object;
   setObj?: any;
   placeholder: string;
   required?: boolean;
   value: string;
   disabled?: boolean;
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
            className='w-full bg-white lg:text-2xl text-md border shadow-lg py-2.5 pl-2.5 px-6 -mt-1.5 xl:mt-1 lg:mt-1 rounded-lg text-base-black invalid:ring-red1 disabled:bg-gray-200 disabled:text-gray-500'
            placeholder={placeholder}
            name={name}
            value={value == null ? "" : value}
            onChange={handleChange}
            required={required}
            disabled={disabled}
         />
      </div>
   );
};

export default Inputbox;
