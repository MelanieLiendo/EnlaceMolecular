import logo from './images/logo enlace.gif';
import google from './images/googlemas.png';
import linkedin from './images/linkedin.png';
import splashscreen from './images/Simma Productos.jpg'
import './App.css';
import asofarma from './images/asofarma.png'
import casasco from './images/casasco.png'
import cliente1 from './images/cliente 1.png'
import cliente2 from './images/cliente 2.jpg'
import cliente3 from './images/cliente 3.png'
import glenmark from './images/glenmark.png'
import inmunova from './images/inmunova.png'
import richmond from './images/richmond.png'
import roemmers from './images/roemmers.png'
import sinergium from './images/sinergium.png'
import imagenNosotros from './images/Simma Materiales.jpg'

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

      <section className="productos">
        <h2>Productos</h2>
      </section>

      <section className="servicios">
        <h2>Servicios</h2>
        <p>Desarrollamos software a medida para laboratorios según requerimientos específicos y ofrecemos servicios de consultoría para la mejora de procesos. Contamos con un mecanismo ágil y eficiente para el relevamientos de URS ya que conocemos y entendemos los lineamientos generales e impacto de los procesos industriales altamente regulados. Nos motivan la resolución de cuestiones sencillas así como los grandes desafíos.</p>
      </section>

      <section className="clientes">
        <h2>Nuestros clientes</h2>
        <article id='clientes' >
          <div className='containerClientes'>
          <div className='client'><img id='asofarma'src={asofarma} /></div>
          <div className='client'><img id='casasco'src={casasco} /></div>
          <div className='client'><img id='mabxience'src={cliente1} /></div>
          <div className='client'><img id='richet'src={cliente2} /></div>
          <div className='client'><img id='poen'src={cliente3} /></div>
          <div className='client'><img id='glenmark'src={glenmark} /></div>
          <div className='client'><img id='inmunova'src={inmunova} /></div>
          <div className='client'><img id='richmond'src={richmond} /></div>
          <div className='client'><img id='roemmers'src={roemmers} /></div>
          <div className='client'><img id='sinergium'src={sinergium} /></div>
          </div>
        </article>
      </section>


      <section className="nosotros">
       <div className="cuadroNosotros">
          <div className="textoNosotros">
            <h2>Nosotros</h2>
            <p>Enlace Molecular es una empresa de desarrollo de soluciones para laboratorios y aplicaciones con impacto GxP que nace en el año 2014 con el objetivo de dar soluciones informáticas a la industria farmacéutica. Nuestros desarrollos siguen las normas de calidad de acuerdo a la guía ISPE-GAMP5.</p>
            <p>Contamos con un equipo de profesionales con una amplia experiencia en desarrollo de software para laboratorios y en los aspectos productivos y procesos de calidad de la industria farmacéutica. Nos mantenemos actualizados para cumplir con las normativas regulatorias vigentes.</p>
            <p>Creemos que la calidad en la atención a nuestros clientes es fundamental, por eso ofrecemos una atención personalizada y acompañamos a los laboratorios que confían en nosotros en la implementación de herramientas que agilizan y hacen más robustos sus procesos.</p>
          </div>
          <div className="imagenNosotros">
            <img src={imagenNosotros} alt="imagenNosotros"></img>
          </div>
        </div>
      </section>

      <section className="contacto">
        <h2>Contacto</h2>
      </section>

     <section className='footer'>
      <article className='footerSocial'>
        <img id='googleLogo'src={linkedin} />
		  	<img id='linkedinLogo' src={google} />
      </article>
      <article className='footerText'>
        <div>
          <p>Copyright © 2014 enlacemolecular. All Rights Reserved. Reproduction of any materials from the site is strictly forbidden without permission.</p>
          <p>enlacemolecular brand products are sold exclusively through enlacemolecular.</p>
        </div>
      </article>

     </section>



      
    </div>
  );
}

export default App;
