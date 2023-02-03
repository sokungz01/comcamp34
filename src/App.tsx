import {BrowserRouter , Routes , Route} from 'react-router-dom';
import { FrontPage } from '@/pages/FrontPage';
import { RegistrationPage } from '@/pages/RegistrationPage';
import ConditionsSection from './components/frontPage/ConditionsSection';
function App() {

  return (
    <BrowserRouter basename="/">
        <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/condition" element={<ConditionsSection/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
