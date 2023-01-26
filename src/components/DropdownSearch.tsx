import React from 'react'
import Creatable from 'react-select/creatable';

const DropdownSearch = ({
    label,
    name,
    data,
    obj,
    setObj,
    placeholder,
    required

}: {
    label?: string;
    name: string;
    data: { label: string; value: string; }[];
    obj: { label: string; value: string; };
    setObj: any;
    placeholder?: string;
    required?: boolean;


}) => {
    const handleChange = (e: any) => {
        setObj(e.value)
    }

    return (
        <div>
        <div className="flex">
          {label ? <p> {label} </p> : <p>{name}</p>}
          {required ? <p className="text-red-900">*</p> : <p></p>}
        </div>
        <Creatable placeholder={placeholder ? placeholder : "Select..."} options={data} onChange={handleChange} value={obj} />
        </div>
    );
}

export default DropdownSearch