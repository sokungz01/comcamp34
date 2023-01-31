import { useState } from "react";

const TelInput = ({
   name,
   label,
   placeholder,
   obj,
   setobj,
   required,
}: {
   name: string;
   label?: string;
   placeholder?: string;
   obj?: string;
   setobj?: any;
   required?: boolean;
}) => {
   const [valid, setvalid] = useState(true);
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
      if (phoneNumber.length === 10 && isNumber(phoneNumber) && phoneNumber[0] === "0") {
         setvalid(true);
      } else {
         setvalid(false);
      }
   };

   return (
      <>
         <div className='flex'>
            <p className='text-gray-700 xl:text-xl lg:text-xl md:text-xs sm:text-xs'>
               {label ? label : name}
            </p>
            {required ? <p className='text-orange'>*</p> : <p></p>}
         </div>
         <input
            type='tel'
            name={name}
            className='bg-white xl:text-2xl lg:text-2xl text-xs border shadow-lg py-1 pl-2.5 rounded-lg text-base-black -mt-1.5 xl:mt-1 lg:mt-1 invalid:ring-red1'
            placeholder={placeholder}
            maxLength={10}
            minLength={10}
            onChange={handleChange}
            value={obj}
         />
         <br />
         {valid ? null : <p className='text-orange text-xs'>Please enter valid form</p>}
      </>
   );
};

export default TelInput;
