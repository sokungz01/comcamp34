import { useState } from "react";

const RadioInput = ({
   name,
   label,
   obj,
   setObj,
   value,
   checked,
   onclick,
}: {
   name: string;
   label?: any;
   obj?: object;
   setObj?: any;
   value?: string;
   checked?: boolean;
   onclick?: any;
}) => {
   const handleChange = (e: any) => {
      setObj({ ...obj, [name]: e.target.value });
   };
   return (
      <>
         <div>
            <div className='flex ml-6 my-2'>
                <label className="flex flex-row items-center">
                    <input
                        type='radio'
                        onClick={onclick}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        checked={checked}
                        className="form-check-input appearance-none cursor-pointer rounded-full h-5 w-5 border-2 border-red1 bg-white checked:ring-red-700 checked:ring-2 checked:bg-red-400 checked:border-white"
                    />
                   <span className="ml-3 font-semibold text-xl">{label}</span>
               </label>
            </div>
         </div>
      </>
   );
};
export default RadioInput;
