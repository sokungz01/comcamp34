import { useState } from "react";

const TelInput = ({
  name,
  label,
  placeholder,
  obj,
  setobj,
  required,
}: {
  name: string;
  label?: string;
  placeholder?: string;
  obj?: string;
  setobj?: any;
  required?: boolean;
}) => {
  const [valid, setvalid] = useState(true);
  function isNumber(str: any) {
    if (str.trim() === "") {
      return false;
    }
    if (str.includes("E") === true || str.includes("e") === true) {
      return false;
    }

    return !isNaN(str);
  }

  const handleChange = (event: any) => {
    const phoneNumber = event.target.value;
    if (
      phoneNumber.length === 10 &&
      isNumber(phoneNumber) &&
      phoneNumber[0] === "0"
    ) {
      setvalid(true);
    } else {
      setvalid(false);
    }
  };

  return (
    <>
      <br />
      <br />
      <div>
        <div className="flex">
          {label ? <p>{label}</p> : <p>{name}</p>} <br />
          {required ? <p className="text-red-900">*</p> : <p></p>}
        </div>
        <input
          type="tel"
          name={name}
          className="border"
          placeholder={placeholder}
          maxLength={10}
          minLength={10}
          onChange={handleChange}
          value={obj}
        />
        <br />
        {valid ? null : <p>incorrect</p>}
      </div>
    </>
  );
};

export default TelInput;
