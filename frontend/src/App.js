
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Welcome from './Screens/Welcome/Welcome.jsx'
import Register from './Screens/RegisterPage/Register'
import Login from './Screens/LoginPage/Login';
import Home from './Screens/Home/Home.jsx'
import AboutUs from './Screens/AboutUs/AboutUs';

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>

          <Route excat path='/' element={<Welcome />}  ></Route>
          <Route excat path='/home' element={<Home />} > </Route>
          <Route excat path='/register' element={<Register />}  ></Route>
          <Route excat path='/login' element={<Login />}  ></Route>
          <Route excat path='/Aboutus' element={<AboutUs />}  ></Route>

        </Routes>

      </div>
    </Router>


  );
}

export default App;
