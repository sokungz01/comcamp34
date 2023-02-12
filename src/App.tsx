import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import { FrontPage } from "@/pages/FrontPage";
import { FAQPage } from "@/pages/FAQPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/404NotFound";


function App() {
   return (
      <ParallaxProvider>
         <BrowserRouter basename='/'>
            <Routes>
               <Route path='/' element={<FrontPage />} />
               <Route path='/registration' element={<LoginPage />} />
               <Route path='/faq' element={<FAQPage />} />
               <Route path='*' element={<NotFound />} />
            </Routes>
         </BrowserRouter>
      </ParallaxProvider>
   );
}

export default App;
