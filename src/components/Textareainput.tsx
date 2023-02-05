import { useState } from "react";

const Inputbox = ({
   question,
   row,
   name,
   className,
   obj,
   setObj,
   placeholder,
   required,
}: {
   question?: string;
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
   const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!(event.target instanceof HTMLTextAreaElement)) return;
      const value = event.target.value;
      if (Reg.test(value) === true) setValid(true);
      else setValid(false);
      setObj(value);
   };

   return (
      <>
         <div className='flex flex-col'>
            <div className='flex'>
               <p className="lg:text-lg text-sm"> {question ?  (question) : null} </p>
               <p className='text-red-900'> {required ? ("*") : null}</p> 
            </div>
            <textarea
               className={
                  className +
                  "lg:px-8 lg:py-12 px-3 py-6 lg:mx-7 mx-1 lg:mb-8 mt-4 mb-6 lg:rounded-2xl rounded-lg text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none"
               }
               name={name}
               onChange={handleChange}
               rows={row}
               placeholder={placeholder}
            ></textarea>
            {valid ? <p className='text-red-900'>Please enter valid form</p> : <label></label>}
         </div>
      </>
   );
};

export default Inputbox;
