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
import React, { useState} from 'react';
import { useEffect } from 'react';
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
    const [seccionSimma, setSeccionSimma] = useState(1)
    const [seccionEmap, setSeccionEmap] = useState(1)
    const [seccionEmme, setSeccionEmme] = useState(1)
    const [seccionEmqa, setSeccionEmqa] = useState(1)
  

    const cambiarSeccion = (seccion) => {
      setSeccionActual(seccion);
    };

    const cambiarSeccionSimma = (seccion) => {
      setSeccionSimma(seccion);
    }

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
      emailjs.send('service_3trj91e', 'template_jifac0u', templateParams, 'L2DQdS2ybz24AXwCx')
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

    // Navbar scroll

    const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div className="App">
      <navbar id= "navbar" className={`navbar ${scrolling ? 'scrolled' : ''}`}>
            <ul>
              <a href="#splashscreen"><li>INICIO</li></a>
              <a href="#productos"><li>PRODUCTOS</li></a>
              <a href="#servicios"><li>SERVICIOS</li></a>
              <a href="#nosotros"><li>NOSOTROS</li></a>
              <a href="#contacto"><li>CONTACTO</li></a>
            </ul>
    </navbar>
    
      <div id= "splashscreen" className="splashscreen">
  
        <div className="splashImage">
          <img id="logo" src= {logo} alt="logo"></img>
        </div>
        <section id='splashscreen2'>
          <p>SOFTWARE para entorno GxP</p>
        </section>
      </div>

      <section id= "productos" className="productos">
      <h2 className="textoServicios">Productos</h2>
      <article className="simma">
          <div className="recuadroSimma">
            <div className="tituloSimma">
              <div className="seccion1Simma">
               {/* <h3>01.</h3> */}
               {/* <h2 id="texto-animado">
                  <span>s</span>
                  <span>i</span>
                  <span>m</span>
                  <span>m</span>
                  <span>a</span>
                </h2> */}
                <img id= "logoSIMMA" src={logoSIMMA} alt=""></img>
              </div>
              <p>Gestión Integral de Laboratorio (LIMS)</p>
           </div>

          
            <div className="caracteristicasSimma">
            {seccionSimma === 1 && 
                <ul>
                <li>Plataforma integrada para todas las tareas de Control de Calidad, de contratación por Módulos.</li>
                <li><b>Materiales</b> (Materias primas e Insumos), <b>Productos</b> (en proceso, semielaborados y finales), <b>Aguas </b>(generación,  loops de planta, pretratamiento y red de consumo ), <b>Ambiente</b> (Monitoreo ambiental, personal, gases), <b>Validación de Limpieza</b> (de equipos y áreas). Próximamente: <b>Insumos Lab</b> (Gestión de Reactivos y soluciones)</li>
                <li>Circuito de registro en distintos estados: A inspeccionar / Pendientes / A revisar / Dictamen</li>
                </ul>
                }

                {seccionSimma === 2 &&
                <ul>
                <li>Alertas visuales y notificaciones por mail para registros con resultados fuera de límite/especificación, OOT,  incompletos, etc.</li>
                <li>Completa trazabilidad de análisis mediante registro de equipos y reactivos utilizados.</li>
                <li>Integración con lectura de códigos QR y de barras.</li>
                <li>Link a datos crudos en red y adjuntos (PDF, fotos).</li>
                </ul>
                }

                {seccionSimma === 3 &&
                <ul>
                
                <li>Gestión integrada de Cálculos asociados a análisis.</li>
                <li>Emisión de certificados de análisis y reportes de gestión.</li>
                <li>Integración con sistemas ERP para vinculacióncon maestro de materiales, productos,especificaciones y dictamen para el movimiento de stocks.</li>
                <li>Ofrecemos estudios de factibilidad e integración de la plataforma a instrumentos de medición para carga de datos en tiempo real.</li>
                </ul>
                }
            </div>
            <div className='botonesRecuadro'>
        <button onClick={() => cambiarSeccionSimma(1)}> {seccionSimma === 1 ? <p className='puntos'>&#9899;</p>:<p className='puntos'>&#9898;</p>}</button>
        <button onClick={() => cambiarSeccionSimma(2)}>{seccionSimma ===2? <p className='puntos'>&#9899;</p>:<p className='puntos'>&#9898;</p>}</button>
        <button onClick={() => cambiarSeccionSimma(3)}>{seccionSimma === 3? <p className='puntos'>&#9899;</p>:<p className='puntos'>&#9898;</p>}</button>
        </div>

          </div>

          <div className="fotoSimma">
            <img id= "simmaEstabilidad" src={simmaEstabilidad} alt="foto de producto Simma"></img>
            <button className='pedirDEMO'><a href="#contacto">Pedir DEMO</a></button> 
          </div> 
        
       
        </article>
        
        <article className="emme">
          <div className="recuadroEmme">
            {/* <h3>02.</h3> */}
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
                <p>Aplicación de Manejo de Equipos e Instrumentos</p>
            </div>
  
            <div className="caracteristicasEmme">
            {seccionEmme === 1 && 
                <ul>
                <li>Configuración de Maestro de Equipos, Instrumentos y proveedores.</li>
                <li>Configuración de Protocolos de Mantenimiento Preventivo y Calificacion de Equipos.</li>
                <li>Configuración de Protocolos de Calibracion de Instrumentos con diversos tipos de tolerancia.</li>
                <li>Seguimiento de actividades según frecuencia determinadas</li>
                </ul>
                }

                {seccionEmme === 2 &&
                <ul>
                <li>Advertencias visuales de actividades vencidas/ por vencer. Notificaciones automáticas por correo electrónico.</li>
                <li>Programacion de Tareas internas y listados para proveedores externos.</li>
                <li>Registro de Calibracion de Instrumentos con propiedades asociadas (patrones, condiciones ambientales, etc) Registro de ajustes <br></br>necesarios</li>
                </ul>
                }

                {seccionEmme === 3 &&
                <ul>
                
                <li>Reportes de evolución. Certificados de Calibracion</li>
                <li>Disponible para uso en Tablets Integrable a lectores de códigos QR/barras para identificación de equipos e instrumentos.</li>
                <li>Logbook Digital de Equipo/Instrumento con registro de todas las tareas y uso.</li>
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
                <button className='pedirDEMO'><a href="#contacto">Pedir DEMO</a></button> 
              </div>
        </article>
        {/* id="pedirDEMOemme" */}

        <article className="emqa">
          <div className="recuadroEmqa">
            <div className="tituloEmqa">
              <div className="seccion1Emqa">
               {/* <h3>03.</h3> */}
               {/* <h2 id="texto-animado">
                  <span>e</span>
                  <span>m</span>
                  <span>q</span>
                  <span>a</span>
                </h2> */}
                <img id= "logoEMQA" src={logoEMQA} alt=""></img>
              </div>
              <p>Aplicación para Gestion de Documentos, administración de Capacitacion y procesos de Garantia de Calidad</p>
           </div>

          
            <div className="caracteristicasEmqa">
              {seccionEmqa === 1 && 
                <ul>
                  <li>Administración de cualquier tipo de Documento del Sistema de Calidad.</li>
                  <li>Alta de Documentos con Anexos Asociados o Independientes</li>
                  <li> Gestión independiente de Documentos no GxP y Documentos GxP.</li>
                  <li>Control de emisión de Copias Controladas, No Controladas y Anexos mediante permisos específicos.</li>
                  <li>Alta de Documentos con circuitos de Revisión, Aprobación y  puesta en vigencia. Trazabilidad de versiones intermedias.</li>
                </ul>
              }

              {seccionEmqa === 2 &&
                <ul>
                  <li>Visualización de Documentos vigentes acorde a permisos, Sector del usuario y Alcance de los documentos.</li>
                  <li>Permite mantener mecanismo de codificación de documentos interno de cada Compañía e Implementar codificación automática.</li>
                  <li>Envio Automático de Notificaciones por correo electrónico. (Documento para Revisar, Aprobar, Documentos Vigentes, Vencidos, Obsoletos, etc)</li>
                  <li>Configuración de Perfiles de Puesto y Matriz de Capacitación</li>
                </ul>
              }

              {seccionEmqa === 3 &&
                <ul>
                  <li>Extensión de Vigencia de Documentos</li>
                  <li>Integrable con Office 365/Teams y Google Docs</li>
                  <li>Múltiples Reportes de Gestión. Búsqueda de Palabras en Documentos.</li>
                  <li>Integrable con soluciones ERP y Control de Calidad para Liberación de Producto para Venta.</li>
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
            {/* <h3>04.</h3> */}
            <div className="tituloEmap">
              <div className="seccion1Emap">
                {/* <h2>emAP</h2> */}
                <img id= "logoEMAP" src={logoEMAP} alt=""></img>
              </div>
                <p>Módulo de gestión de abastecimiento y producción de productos farmacéuticos y médicos</p>
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
                <li>Emisión de ordenes de fraccionamiento de materias primas y materiales de empaque.</li>
                <li>Gestión de OP/OE: Registro de cantidades utilizadas, controles de proceso, cálculos de rendimiento.</li>
                <li>Notificaciones configurables para mensajes por correo electrónico.</li>
                <li>Asignación de dictamen de control de calidad y liberación de garantía de calidad.</li>
                </ul>
                }

                {seccionEmap === 3 &&
                <ul>
                
                <li>Múltiples reportes: trazabilidad de materiales y productos, conciliación de stock.</li>
                <li>Integración con Modulo de Calidad Simma® para generación automática de protocolos de análisis de liberación, re-análisis y extensión de vencimiento.</li>
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

      <section id= "servicios" className="servicios">
        <article className='serviciosCuadro'>
        <h2 className="textoServicios">Servicios</h2>
        <div className="serviciosGrid">
          <div className="containerServicios" id="containerServicios1">
          <img id='desarrolloSoftware'src={desarrolloSoftware} />
          {/* <p>Desarrollamos <b>software a medida</b> para laboratorios según <b>requerimientos específicos</b> y ofrecemos servicios de <b>consultoría</b> para la <b>mejora de procesos</b>.</p>  */}
          <p>Desarrollo de nuevas funcionalidades bajo Requerimientos específicos de Usuario.</p>
          </div>
          <div className="containerServicios" id="containerServicios2">
          <img id='agil'src={agil} />
          <p>Parametrización inicial de las aplicaciones.</p> 
          </div>
          <div className="containerServicios" id="containerServicios3">
          <img id='solucion'src={solucion} />
          <p>Validación en entorno del cliente acorde a ISPE-GAMP 5.</p>
          </div>
        </div>
        </article>
      </section>

    
      <section id="nosotros" className="nosotros">
       <div className="cuadroNosotros">
        <div className="tituloNosotros">
        <h2>Nosotros</h2>
        </div>
          <div className="textoNosotros">
          {seccionActual === 1 && <p>Enlace Molecular es una empresa que desarrolla y comercializa aplicaciones de software  para compañías que ejecutan sus operaciones en ámbitos regulados (GxP). Nacemos en el año 2014 con el objetivo de dar soluciones informáticas a la industria farmacéutica. Nuestras aplicaciones cumplen lineamientos de CFR 21 parte 11 y el ciclo de validación está alineado a GAMP 5.</p>}
          {seccionActual === 3 && <p>Contamos con un equipo de profesionales con una amplia experiencia en desarrollo de software para laboratorios y en los aspectos productivos y procesos de calidad de la industria farmacéutica. Nos mantenemos actualizados para cumplir con las normativas regulatorias vigentes.</p>}
          {seccionActual === 2 && <p>Creemos que la calidad en la atención a nuestros clientes es fundamental, por eso ofrecemos una atención personalizada y acompañamos a los laboratorios que confían en nosotros en la implementación de herramientas que agilizan y hacen más robustos sus procesos.</p>}
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
