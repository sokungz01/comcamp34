import { useState } from "react";

const GpaxInput = ({
  label,
  name,
  obj,
  setObj,
  placeholder,
  required,
}: {
  label?: string;
  name: string;
  obj?: string;
  setObj?: any;
  placeholder: string;
  required?: boolean;
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
    setObj(value);
  };

  return (
    <>
      <div className="flex">
        <p className="text-gray-700 xl:text-xl lg:text-xl md:text-xs sm:text-xs"> 
            { label ? label : name } 
        </p>
        {required ? <p className="text-red-900">*</p> : <p></p>}
      </div>
      <input
        type="text"
        className="bg-white xl:text-2xl lg:text-2xl text-xs border shadow-lg py-1 pl-2.5 rounded-lg text-base-black -mt-1.5 xl:mt-1 lg:mt-1 invalid:ring-red1"
        placeholder={placeholder}
        name={name}
        value={obj}
        onChange={handleChange}
        required={required}
      />
      {valid ? (
        <p className="text-orange">Please enter valid form</p>
      ) : (
        <label></label>
      )}
    </>
  );
};

export default GpaxInput;
