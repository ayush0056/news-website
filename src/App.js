import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Landingpage } from './Components2/Landingpage/Landingpage';
import Useapi from './Components2/Useapi/Useapi';
import {LoginSignup} from './Components/LoginSignup/LoginSignup'
import { Notfound } from './Pages/Notfound';
import { Intropage } from './Components2/Intropage/Intropage';



function App() {
  
  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route element={<Landingpage />}>
              <Route path="/"element={<Useapi />} />
              <Route path="/login-signup" element={<LoginSignup />} />
              
              <Route
                path=':title'
                element={<Intropage/>}
              />
              <Route path='*' element={<Notfound/>}/>
            </Route> 
          </Routes>

      </BrowserRouter> 
    </>
  );
}

export default App;
