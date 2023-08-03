
import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Welcome from './Screens/Welcome/Welcome.jsx'
import Register from './Screens/RegisterPage/Register'
import Login from './Screens/LoginPage/Login';

function App() {
  return (
<Router>
    <div className="App">

   <Routes>
    
    <Route excat path='/' element={<Welcome/>}  ></Route>
    <Route excat path='/register' element={<Register/>}  ></Route>
    <Route excat path='/login' element={<Login/>}  ></Route>

    </Routes> 

    </div>
    </Router>


  );
}

export default App;
