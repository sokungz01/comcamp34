import ConditionsSection from '@/components/homePage/ConditionsSection';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import React,{useEffect} from "react";
import Navbar from '@/components/registrationForm/Navbar';
import LandingSection from '@/components/frontPage/LandingSection';
import FAQSection from '@/components/homePage/FAQSection';
import ContactSection from '@/components/homePage/ContactSection';
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
                <FAQSection/>
                <ContactSection/>
            </div>
        </>
    );
}