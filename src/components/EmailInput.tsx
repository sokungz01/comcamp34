import { useState } from "react";
const EmailInput = ({
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
  const [valid, setValid] = useState<boolean>(true);
  const RegEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    const email = e.target.value;
    if (RegEx.test(email) === false) setValid(false);
    else setValid(true);
    setObj({...obj,[name]:email});
  };

  return (
    <>
        <div className="flex">
          <p className='text-gray-700 xl:text-xl lg:text-lg md:text-xs sm:text-xs'>
            { label ? label : name } 
          </p>
          {required ? <p className="text-orange">*</p> : <p></p>}
        </div>
        <input
          type="text"
          className="w-full bg-white xl:text-2xl lg:text-2xl text-xs border shadow-lg py-1 pl-2.5 rounded-lg text-base-black invalid:ring-red1"
          onChange={handleChange}
          name={name}
          value={value}
          placeholder={placeholder}
        />
        {valid ? null : (
          <p className="text-orange text-xs">Please enter valid form</p>
        )}
    </>
  );
};
export default EmailInput;
