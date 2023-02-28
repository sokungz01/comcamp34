import { useState, useEffect } from "react";
import AutoSave from "./Autosave";
import { Controller, FormProvider, useFieldArray, useForm } from "react-hook-form";
import UploadFilesForm from "../registrationForm/UploadFilesForm";
type Props = {};

const TestAuto = (props: Props) => {
   const defaultValues = {
      firstName: "Chai",
      lastName: "",
      gender: "female",
      // test: [{ firstName: "Bill", lastName: "Luo" }],
   };
   const methods = useForm({
      defaultValues,
      mode: "onBlur",
   });
   const {
      register,
      control,
      handleSubmit,
      reset,
      formState,
      formState: { isSubmitSuccessful },
   } = methods;
   const [submittedData, setSubmittedData] = useState({});
   const [startDate, setStartDate] = useState<Date | null>(new Date());

   const [first, setfirst] = useState("q3");

   const { isDirty, dirtyFields } = formState;

   const onSubmit = (data: any) => {
      setSubmittedData(data);
   };
   const handleChange = (e: any) => {
      setfirst(e.target.value);
   };
   useEffect(() => {
      if (isSubmitSuccessful) {
         reset({ ...submittedData });
      }
   }, [isSubmitSuccessful, submittedData, reset]);

   return (
      <FormProvider {...methods}>
         <form onSubmit={handleSubmit(onSubmit)}>
            {/* This one works */}
            {/* <input autoComplete='off' {...register("firstName")} />
            <input {...register("lastName")} /> */}

            {/* <select {...register("gender")}>
               <option value='female'>female</option>
               <option value='male'>male</option>
               <option value='other'>other</option>
            </select> */}
            <div>
               <input type='radio' name='q1' id='1' onChange={handleChange} value='q1' /> q1 <br />
               <input type='radio' name='q1' id='2' onChange={handleChange} value='q2' /> q2 <br />
               <input
                  type='radio'
                  name='q1'
                  id='3'
                  onChange={handleChange}
                  value='q3'
                  checked={first === "q3"}
               />{" "}
               q3 <br />
               {first}
            </div>
            <input type='submit' className='bg-red-400 rounded-md p-2 cursor-pointer' />
            <AutoSave defaultValues={defaultValues} onSubmit={onSubmit} />
         </form>
      </FormProvider>
   );
};

export default TestAuto;
