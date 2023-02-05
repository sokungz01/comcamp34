import {BrowserRouter , Routes , Route} from 'react-router-dom';
import { Comingsoon } from './pages/ComingSoon';
function App() {

  return (
    <BrowserRouter basename="/">
        <Routes>
            <Route path="/" element={<Comingsoon />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
