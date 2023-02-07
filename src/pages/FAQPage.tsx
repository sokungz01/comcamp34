
import 'aos/dist/aos.css';
import AOS from 'aos';
import {useEffect} from "react";
import Navbar from '@/components/homePage/Navbar';
import FAQPageComponent from '@/components/homePage/FAQPageComponent';
export const FAQPage = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
        <Navbar/>
           <div className="flex h-screen flex-col">
                <FAQPageComponent/>
            </div>
        </>
    );
}