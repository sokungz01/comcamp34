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
            <div className="flex items-center">
                <input 
                    type="checkbox" 
                    name={name} 
                    placeholder={placeholder} 
                    onChange={handleChange} 
                    defaultChecked={checked} 
                    className="form-check-input appearance-none rounded-md h-5 w-5 mr-2 border-2 border-red1 bg-white checked:ring-red-700 checked:ring-2 checked:bg-red-400 checked:border-white"
                    />
                {label? <p>{label}</p>:<p>{name}</p>}<br/>
                {required ? <p className="text-red-900">*</p> : <p></p>}
            </div>
            {required? handleRequired(valid):<></>}
        </div>
        
        </>
    )
    
};
export default CheckboxInput;