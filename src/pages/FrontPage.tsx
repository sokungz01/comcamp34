import ConditionsSection from '@/components/homePage/ConditionsSection';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import React,{useEffect} from "react";
import Navbar from '@/components/homePage/Navbar';
import LandingSection from '@/components/homePage/LandingSection';
import FAQSection from '@/components/homePage/FAQSection';
import TimelineSection from '@/components/homePage/TimelineSection';
import ContactSection from '@/components/homePage/ContactSection';
import LearningSection from '@/components/homePage/LearningSection';
import AboutSection from '@/components/homePage/AboutSection';
import SponsorSection from '@/components/homePage/SponsorSection';
import Footer from '@/components/homePage/Footer';

export const FrontPage = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
        <div className='z-[999] absolute mx-auto left-0 right-0'>
        <Navbar />
        </div>
           <div className="flex h-screen flex-col">
                <LandingSection/>
                <AboutSection/>
                <LearningSection/>
                <ConditionsSection/> 
                <TimelineSection/>
                <FAQSection/>
                <SponsorSection/>
                <ContactSection/>
                <Footer/>
            </div>
        </>
    );
}
