import React from "react";
import Creatable from "react-select/creatable";
const DropdownSearch = ({
   label,
   name,
   data,
   defaultValue,
   obj,
   setObj,
   placeholder,
   required,
}: {
   label?: string;
   name: string;
   data: { label: string; value: string }[];
   defaultValue?: { label: string; value: string }; //default value
   obj: object;
   setObj: any;
   placeholder?: string;
   required?: boolean;
}) => {
   const handleChange = (e: any) => {
      setObj({...obj, [name]:{label:e.value,value:e.value}});
   };
   return (
      <div>
         <div className='flex mt-2'>
            <p className='text-gray-700 xl:text-xl lg:text-lg md:text-xs sm:text-xs'>
               {label ? label : name}
            </p>
            {required ? <p className='text-orange text-xl'>*</p> : <p></p>}
         </div>
        <div className="flex relative">
            <Creatable
                // unstyled
                isClearable={false}
                components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null}}
                styles={{
                    control: (base, state) => ({
                      ...base,
                      backgroundColor: 'transparent',
                      border: 0,
                      boxShadow: 'none'
                    }),
                    singleValue: (base, state) => ({
                      ...base,
                      color: 'inherit'
                    })
                  }}
                className="block form-select appearance-none bg-white w-full xl:text-2xl lg:text-2xl text-md border shadow-lg py-1 pl-2.5 px-6 -mt-1.5 xl:mt-1 lg:mt-1 rounded-lg text-base-black invalid:ring-red1"
                placeholder={placeholder ? placeholder : "Select..."}
                options={data}
                onChange={handleChange}
                defaultValue={defaultValue ? defaultValue : ""}
            />
            <span className='absolute pointer-events-none w-[30px] h-full lg:top-1 top-0 right-2 flex align-center justify-center text-red1 font-bold lg:text-3xl text-xl'>
                ⌄
            </span>
        </div>
      </div>
   );
};

export default DropdownSearch;
