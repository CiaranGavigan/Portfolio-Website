import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import {Banner} from './components/Banner.js';
import { Skills } from './components/Skills.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
