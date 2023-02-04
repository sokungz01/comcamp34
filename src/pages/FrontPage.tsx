import ConditionsSection from '@/components/frontPage/ConditionsSection';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import React,{useEffect} from "react";
import Navbar from '@/components/registrationForm/Navbar';
import LandingSection from '@/components/frontPage/LandingSection';
export const FrontPage = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
        <Navbar/>
           <div className="flex h-screen flex-col">
                <LandingSection/>
                <ConditionsSection/> 
            </div>
        </>
    );
}