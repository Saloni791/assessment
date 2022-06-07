import './App.css';
import Home from './Component/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Signup from './Component/Signup';
import Navbar from './Component/Navbar';
import Login from './Component/Login';
import PrivateComponent from './Component/PrivateComponent';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path='/' element={<Home />} />
          </Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

