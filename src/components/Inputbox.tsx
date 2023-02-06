import { useState } from "react";

const Inputbox = ({
  label,
  name,
  obj,
  setObj,
  placeholder,
  required,
  value
}: {
  label?: string;
  name: string;
  obj?: object;
  setObj?: any;
  placeholder: string;
  required?: boolean;
  value:string;
}) => {
  const [valid, setValid] = useState<boolean>(false);
  const Reg = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    const value = event.target.value;

    if (Reg.test(value) === true) setValid(true);
    else setValid(false);
    setObj({...obj, [name]:value});
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex">
          <p className="text-gray-700 xl:text-xl lg:text-lg md:text-xs sm:text-xs"> 
            { label ? label : name } 
          </p>
          <p className="text-orange text-xl">
            {required ? "*" : ""}
          </p>
        </div>
        <input
          type="text"
          className="w-full bg-white xl:text-2xl lg:text-2xl text-xs border shadow-lg py-1 pl-2.5 px-6 -mt-1.5 xl:mt-1 lg:mt-1 rounded-lg text-base-black invalid:ring-red1"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
        />
        {valid ? (
          <p className="text-orange text-xs">Please enter valid form</p>
        ) : (
          <label></label>
        )}
      </div>
    </>
  );
};

export default Inputbox;
