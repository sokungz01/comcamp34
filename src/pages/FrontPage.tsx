import ConditionsSection from '@/components/frontPage/ConditionsSection';
import { ParentDataForm } from '@/components/registrationForm/ParentDataForm';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import React,{useEffect} from "react";
export const FrontPage = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
          <ParentDataForm/>
        </>
    );
}