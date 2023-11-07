import logo from './images/logo enlace.gif';
import splashscreen from './images/Simma Productos.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="splashscreen">
      <navbar id="navbar">
        <div id="leftNavbar">
          <img id="logo" src= {logo} alt="logo"></img>
        </div>

        <div id="rightNavbar">
          <ul>
            <li>Inicio</li>
            <li>Servicios</li>
            <li>Productos</li>
            <li>Nosotros</li>
            <li>Contacto</li>
          </ul>
        </div>

      </navbar>
      <h2 id="initialText">Software para entornos GxP</h2>
      <button id="buttonSplashscreen1" className="float">EMAP</button>
      <button id="buttonSplashscreen2" className="float">EMAP</button>
      <button id="buttonSplashscreen3" className="float">EMAP</button>
      <button id="buttonSplashscreen4" className="float">EMAP</button>
      </div>
     
      
    </div>
  );
}

export default App;
