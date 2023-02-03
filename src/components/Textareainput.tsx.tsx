import { useState } from "react";

const Inputbox = ({
   label,
   row,
   name,
   className,
   obj,
   setObj,
   placeholder,
   required,
}: {
   label?: string;
   row?: number;
   name: string;
   className?: string;
   obj?: string;
   setObj?: any;
   placeholder?: string;
   required?: boolean;
}) => {
   const [valid, setValid] = useState<boolean>(false);
   const Reg = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!(event.target instanceof HTMLInputElement)) return;
      const value = event.target.value;

      if (Reg.test(value) === true) setValid(true);
      else setValid(false);
      setObj(value);
   };

   return (
      <>
         <div className='flex flex-col'>
            <div className='flex'>
               {label ? <p> {label} </p> : <></>}
               {required ? <p className='text-red-900'>*</p> : <p></p>}
            </div>
            <textarea
               className={
                  className +
                  " text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none"
               }
               name={name}
               rows={row}
               placeholder={placeholder}
            ></textarea>
            {valid ? <p className='text-red-900'>Please enter valid form</p> : <label></label>}
         </div>
      </>
   );
};

export default Inputbox;
