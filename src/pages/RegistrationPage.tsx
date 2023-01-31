import { Link } from "react-router-dom";
import { PersonalInfoForm } from "@/components/registrationForm/PersonalInfoForm";
export const RegistrationPage = () => {
   return (
      <>
         <div className="w-full flex justify-center">
            <PersonalInfoForm/>
         </div>
      </>
   );
};
