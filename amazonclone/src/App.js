import {BrowserRouter , Routes , Route} from "react-router-dom"

import './App.css';
import Registration from './components/RegistrationPage/Registration';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Registration/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
