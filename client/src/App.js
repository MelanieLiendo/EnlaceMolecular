import logo from './images/logo enlace.png';
import google from './images/googlemas.png';
import linkedin from './images/linkedin.png';
import simmaProductos from './images/Simma Productos.jpg'
import './App.css';
import asofarma from './images/asofarma.png'
import casasco from './images/casasco.png'
import cliente1 from './images/cliente 1.png'
import cliente2 from './images/cliente 2.jpg'
import cliente3 from './images/cliente 3.png'
import glenmark from './images/glenmark.jpg'
import inmunova from './images/inmunova.png'
import richmond from './images/richmond.png'
import roemmers from './images/roemmers.png'
import sinergium from './images/sinergium.png'
import imagenNosotros from './images/Simma Materiales.jpg'
import desarrolloSoftware from './images/desarrolloSoftware.png'
import agil from './images/agil.png'
import solucion from './images/solucion.png'
import emap2 from './images/Emap 2.jpg'
import emme from './images/iStock-1130734389.jpg'
import emme2 from './images/Enlace Molecular - data integrity 1.jpg'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import simmaEstabilidad from './images/Simma Estabilidad.jpg'
import puntoGris from './images/puntoGris.png'
import puntoLila from './images/puntoLila.png'
import logoSIMMA from './images/logoSIMMA.png'
import logoEMME from './images/logoEMME.png'
import logoEMAP from './images/logoEMAP.png'
import logoEMQA from './images/logoEMQA.png'
import eleaphoenix from './images/eleaphoenix.png'
import massone from './images/massone.gif'
import catalent from './images/catalent.webp'
import celtyc from './images/celtyc.jpg'
import nuevedejulio from './images/nuevedejulio.png'



