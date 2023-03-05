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
            <div className='flex pl-6 my-2'>
                <label className="flex flex-row items-center ">
                    <input
                        type='radio'
                        onClick={onclick}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        checked={checked}
                        className="p-2 form-check-input appearance-none cursor-pointer rounded-full border-2 border-red1 bg-white checked:ring-red-700 checked:ring-2 checked:bg-red-400 checked:border-white"
                    />
                   <span className="w-full ml-3 font-semibold text-md sm:text-lg lg:text-xl text-clip">{label}</span>
               </label>
            </div>
         </div>
      </>
   );
};
export default RadioInput;
