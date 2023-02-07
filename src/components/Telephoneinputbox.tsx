import { useState } from "react";

const TelInput = ({
   name,
   label,
   placeholder,
   obj,
   setObj,
   required,
   value,
   disabled
}: {
   name: string;
   label?: string;
   placeholder?: string;
   obj?: object;
   setObj?: any;
   required?: boolean;
   value: string;
   disabled?:boolean;
}) => {
   const [valid, setvalid] = useState<boolean>(true);
   function isNumber(str: any) {
      if (str.trim() === "") {
         return false;
      }
      if (str.includes("E") === true || str.includes("e") === true) {
         return false;
      }

      return !isNaN(str);
   }

   const handleChange = (event: any) => {
      const phoneNumber = event.target.value;
      setvalid(phoneNumber.length == 10 && isNumber(phoneNumber) && phoneNumber[0] == "0");
      setObj({...obj, [name]:phoneNumber});
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
            type='tel'
            name={name}
            className='w-full bg-white xl:text-2xl lg:text-2xl text-md border shadow-lg py-2.5 pl-2.5 px-6 -mt-1.5 xl:mt-1 lg:mt-1 rounded-lg text-base-black invalid:ring-red1 disabled:bg-gray-200 disabled:text-gray-500 '
            placeholder={placeholder}
            maxLength={10}
            minLength={10}
            onChange={handleChange}
            value={value}
            disabled={disabled}
         />
         {valid ? null : <p className='text-orange text-xs'>Please enter valid form</p>}
      </div>
   );
};

export default TelInput;
