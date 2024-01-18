import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import { FrontPage } from "@/pages/FrontPage";
import { FAQPage } from "@/pages/FAQPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/404NotFound";
import ScrollTotop from "./components/ScrollTotop";
import { RegistrationPage } from "./pages/RegistrationPage";
import ResultPage from "./pages/ResultPage";


function App() {
   return (
      <ParallaxProvider>
         <BrowserRouter basename='/'>
            <ScrollTotop>
               <Routes>
                  <Route path='/' element={<FrontPage />} />
                  <Route path='/login' element={<LoginPage />} />
                  <Route path='/registration' element={<RegistrationPage />} />
                  <Route path='/confirmation' element={<ResultPage />} />
                  {/* <Route path='/result' element={<LoginPage />} /> */}
                  <Route path='/faq' element={<FAQPage />} />
                  <Route path='*' element={<NotFound />} />
               </Routes>
            </ScrollTotop>
         </BrowserRouter>
      </ParallaxProvider>
   );
}

export default App;
