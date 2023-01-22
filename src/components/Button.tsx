import { useState } from "react";

const Button=({
    text,
    clickHandler,
    variant, // Example -> outlined, contained, transparent
    isDisabled
}:{
    text?:string,
    clickHandler?:any,
    variant?:string // waiting design team for setup tailwind config theme,
    isDisabled?:boolean
})=>{

    return(
       <button className={`bg-blue-500 rounded-full px-3 py-2 text-white ${isDisabled? "disabled:opacity-25":""}`} // opacity low if disabled
        onClick={clickHandler} disabled={isDisabled}>
        {text}
        </button>
    )
}
export default Button;