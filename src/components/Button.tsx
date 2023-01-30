import { useState } from "react";

const Button=({
    label,
    setObj,
    variant, // Example -> outlined, contained, transparent
    isDisabled
}:{
    label?:string,
    setObj?:any,
    variant?:string // waiting design team for setup tailwind config theme,
    isDisabled?:boolean
})=>{

    return(
       <button className={`${variant==="primary" ? "bg-blue1":"bg-red1"} rounded-full px-3 py-2 text-white`} // opacity low if disabled
        onClick={setObj} disabled={isDisabled}>
        {label}
        </button>
    )
}
export default Button;