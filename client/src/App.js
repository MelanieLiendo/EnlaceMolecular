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
import desarrolloSoftware from './images/desarrolloSoftware.png'
import agil from './images/agil.png'
import solucion from './images/solucion.png'
import emap1 from './images/Emap 1.jpg'
import emap2 from './images/Emap 2.jpg'
import emme from './images/iStock-1130734389.jpg'
import emme2 from './images/Enlace Molecular - data integrity 1.jpg'

function App() {
  return (
    <div className="App">
      <div id= "splashscreen" className="splashscreen">
        <navbar id="navbar">
          <div id="leftNavbar">
            <img id="logo" src= {logo} alt="logo"></img>
          </div>

          <div id="rightNavbar">
            <ul>
              <a href="#splashscreen"><li>Inicio</li></a>
              <a href="#servicios"><li>Servicios</li></a>
              <a href="#productos"><li>Productos</li></a>
              <a href="#nosotros"><li>Nosotros</li></a>
              <a href="#contacto"><li>Contacto</li></a>
            </ul>
          </div>
        </navbar>
        <div className="splashImage">
          <h3 id="texto-animado" className="initialText">
            <span>S</span>
            <span>o</span>
            <span>l</span>
            <span>u</span>
            <span>c</span>
            <span>i</span>
            <span>o</span>
            <span>n</span>
            <span>e</span>
            <span>s</span>
            <span> </span>
            <span>p</span>
            <span>a</span>
            <span>r</span>
            <span>a</span>
            <span> </span>
            <span>l</span>
            <span>a</span>
            <span>b</span>
            <span>o</span>
            <span>r</span>
            <span>a</span>
            <span>t</span>
            <span>o</span>
            <span>r</span>
            <span>i</span>
            <span>o</span>
            <span>s</span>
            <br></br>
            <span> </span>
            <span>y</span>
            <span> </span>
            <span>a</span>
            <span>p</span>
            <span>l</span>
            <span>i</span>
            <span>c</span>
            <span>a</span>
            <span>c</span>
            <span>i</span>
            <span>o</span>
            <span>n</span>
            <span>e</span>
            <span>s</span>
            <span> </span>
            <span>c</span>
            <span>o</span>
            <span>n</span>
            <span> </span>
            <span>i</span>
            <span>m</span>
            <span>p</span>
            <span>a</span>
            <span>c</span>
            <span>t</span>
            <span>o</span>
            <span> </span>
            <span>g</span>
            <span>x</span>
            <span>p</span>
            </h3>
          <button id="initialButton"><a href="#contacto">Más Información</a></button>
        </div>
      </div>

      <div className="border"></div>

      <section id= "productos" className="productos">
        
        <article className="emap">
          <div className="recuadroEmap">
            <div className="tituloEmap">
              <div className="seccion1Emap">
                <h3>01.</h3>
                <h2>emAP</h2>
              </div>
                <p>Módulo de gestión de abastecimiento y producción <br></br>de productos farmacéuticos y médicos</p>
            </div>
            
              <div className="caracteristicasEmap">
                <p>- Administración de maestro de materiales y productos</p>
                <p>- Gestión de stock de materiales en almacenes</p>
                <p>- Emisión de rótulos de cuarentena</p>
                <p>- Definición de formulas y tamaños de lote</p>
                <p>- Emisión de ordenes de producción (OP) y de empaque (OE).</p>
                <p>- Emisión de ordenes de fraccionamiento de materias primas<br></br> y materiales de empaque.</p>
                <p>- Gestión de OP/OE: Registro de cantidades utilizadas,<br></br> controles de proceso, cálculos de rendimiento.</p>
              </div>
              
          </div>
          <div className="fotoEmap">
            <img id="emap2" src={emap2} alt=""></img>
          </div>
          <div className="botonEmap">
            <button id="conocemasEmap">Conoce más</button>
          </div>
          
        </article>

        <article className="emme">
          <div className="gridEmme">
            <div className="leftEmme">
              <div className="fotoEmme">
                <img id="emme" src={emme} alt=""></img>
                <img id="emme2" src={emme2} alt=""></img>
              </div>
            </div>
            <div className="rightEmme">
              <div className="tituloEmme">
                <div className="seccion1Emme">
                  <h3>02.</h3>
                  <h2 id="texto-animado">
                    <span>e</span>
                    <span>m</span>
                    <span>m</span>
                    <span>e</span>
                  </h2>
                </div>
                  <p>Aplicación de Manejo de Equipos e Instrumentos</p>
              </div>
               <div className="caracteristicasEmme">
                <p>-Configuración de Maestro de Equipos, Instrumentos y proveedores.</p>
                <p>-Configuración de Protocolos de Mantenimiento Preventivo y Calificacion de Equipos.</p>
                <p>-Configuración de Protocolos de Calibracion de Instrumentos con diversos tipos de tolerancia.</p>
                <p>-Seguimiento de actividades según frecuencia determinadas</p>
                <p>-Advertencias visuales de actividades vencidas/ por vencer. Notificaciones automáticas por correo electrónico.</p>
                <p>-Programacion de Tareas internas y listados para proveedores externos.</p>
                <p>-Reportes de evolución. Certificados de Calibracion</p>
                <p>-Disponible para uso en Tablets Integrable a lectores de códigos QR/barras para identificación de equipos e instrumentos.</p>
                <p>-Logbook Digital de Equipo/Instrumento con registro de todas las tareas y uso.</p>
              </div>  
            </div>
          </div>
        </article>

        <article className="emqa">
          <div className="recuadroEmqa">
            <div className="tituloEmqa">
              <div className="seccion1Emqa">
               <h3>03.</h3>
               <h2 id="texto-animado">
                  <span>e</span>
                  <span>m</span>
                  <span>q</span>
                  <span>a</span>
                </h2>
              </div>
              <p>Aplicación para Gestion de Documentos, administración de<br></br> Capacitacion y procesos de Garantia de Calidad</p>
           </div>

          
            <div className="caracteristicasEmqa">
              <p>Administración de cualquier tipo de Documento del Sistema de Calidad.</p>
              <p>Alta de Documentos con Anexos Asociados o Independientes</p>
              <p>Gestión independiente de Documentos no GxP y Documentos GxP.</p>
              <p>Control de emisión de Copias Controladas, No Controladas y Anexos mediante permisos específicos.</p>
              <p>Alta de Documentos con circuitos de Revisión, Aprobación y puesta en vigencia. Trazabilidad de versiones intermedias.</p>
              <p>Visualización de Documentos vigentes acorde a permisos, Sector del usuario y Alcance de los documentos.</p>
            </div>

          </div>
          <div className="fotoEmqa">
            <img id="emme" src={emme} alt=""></img>
            
          </div>   
       
        </article>

      </section>

      <section id= "servicios" className="servicios">
        <article className='serviciosCuadro'>
        <h2 className="textoServicios">Servicios</h2>
        <div className="serviciosGrid">
          <div className="containerServicios">
          <img id='desarrolloSoftware'src={desarrolloSoftware} />
          <p>Desarrollamos software a medida para laboratorios según requerimientos específicos y ofrecemos servicios de consultoría para la mejora de procesos.</p> 
          </div>
          <div className="containerServicios">
          <img id='agil'src={agil} />
          <p>Contamos con un mecanismo ágil y eficiente para el relevamientos de URS ya que conocemos y entendemos los lineamientos generales e impacto de los procesos industriales altamente regulados.</p> 
          </div>
          <div className="containerServicios">
          <img id='solucion'src={solucion} />
          <p>Nos motivan la resolución de cuestiones sencillas así como los grandes desafíos.</p>
          </div>
        </div>
        </article>
      </section>


      <section id="nosotros" className="nosotros">
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


      <section id="contacto">
        <h2>Contacto</h2>
        <div className="contacto">		
			<form action="" className="form">
				<input type="email" id="email" name="email" placeholder="E-mail" required/>
				<input type="text" id="name" name="name" placeholder="Nombre" required/> 
				<input type="text" id="company" name="company" placeholder="Empresa" required/>
				<textarea id="mensage" name="message" placeholder="Mensaje" required></textarea>
			</form>
			<input className="send-button send-button-disabled" id="boton" type="submit" value="Completar Formulario" disabled/>
			
	  	</div>
      </section>

     <section className='footer'>
      <article className='footerSocial'>
        <a href="https://www.linkedin.com/company/enlacemolecular"><img id='linkedinLogo'src={linkedin} /></a>
		  	{/* <img id='googleLogo' src={google} /> */}
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
