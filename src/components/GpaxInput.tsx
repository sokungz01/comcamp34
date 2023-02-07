import { useState } from "react";

const GpaxInput = ({
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
   const [valid, setValid] = useState<boolean>(false);

   const Reg = /^(\d{1}\.){1}\d{2}$/;

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!(event.target instanceof HTMLInputElement)) return;
      const value = event.target.value;

      if (Reg.test(value) === true && parseFloat(value) <= 4) {
         setValid(false);
      } else {
         setValid(true);
      }
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
         {valid ? <p className='text-orange'>Please enter valid form</p> : <label></label>}
      </div>
   );
};

export default GpaxInput;
