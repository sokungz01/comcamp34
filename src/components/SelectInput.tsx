type option = {
   label?: number | string;
   value?: number | string;
};
const SelectInput = ({
   label,
   name,
   obj,
   setObj,
   options,
   required,
   placeholder,
   value,
   disabled,
}: {
   label?: string;
   name: string;
   obj?: object;
   setObj?: any;
   options: option[];
   required?: boolean;
   placeholder?: string;
   value: string;
   disabled?: boolean;
}) => {
   const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.currentTarget.value;
      setObj({ ...obj, [name]: value });
   };
   return (
      <>
         <div>
            <div className='flex mb-2'>
               <p className='text-gray-700 xl:text-xl lg:text-lg md:text-xs sm:text-xs'>
                  {label ? label : name}
               </p>
               {required ? <p className='text-orange text-md'>*</p> : <p></p>}
            </div>
            <div className='flex relative'>
               <select
                  name={name}
                  className='block form-select appearance-none bg-white w-full xl:text-2xl lg:text-2xl text-md border shadow-lg py-2.5 pl-2.5 px-6 -mt-1.5 xl:mt-1 lg:mt-1 rounded-lg text-base-black invalid:ring-red1 disabled:bg-gray-300 disabled:text-gray-500 disabled:bg-opacity-100'
                  onChange={handleOnChange}
                  value={value == null ? "" : value}
                  disabled={disabled}
               >
                  <option value='' disabled>
                     {placeholder ? placeholder : label}
                  </option>
                  {options.map((e: option, index) => (
                     <option key={index} value={e.value}>
                        {e.label}
                     </option>
                  ))}
               </select>
               <span className='absolute pointer-events-none w-[30px] h-full lg:top-1 -top-1 right-0 flex align-center justify-center text-red1 font-bold lg:text-3xl text-xl'>
                  ⌄
               </span>
            </div>
         </div>
      </>
   );
};
export default SelectInput;
