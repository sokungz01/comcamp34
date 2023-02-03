import { useState } from "react";

const Inputbox = ({
  label,
  row,
  name,
  obj,
  setObj,
  placeholder,
  required,
}: {
  label?: string;
  row?: number;
  name: string;
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
      <div className="flex flex-col">
        <div className="flex">
          {label ? <p> {label} </p> : <></>}
          {required ? <p className="text-red-900">*</p> : <p></p>}
        </div>
        <textarea className="lg:px-8 lg:py-8 px-3 py-2 lg:mx-7 mx-1 lg:mt-12 mt-6 lg:mb-16 mb-7 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
         focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name={name} rows={row} placeholder={placeholder}></textarea>
        {valid ? (
          <p className="text-red-900">Please enter valid form</p>
        ) : (
          <label></label>
        )}
      </div>
    </>
  );
};

export default Inputbox;
