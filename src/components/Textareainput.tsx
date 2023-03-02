import { useState } from "react";

const Inputbox = ({
   question,
   row,
   name,
   className,
   obj,
   setObj,
   value,
   placeholder,
   required,
   disabled
}: {
   question?: string;
   row?: number;
   name: string;
   className?: string;
   obj?: object;
   setObj?: any;
   value: string;
   placeholder?: string;
   required?: boolean;
   disabled?: boolean;
}) => {
   const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!(event.target instanceof HTMLTextAreaElement)) return;
      const value = event.target.value;
      setObj({ ...obj, [name]: value });
   };

   return (
      <>
         <div className='flex flex-col'>
            <div className='flex'>
               <div className='lg:text-lg text-sm flex flex-row'>
                  {question ? question : null}
                  <p className='text-orange'>{required ? "*" : null}</p>
               </div>
            </div>
            <textarea
               className={
                  className +
                  " block lg:px-8 lg:py-3 px-3 py-2 lg:mx-7 mx-1 lg:mb-8 mt-4 mb-6 lg:rounded-2xl rounded-lg text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none disabled:bg-gray-200"
               }
               name={name}
               onChange={handleChange}
               rows={row}
               placeholder={placeholder}
               value={value == null ? "" : value}
               disabled={disabled}
            ></textarea>
         </div>
      </>
   );
};

export default Inputbox;
