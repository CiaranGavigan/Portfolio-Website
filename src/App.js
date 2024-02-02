import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import {Banner} from './components/Banner.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
    </div>
  );
}

export default App;
