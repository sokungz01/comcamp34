import { useState } from "react";

const CheckboxInput = ({
   name,
   label,
   placeholder,
   obj,
   setObj,
   required,
   checked,
   onclick,
}: {
   name: string;
   label?: string;
   placeholder?: string;
   obj?: object;
   setObj?: any;
   value?: string;
   required?: boolean;
   checked?: boolean;
   onclick?: any;
}) => {
   const handleChange = (e: any) => {
      setObj({ ...obj, [name]: e.target.checked });
   };
   return (
      <>
         <div>
            <div className='flex'>
               <input
                  type='checkbox'
                  onClick={onclick}
                  name={name}
                  placeholder={placeholder}
                  onChange={handleChange}
                  checked={checked == null ? false : true}
                  className='form-check-input appearance-none cursor-pointer rounded-md h-5 w-5 border-2 border-red1 bg-white checked:ring-red-700 checked:ring-2 checked:bg-red-400 checked:border-white'
               />
               {label ? <p>{label}</p> : <p>{name}</p>}
               <br />
               {required ? <p className='text-red-900'>*</p> : <p></p>}
            </div>
         </div>
      </>
   );
};
export default CheckboxInput;
