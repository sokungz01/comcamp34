import { useState } from "react";
const EmailInput = ({
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
  const RegEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    const email = e.target.value;
    if (RegEx.test(email) === true) setValid(true);
    else setValid(false);
    setObj(email);
  };

  return (
    <>
      <div>
        <div className="flex">
          {label ? <p> {label} </p> : <p>{name}</p>}
          {required ? <p className="text-red-900">*</p> : <p></p>}
        </div>
        <input
          type="text"
          className="border"
          onChange={handleChange}
          name={name}
          value={obj}
          placeholder={placeholder}
        />
        {valid ? null : (
          <p className="text-red-900">Please enter valid email.</p>
        )}
      </div>
    </>
  );
};
export default EmailInput;
