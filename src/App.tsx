import {BrowserRouter , Routes , Route} from 'react-router-dom';
import { FrontPage } from '@/pages/FrontPage';
import { RegistrationPage } from '@/pages/RegistrationPage';
function App() {

  return (
    <BrowserRouter basename="/">
        <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
