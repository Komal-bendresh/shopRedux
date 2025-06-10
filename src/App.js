import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Cart  from "./pages/Cart";
import Home from './pages/Home';
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <div><Navbar></Navbar></div>
     <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>    
      </div>
    </div>
  );
}

export default App;
