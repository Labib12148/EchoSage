import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import EchoSage from './EchoSage/EchoSage.jsx'
import LandingPage from './LandingPage/LandingPage.jsx'
import Login from './Login/Login.jsx'
import Signup from './Signup/Signup.jsx'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/EchoSage' element={<EchoSage />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
