import React from 'react'
import Creatable from 'react-select/creatable';
const DropdownSearch = ({
    label,
    name,
    data,
    defaultValue,
    setObj,
    placeholder,
    required,
    className

}: {
    label?: string;
    name: string;
    data: { label: string; value: string; }[];
    defaultValue?: { label: string; value: string; }; //default value
    setObj: any; 
    placeholder?: string;
    required?: boolean;
    className?: string;


}) => {
    const handleChange = (e: any) => {
        setObj(e.value)
    }

    return (
        <div>
        <div className="flex">
        <p className="text-gray-700 xl:text-xl lg:text-lg md:text-xs sm:text-xs"> 
            { label ? label : name } 
          </p>
          {required ? <p className="text-orange text-xl">*</p> : <p></p>}
        </div>
        <Creatable
            className={className}
            placeholder={placeholder ? placeholder : "Select..."} 
            options={data} 
            onChange={handleChange} 
            defaultValue={defaultValue ? defaultValue : ""} 
        />
        </div>
    );
}

export default DropdownSearch