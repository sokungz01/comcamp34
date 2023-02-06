import { useState } from "react";

const TelInput = ({
   name,
   label,
   placeholder,
   obj,
   setObj,
   required,
   value,
}: {
   name: string;
   label?: string;
   placeholder?: string;
   obj?: object;
   setObj?: any;
   required?: boolean;
   value:string;
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

   const handleChange = (event : any) => {
      const phoneNumber = event.target.value;
      setvalid(phoneNumber.length == 10 && isNumber(phoneNumber));
      setObj({...obj,[name]:phoneNumber});
   }
   return (
      <>
         <div className='flex'>
            <p className='text-gray-700 xl:text-xl lg:text-lg md:text-xs sm:text-xs'>
               {label ? label : name}
            </p>
            {required ? <p className='text-orange'>*</p> : <p></p>}
         </div>
         <input
            type='tel'
            name={name}
            className='w-full bg-white xl:text-2xl lg:text-2xl text-xs border shadow-lg py-1 pl-2.5 rounded-lg text-base-black invalid:ring-red1'
            placeholder={placeholder}
            maxLength={10}
            minLength={10}
            onChange={handleChange}
            value={value}
         />
         {valid ? null : <p className='text-orange text-xs'>Please enter valid form</p>}
      </>
   );
};

export default TelInput;
