type option = {
  label?: number | string;
  value?: number | string;
};
const SelectInput = ({
  label,
  name,
  obj,
  setObj,
  options,
  required,
}: {
  label?: string;
  name: string;
  obj?: string;
  setObj?: any;
  options: option[];
  required?: boolean;
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value;
    setObj(value);
  };
  return (
    <>
      <div>
        <div className="flex">
          {label ? <p> {label} </p> : <p>{name}</p>}
          {required ? <p className="text-red-900">*</p> : <p></p>}
        </div>
        <select
          name={name}
          className="border"
          onChange={handleOnChange}
          value={obj}
        >
          {options.map((e: option) => (
            <option value={e.value}>{e.label}</option>
          ))}
        </select>
      </div>
    </>
  );
};
export default SelectInput;