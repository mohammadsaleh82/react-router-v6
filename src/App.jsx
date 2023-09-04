 
 
import './App.css';
import { Navbar } from './Components';
import {Outlet} from 'react-router-dom'
function App() { 
  return (
    <div className="App text-white">
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;
