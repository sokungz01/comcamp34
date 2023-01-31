import React from 'react'
import Creatable from 'react-select/creatable';

const customStyles = {
    container: (base:any, state:any) => ({
      ...base,
      className: 'mt-2 block form-select appearance-none bg-white w-full text-xs border shadow-lg py-1 pl-2.5 px-6 -mt-1.5 rounded-lg text-base-black',
      '&:focus': {
        borderColor: 'blue'
      },
      '&.invalid': {
        borderColor: 'red1',
        '&:focus': {
          borderColor: 'red1'
        }
      }
    }),
    control: (base:any, state:any) => ({
      ...base,
      '&:hover': {
        borderColor: state.isFocused ? 'blue' : '#d2d6dc'
      },
      '&.invalid': {
        borderColor: 'red1',
        '&:hover': {
          borderColor: 'red1'
        }
      }
    }),
    input: (base:any, state:any) => ({
      ...base,
      '&.invalid': {
        color: 'red1'
      }
    }),
    singleValue: (base:any, state:any) => ({
      ...base,
      color: '#333',
      '&.invalid': {
        color: 'red1'
      }
    }),
    placeholder: (base:any, state:any) => ({
      ...base,
      color: '#555',
      '&.invalid': {
        color: 'red1'
      }
    }),
    indicatorSeparator: (base:any) => ({
      ...base,
      display: 'none'
    })
  };

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
        <p className="text-gray-700 xl:text-xl lg:text-xl md:text-xs sm:text-xs"> 
            { label ? label : name } 
          </p>
          {required ? <p className="text-orange text-xl">*</p> : <p></p>}
        </div>
        <Creatable
            placeholder={placeholder ? placeholder : "Select..."} 
            options={data} 
            onChange={handleChange} 
            value={obj} 
            styles={customStyles}
        />
        </div>
    );
}

export default DropdownSearch