function App() {
  
    const [nombre, setNombre] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [mensajeSatisf, setMensajeSatisf ] = useState('');
    const [seccionActual, setSeccionActual] = useState(1);
    const [seccionEmap, setSeccionEmap] = useState(1)
    const [seccionEmme, setSeccionEmme] = useState(1)
    const [seccionEmqa, setSeccionEmqa] = useState(1)
  

    const cambiarSeccion = (seccion) => {
      setSeccionActual(seccion);
    };


    const cambiarSeccionEmap = (seccion) => {
      setSeccionEmap(seccion);
    }

    const cambiarSeccionEmme = (seccion) => {
      setSeccionEmme(seccion);
    }

    const cambiarSeccionEmqa = (seccion) => {
      setSeccionEmqa(seccion);
    }
  
    const enviarFormulario = (e) => {
      e.preventDefault();
  
      const templateParams = {
        from_name: nombre,
        from_empresa: empresa,
        from_email: email,
        message: mensaje,
      };
  
      // Reemplazar 'TU_USER_ID', 'TU_SERVICE_ID' y 'TU_TEMPLATE_ID' con tus propios valores
      emailjs.send('service_jziq654', 'template_suiiudd', templateParams, 'fQ4KcnQ1vK6zakkJt')
        .then((response) => {
          console.log('Correo enviado:', response);
          setMensajeSatisf("Mensaje enviado");
          setTimeout(() => {
            setMensajeSatisf('');
          }, 6000);
          // Puedes realizar acciones adicionales después de enviar el correo, como mostrar un mensaje de éxito, etc.
        })
        .catch((error) => {
          console.error('Error al enviar el correo:', error);
        });
  
      
      setNombre('');
      setEmpresa('');
      setEmail('');
      setMensaje('');
    };

  return (
    <div className="App">
      <navbar id="navbar">
            <ul>
              <a href="#splashscreen"><li>INICIO</li></a>
              <a href="#servicios"><li>SERVICIOS</li></a>
              <a href="#productos"><li>PRODUCTOS</li></a>
              <a href="#nosotros"><li>NOSOTROS</li></a>
              <a href="#contacto"><li>CONTACTO</li></a>
            </ul>
        </navbar>
      <div id= "splashscreen" className="splashscreen">
  
        <div className="splashImage">
        <img id="logo" src= {logo} alt="logo"></img>
        </div>
      <section id='splashscreen2'>
      <p>SOFTWARES PARA ENTORNO GXP</p>
    </section>
      </div>

      <section id= "servicios" className="servicios">
        <article className='serviciosCuadro'>
        <h2 className="textoServicios">Servicios</h2>
        <div className="serviciosGrid">
          <div className="containerServicios" id="containerServicios1">
          <img id='desarrolloSoftware'src={desarrolloSoftware} />
          {/* <p>Desarrollamos <b>software a medida</b> para laboratorios según <b>requerimientos específicos</b> y ofrecemos servicios de <b>consultoría</b> para la <b>mejora de procesos</b>.</p>  */}
          <p>Desarrollamos <b>software a medida</b> para laboratorios.</p>
          </div>
          <div className="containerServicios" id="containerServicios2">
          <img id='agil'src={agil} />
          <p><b>Parametrización</b> inicial de nuestros productos.</p> 
          </div>
          <div className="containerServicios" id="containerServicios3">
          <img id='solucion'src={solucion} />
          <p>Servicio de validación según normativa <b>ISPE-GAMP5</b>.</p>
          </div>
        </div>
        </article>
      </section>


      <section id= "productos" className="productos">

      <article className="simma">
          <div className="recuadroSimma">
            <div className="tituloSimma">
              <div className="seccion1Simma">
               <h3>01.</h3>
               {/* <h2 id="texto-animado">
                  <span>s</span>
                  <span>i</span>
                  <span>m</span>
                  <span>m</span>
                  <span>a</span>
                </h2> */}
                <img id= "logoSIMMA" src={logoSIMMA} alt=""></img>
              </div>
              <p>Gestión Integral de Laboratorio (LIMS): <br></br> Materiales, Productos, Estabilidad, Ambiental, <br></br> Aguas, Validación de Limpieza.</p>
           </div>

          
            <div className="caracteristicasSimma">
              <ul>
                <li>Ambiente: permite la configuración completa de los <br></br>procedimientos internos de monitoreo de aire, superficies,<br></br> personal, equipos y gases.</li>
                <li>Productos: permite la configuración completa de las <br></br>especificación de análisis en proceso (IPC) y de productos <br></br>intermedios y finales.</li>
                <li>Materiales: permite la configuración completa de las <br></br>especificaciones de análisis y re-análisis de insumos, materias primas<br></br> y material de empaque.</li>
              </ul>
            </div>

          </div>
          <div className="fotoSimma">
            <img id= "simmaEstabilidad" src={simmaEstabilidad} alt=""></img>
          </div> 
          <button className='pedirDEMO'><a href="#contacto">Pedir DEMO</a></button> 
       
        </article>
        
        <article className="emme">
          <div className="recuadroEmme">
            <h3>02.</h3>
            <div className="tituloEmme">
              <div className="seccion1Emme">
                {/* <h2 id="texto-animado">
                  <span>e</span>
                  <span>m</span>
                  <span>m</span>
                  <span>e</span>
                </h2> */}
                <img id= "logoEMME" src={logoEMME} alt=""></img>
              </div>
                <p>Aplicación de Manejo de Equipos e <br></br>Instrumentos</p>
            </div>
  
            <div className="caracteristicasEmme">
            {seccionEmme === 1 && 
                <ul>
                <li>Configuración de Maestro de Equipos, Instrumentos y proveedores.</li>
                <li>Configuración de Protocolos de Mantenimiento Preventivo <br></br> y Calificacion de Equipos.</li>
                <li>Configuración de Protocolos de Calibracion de Instrumentos <br></br> con diversos tipos de tolerancia.</li>
                <li>Seguimiento de actividades según frecuencia determinadas</li>
                </ul>
                }

                {seccionEmme === 2 &&
                <ul>
                <li>Advertencias visuales de actividades vencidas/ por vencer. <br></br>Notificaciones automáticas por correo electrónico.</li>
                <li>Programacion de Tareas internas y listados para proveedores externos.</li>
                <li>Registro de Calibracion de Instrumentos con propiedades <br></br>asociadas (patrones, condiciones ambientales, etc) Registro de ajustes <br></br>necesarios</li>
                </ul>
                }

                {seccionEmme === 3 &&
                <ul>
                
                <li>Reportes de evolución. Certificados de Calibracion</li>
                <li>Disponible para uso en Tablets Integrable a lectores de códigos <br></br>QR/barras para identificación de equipos e instrumentos.</li>
                <li>Logbook Digital de Equipo/Instrumento con registro de todas <br></br>las tareas y uso.</li>
                </ul>
                }
            </div>  

            <div className='botonesRecuadro'>
        <button onClick={() => cambiarSeccionEmme(1)}> {seccionEmme === 1 ? <p className='puntos'>&#9899;</p>:<p className='puntos'>&#9898;</p>}</button>
        <button onClick={() => cambiarSeccionEmme(2)}>{seccionEmme ===2? <p className='puntos'>&#9899;</p>:<p className='puntos'>&#9898;</p>}</button>
        <button onClick={() => cambiarSeccionEmme(3)}>{seccionEmme === 3? <p className='puntos'>&#9899;</p>:<p className='puntos'>&#9898;</p>}</button>
        </div>

          </div>    
              <div className="fotoEmme">
                <img id="emme" src={emme} alt=""></img>
              </div>
              <button className='pedirDEMO'><a href="#contacto">Pedir DEMO</a></button> 
        </article>

        <article className="emqa">
          <div className="recuadroEmqa">
            <div className="tituloEmqa">
              <div className="seccion1Emqa">
               <h3>03.</h3>
               {/* <h2 id="texto-animado">
                  <span>e</span>
                  <span>m</span>
                  <span>q</span>
                  <span>a</span>
                </h2> */}
                <img id= "logoEMQA" src={logoEMQA} alt=""></img>
              </div>
              <p>Aplicación para Gestion de Documentos, <br></br>administración de Capacitacion y procesos <br></br>de Garantia de Calidad</p>
           </div>

          
            <div className="caracteristicasEmqa">
            {seccionEmqa === 1 && 
                <ul>
                <li>Administración de cualquier tipo de Documento del Sistema de Calidad.</li>
                <li>Alta de Documentos con Anexos Asociados o Independientes</li>
                <li> Gestión independiente de Documentos no GxP y Documentos GxP.</li>
                <li>Control de emisión de Copias Controladas, No Controladas y <br></br>Anexos mediante permisos específicos.</li>
                <li>Alta de Documentos con circuitos de Revisión, Aprobación y <br></br> puesta en vigencia. Trazabilidad de versiones intermedias.</li>
                </ul>
                }

                {seccionEmqa === 2 &&
                <ul>
                <li>Visualización de Documentos vigentes acorde a permisos, <br></br> Sector del usuario y Alcance de los documentos.</li>
                <li>Permite mantener mecanismo de codificación de documentos <br></br>interno de cada Compañía e Implementar codificación automática.</li>
                <li>Envio Automático de Notificaciones por correo electrónico. <br></br> (Documento para Revisar, Aprobar, Documentos Vigentes, <br></br>Vencidos, Obsoletos, etc)</li>
                <li>Configuración de Perfiles de Puesto y Matriz de Capacitación</li>
                </ul>
                }

                {seccionEmqa === 3 &&
                <ul>
                
                <li>Extensión de Vigencia de Documentos</li>
                <li>Integrable con Office 365/Teams y Google Docs</li>
                <li>Múltiples Reportes de Gestión. Búsqueda de Palabras en Documentos.</li>
                <li>Integrable con soluciones ERP y Control de Calidad para Liberación <br></br>de Producto para Venta.</li>
                <li>Delegación de Tareas de Usuarios</li>
                </ul>
                }
              </div>

              
            <div className='botonesRecuadro'>
        <button onClick={() => cambiarSeccionEmqa(1)}> {seccionEmqa === 1 ? <p className='puntos'>&#9899;</p>:<p className='puntos'>&#9898;</p>}</button>
        <button onClick={() => cambiarSeccionEmqa(2)}>{seccionEmqa ===2? <p className='puntos'>&#9899;</p>:<p className='puntos'>&#9898;</p>}</button>
        <button onClick={() => cambiarSeccionEmqa(3)}>{seccionEmqa === 3? <p className='puntos'>&#9899;</p>:<p className='puntos'>&#9898;</p>}</button>
        </div>

          </div>
          <div className="fotoEmqa">
            <img id="emme2" src={emme2} alt=""></img>
            <button className='pedirDEMO'><a href="#contacto">Pedir DEMO</a></button> 
          </div>   
       
        </article>

        <article className="emap">
          <div className="recuadroEmap">
            <h3>04.</h3>
            <div className="tituloEmap">
              <div className="seccion1Emap">
                {/* <h2>emAP</h2> */}
                <img id= "logoEMAP" src={logoEMAP} alt=""></img>
              </div>
                <p>Módulo de gestión de abastecimiento y <br></br>producción de productos farmacéuticos <br></br>y médicos</p>
            </div>
            
              <div className="caracteristicasEmap">

                {seccionEmap === 1 && 
                <ul>
                <li>Administración de maestro de materiales y productos</li>
                <li>Gestión de stock de materiales en almacenes</li>
                <li>Emisión de rótulos de cuarentena</li>
                <li>Definición de formulas y tamaños de lote</li>
                <li>Emisión de ordenes de producción (OP) y de empaque (OE).</li>
                </ul>
                }

                {seccionEmap === 2 &&
                <ul>
                <li>Emisión de ordenes de fraccionamiento de materias primas <br></br>y materiales de empaque.</li>
                <li>Gestión de OP/OE: Registro de cantidades utilizadas, controles <br></br>de proceso, cálculos de rendimiento.</li>
                <li>Notificaciones configurables para mensajes por correo electrónico.</li>
                <li>Asignación de dictamen de control de calidad y liberación <br></br>de garantía de calidad.</li>
                </ul>
                }

                {seccionEmap === 3 &&
                <ul>
                
                <li>Múltiples reportes: trazabilidad de materiales y productos, <br></br>conciliación de stock.</li>
                <li>Integración con Modulo de Calidad Simma® para generación <br></br>automática de protocolos de análisis de liberación, re-análisis <br></br>y extensión de vencimiento.</li>
                <li>Adaptable a Lector de Código de barras/QR.</li>
                </ul>
                }

              </div>

              <div className='botonesRecuadro'>
        <button onClick={() => cambiarSeccionEmap(1)}> {seccionEmap === 1 ? <p className='puntos'>&#9899;</p>:<p className='puntos'>&#9898;</p>}</button>
        <button onClick={() => cambiarSeccionEmap(2)}>{seccionEmap ===2? <p className='puntos'>&#9899;</p>:<p className='puntos'>&#9898;</p>}</button>
        <button onClick={() => cambiarSeccionEmap(3)}>{seccionEmap === 3? <p className='puntos'>&#9899;</p>:<p className='puntos'>&#9898;</p>}</button>
        </div>
              
          </div>
          <div className="fotoEmap">
            <img id="emap2" src={emap2} alt=""></img>
            <button className='pedirDEMO'><a href="#contacto">Pedir DEMO</a></button> 
          </div>
          
        </article>


      </section>

    
      <section id="nosotros" className="nosotros">
       <div className="cuadroNosotros">
        <div className="tituloNosotros">
        <h2>Nosotros</h2>
        </div>
          <div className="textoNosotros">
          {seccionActual === 1 && <p><b>Enlace Molecular</b> es una empresa de desarrollo de <b>soluciones para laboratorios y aplicaciones con impacto GxP</b> que nace en el año 2014 con el objetivo de dar <b>oluciones informáticas a la industria farmacéutica</b>. Nuestros desarrollos siguen las normas de calidad de acuerdo a la <b>guía ISPE-GAMP5</b>.</p>}
          {seccionActual === 3 && <p>Contamos con un <b>equipo de profesionales</b> con una amplia experiencia en desarrollo de <b>software para laboratorios</b> y en los <b>aspectos productivos y procesos de calidad de la industria farmacéutica</b>. Nos mantenemos actualizados para cumplir con las normativas regulatorias vigentes.</p>}
          {seccionActual === 2 && <p>Creemos que la <b>calidad en la atención a nuestros clientes</b> es fundamental, por eso ofrecemos una <b>atención personalizada</b> y acompañamos a los laboratorios que confían en nosotros en la implementación de <b>herramientas que agilizan y hacen más robustos sus procesos</b>.</p>}
          <div className='botonesNosotros'>
        <button onClick={() => cambiarSeccion(1)}> {seccionActual === 1 ? <p>&#9899;</p>:<p>&#9898;</p>}</button>
        <button onClick={() => cambiarSeccion(3)}>{seccionActual ===3? <p>&#9899;</p>:<p>&#9898;</p>}</button>
        <button onClick={() => cambiarSeccion(2)}>{seccionActual === 2? <p>&#9899;</p>:<p>&#9898;</p>}</button>
        </div>
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
          <div className='client'><img id='richmond'src={richmond} /></div>
          <div className='client'><img id='roemmers'src={roemmers} /></div>
          <div className='client'><img id='sinergium'src={sinergium} /></div>
          <div className='client'><img id='eleaphoenix'src={eleaphoenix} /></div>
          <div className='client'><img id='massone'src={massone} /></div>
          <div className='client'><img id='catalent'src={catalent} /></div>
          <div className='client'><img id='celtyc'src={celtyc} /></div>
          <div className='client'><img id='nuevedejulio'src={nuevedejulio} /></div>
          </div>
        </article>
      </section>


<section id="contacto">
		<article className="contacto">
      <div className='puntitos'>
      <h2>Contacto</h2>
      
		<div className="contenido">		
			<form className="material" onSubmit={enviarFormulario}>
				<input type="email" id="email" name="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <input type="text" id="name" name="name" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required/> 
				<input type="text" id="company" name="company" placeholder="Empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} required/>
				<textarea id="message" name="message" placeholder="Mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)} required></textarea>
        <button type="submit">Enviar</button>
        <h3 className='mensajeEnviado'>{mensajeSatisf}</h3>
      </form>
      </div>
	  	</div>
      </article>
</section>


     <section className='footer'>
      <article className='footerSocial'>
        <a href="https://www.linkedin.com/company/enlacemolecular"><img id='linkedinLogo'src={linkedin} /></a>
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
