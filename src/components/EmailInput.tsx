import { checkEmail } from "@/utils/validate";
import { useState } from "react";
const EmailInput = ({
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
   const [valid, setValid] = useState<boolean>(true);
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!(e.target instanceof HTMLInputElement)) return;
      const email = e.target.value;
      if (checkEmail(email) === false) setValid(false);
      else setValid(true);
      setObj({ ...obj, [name]: email });
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
            className='w-full bg-white xl:text-2xl lg:text-2xl text-md border shadow-lg py-2.5 pl-2.5 px-6 -mt-1.5 xl:mt-1 lg:mt-1 rounded-lg text-base-black invalid:ring-red1 disabled:bg-gray-200 disabled:text-gray-500'
            onChange={handleChange}
            name={name}
            value={value == null ? "" : value}
            placeholder={placeholder}
            disabled={disabled}
         />
         {valid ? null : <p className='text-orange text-xs'>Please enter valid form</p>}
      </div>
   );
};
export default EmailInput;
