import { useState } from "react";

const CheckboxInput = ({name,label,placeholder,obj,setobj,required,checked} : {name:string,label?:string,placeholder?:string,obj?:string,setobj?:any,required?:boolean,checked?:boolean}) =>{

    const [valid, setvalid] = useState(true);

    let check:boolean;

    const handleChange =(e:any) =>
    {
        if(e.target.checked)
        {
            setvalid(true);
        } else {
            setvalid(false);
        }
    }

    const handleRequired =(valid:boolean)=>
    {
        if(valid===true)return ;
        else return <p>need permisssion</p>;
    }

    return(
        <>
        <div>
            <div className="flex">
                <input type="checkbox" name={name} placeholder={placeholder} onChange={handleChange} defaultChecked={checked} />
                {label? <p>{label}</p>:<p>{name}</p>}<br/>
                {required ? <p className="text-red-900">*</p> : <p></p>}
            </div>
            {required? handleRequired(valid):<></>}
        </div>
        
        </>
    )
    
};
export default CheckboxInput;