import RadioInput from "@/components/RadioInput";
import { useEffect } from "react";
const Choice = ({
   name,
   choice1,
   choice2,
   choice3,
   choice4,
   choice5,
   value,
   obj,
   setObj,
}: {
   name: string;
   choice1: any;
   choice2: any;
   choice3: any;
   choice4: any;
   choice5?: any;
   value: string;
   obj: object;
   setObj: any;
}) => {
   return (
      <>
      <div className='flex flex-col my-3 sm:ml-8'>
         <RadioInput
            name={name}
            label={choice1}
            value='a'
            obj={obj}
            setObj={setObj}
            checked={value == "a"}
         />
         <RadioInput
            name={name}
            label={choice2}
            value='b'
            obj={obj}
            setObj={setObj}
            checked={value == "b"}
         />
         <RadioInput
            name={name}
            label={choice3}
            value='c'
            obj={obj}
            setObj={setObj}
            checked={value == "c"}
         />
         <RadioInput
            name={name}
            label={choice4}
            value='d'
            obj={obj}
            setObj={setObj}
            checked={value == "d"}
         />
         {choice5 ? (
            <RadioInput
               name={name}
               label={choice5}
               value='e'
               obj={obj}
               setObj={setObj}
               checked={value == "e"}
            />
         ) : null}
         </div>
      </>
   );
};
export default Choice;
