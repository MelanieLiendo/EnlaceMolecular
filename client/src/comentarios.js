/* RESPONSIVE */


@media all and (min-width:901px){

    /*SERVICIOS*/
  
    .servicios{
      height: auto;
      margin-top: 0px;
      margin-bottom: 0px;
  }
  
    /*PRODUCTOS*/
  
    .app {
      max-width: 100vh;
    }
  
    .simma, .emqa, .emme, .emap{
      position: relative;
      height: 50vh;;
    }
  
    .recuadroSimma, .recuadroEmqa{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-5%, -50%);
      width: auto;
      height: 600px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    .fotoSimma, .fotoEmqa{
      transform: translate(-95%, -45%);
      position: absolute;
      left: 50%;
      top: 50%;
    }
  
  
    .recuadroEmap, .recuadroEmme{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-95%, -50%);
      width: auto;
      height: 550px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    .fotoEmap, .fotoEmme{
      transform: translate(-5%, -45%);
      position: absolute;
      left: 50%;
      top: 50%;
    }
  
    .tituloSimma p, .tituloEmap p, .tituloEmme p, .tituloEmqa p{
      justify-content: center;
      text-align: center;
      margin-right: 60px;
      margin-left: 60px;
    }
  
    .caracteristicasSimma, .caracteristicasEmme, .caracteristicasEmqa, .caracteristicasEmap{
      justify-content: center;
      width: 80%;
    }
  
    /* NOSOTROS */
  
    .nosotros {
      height: 60vh;}
  
  }
  
  @media (min-width: 901px) and (max-height: 999px) {
  
    .simma, .emqa, .emme, .emap{
      position: relative;
      height: 80vh;;
    }
  
  }
  
  
  @media (min-width: 901px) and (max-height: 700px) {
  
    .simma, .emqa, .emme, .emap{
      position: relative;
      height: 100vh;;
    }
  
  }
  
  @media all and (min-width:1600px){
  
  
    /*NAVBAR*/
    #navbar ul li {
      font-size: 1.7em;
      margin-right: 60px;
  }
  
  #logo {
    width: 800px;
    height: auto;
    position: relative;
    top: 70%;
  }
  
  #splashscreen2 p {
    font-size: 2em;
    
  }
  
  h2 {
    font-size: 4em;
  }
  
  /*PRODUCTOS*/
  
  .textoServicios {
    margin: 70px 0px;
  }
  
  .pedirDEMO{
    width: 220px;
    height: 45px;
    font-size: 1.5em;
  }
  
  .caracteristicasSimma, .caracteristicasEmap, .caracteristicasEmme, .caracteristicasEmqa {
    font-size: 1.3em;
  }
  
    .simma, .emqa, .emme, .emap{
      position: relative;
      height: 100vh;
    }
  
    .recuadroEmap, .recuadroEmme, .recuadroEmqa, .recuadroSimma{
     padding: 40px;
      justify-content: center;
      display: flex;
      height: 700px;
      padding: 40px;
      width: 850px;
    }
  
  .tituloSimma p, .tituloEmme p, .tituloEmap p, .tituloEmqa p {
    font-size: 2em;
    margin-right: 100px;
      margin-left: 100px
  }
  
  #logoSIMMA, #logoEMME, #logoEMQA, #logoEMAP {
    width: 350px;}
  
  
  .fotoSimma img, .fotoEmme img, .fotoEmqa img, .fotoEmap img {
    width: 700px;
    height: auto;
  }
  
  
  .recuadroSimma, .recuadroEmqa{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-13%, -50%);
  }
  
  .recuadroEmap, .recuadroEmme{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-85%, -50%);
  }
  
  .fotoSimma, .fotoEmqa{
    transform: translate(-108%, -45%);
    position: absolute;
    left: 50%;
    top: 50%;
  }
  
  
  .fotoEmap, .fotoEmme{
    transform: translate(10%, -45%);
    position: absolute;
    left: 50%;
    top: 50%;
  }
  
     /*SERVICIOS*/
  
     .servicios p {
      font-size: 1.5em;
  }
  
  .containerServicios {
    height: 500px;
  }
  
  .servicios img {
    width: 120px;
  }
  
    /*NOSOTROS*/
  
    .textoNosotros p {
      font-size: 1.7em;
    }
  
    .nosotros {
      margin: 150px 0px;
      height: 70vh;
    }
  
    /*CLIENTES*/
  
    .containerClientes img{
      width: 330px;
    }
  
    #poen, #richet{
      width: 150px;
    }
     /*CONTACTO*/
  
     .material {
      height: 800px;
      width: auto;
      background-repeat: no-repeat;
      background-size: cover;
  
    }
  
    .material input {
      height: 140px;
    }
  
      .material input, .material textarea {
        font-size: 30px;
      }
  
      .material button{
        width: 250px;
      height: 70px;
      font-size: 2em;
      }
  
      .mensajeEnviado{
        font-size: 30px;
      }
  
      .material input:focus, .material textarea:focus{
        padding-top: 15px;
      }
    
    
      input:focus::placeholder {
        font-size: 20px; 
      }
      
      textarea:focus::placeholder {
        font-size: 20px; 
      } 
  
    /* FOOTER */
  
    .footerSocial {
      margin-top: 1090px;}
  
      #linkedinLogo {
        width: 85px;}
  
      .footer p {
          font-size: 30px;}
  
  }
  
  @media all and (min-width:1800px){
    .simma, .emqa, .emme, .emap {
      
      height: 70vh;}
  
  }
  
  
  @media all and (min-width:2000px){
  
    
    /*NAVBAR*/
    #navbar ul li {
      font-size: 3em;
      margin-right: 60px;
  }
  
  #logo {
    width: 900px;
    height: auto;
    position: relative;
    top: 70%;
  }
  
  #splashscreen2 p {
    font-size: 3em;
    
  }
  
  h2 {
    font-size: 6em;
  }
  
  /*PRODUCTOS*/
  
  .textoServicios {
    margin: 70px 0px;
  }
  
  .pedirDEMO{
    width: 220px;
    height: 45px;
    font-size: 1.5em;
  }
  
  .caracteristicasSimma, .caracteristicasEmap, .caracteristicasEmme, .caracteristicasEmqa {
    font-size: 1.6em;
  }
  
    .simma, .emqa, .emme, .emap{
      position: relative;
      height: 60vh;
    }
  
  
  .tituloSimma p, .tituloEmme p, .tituloEmap p, .tituloEmqa p {
    font-size: 3em;
    margin-right: 100px;
      margin-left: 100px
  }
  
  
  .fotoSimma img, .fotoEmme img, .fotoEmqa img, .fotoEmap img {
    width: 750px;
    height: auto;
  }
  
  
  .recuadroEmap, .recuadroEmme, .recuadroEmqa, .recuadroSimma {
    height: 700px;
    width: auto;
    display: flex;
    justify-content: center;
  }
  
  .recuadroSimma, .recuadroEmqa{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-25%, -50%);
  }
  
  .recuadroEmap, .recuadroEmme{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-80%, -50%);
  }
  
  .fotoSimma, .fotoEmqa{
    transform: translate(-125%, -45%);
    position: absolute;
    left: 50%;
    top: 50%;
  }
  
  
  .fotoEmap, .fotoEmme{
    transform: translate(25%, -45%);
    position: absolute;
    left: 50%;
    top: 50%;
  }
  
  
    /*SERVICIOS*/
  
    .servicios p {
      font-size: 2em;
  }
  
  .containerServicios {
    height: 600px;
  }
  
  .servicios img {
    width: 150px;
  }
  
    /*NOSOTROS*/
  
    .textoNosotros p {
      font-size: 2em;
    }
  
    .nosotros {
      margin: 200px 0px;
  
    }
  
    /*CLIENTES*/
  
    .containerClientes img{
      width: 350px;
    }
  
    /*CONTACTO*/
  
    .material {
      height: 800px;
      width: auto;
      background-repeat: no-repeat;
      background-size: cover;
  
    }
  
    .material input {
      height: 140px;
    }
  
      .material input, .material textarea {
        font-size: 40px;
      }
  
      .material button{
        width: 300px;
      height: 80px;
      font-size: 2.8em;
      }
  
      .mensajeEnviado{
        font-size: 40px;
      }
  
      .material input:focus, .material textarea:focus{
        padding-top: 20px;
      }
    
    
      input:focus::placeholder {
        font-size: 30px; 
      }
      
      textarea:focus::placeholder {
        font-size: 30px; 
      } 
  
    /* FOOTER */
  
    .footerSocial {
      margin-top: 1090px;}
  
      #linkedinLogo {
        width: 100px;}
  
        .footer p {
          font-size: 40PX;}
  
  }
  
  @media all and (min-width:3000px){
  
    
    /*NAVBAR*/
    #navbar ul li {
      font-size: 4em;
  }
  
  #navbar ul li {
    margin-right: 100px;
  }
  
  #logo {
    width: 1500px;
    height: auto;
    position: relative;
    top: 70%;
  }
  
  #splashscreen2 p {
    font-size: 4.2em;
    
  }
  
  h2 {
    font-size: 8em;
  }
  
  /*PRODUCTOS*/
  
  .textoServicios {
    margin: 70px 0px;
  }
  
  .caracteristicasSimma, .caracteristicasEmap, .caracteristicasEmme, .caracteristicasEmqa {
    font-size: 2em;
  }
  
    .simma, .emqa, .emme, .emap{
      position: relative;
      height: 40vh;
    }
  
  
  .tituloSimma p, .tituloEmme p, .tituloEmap p, .tituloEmqa p {
    font-size: 3em;
    margin-right: 100px;
      margin-left: 100px
  }
  
  
  .fotoSimma img, .fotoEmme img, .fotoEmqa img, .fotoEmap img {
    width: 750px;
    height: auto;
  }
  
  
  .recuadroEmap, .recuadroEmme, .recuadroEmqa, .recuadroSimma {
    height: 700px;
    width: 1500px;
  }
  
  .recuadroSimma, .recuadroEmqa{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-35%, -50%);
  }
  
  .recuadroEmap, .recuadroEmme{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-80%, -50%);
  }
  
  .fotoSimma, .fotoEmqa{
    transform: translate(-155%, -45%);
    position: absolute;
    left: 50%;
    top: 50%;
  }
  
  .pedirDEMO {
    width: 220px;
    height: 45px;
    font-size: 1.5em;}
  
  
  .fotoEmap, .fotoEmme{
    transform: translate(25%, -45%);
    position: absolute;
    left: 50%;
    top: 50%;
  }
  
  
    /*SERVICIOS*/
  
    .servicios p {
      font-size: 3em;
  }
  
  .containerServicios {
    height: 700px;
  }
  
  .servicios img {
    width: 200px;
  }
  
    /*NOSOTROS*/
  
    .textoNosotros p {
      font-size: 3em;
    }
  
    .nosotros {
      margin: 200px 0px;
  
    }
  
    /*CLIENTES*/
  
    .containerClientes img{
      width: 400px;
    }
  
    /*CONTACTO*/
  
    .material {
      height: 800px;
      width: auto;
      background-repeat: no-repeat;
      background-size: cover;
    }
  
    .material input, .material textarea{
      font-size: 50px;
    }
  
    .material input:focus, .material textarea:focus{
      padding-top: 20px;
    }
  
  
    input:focus::placeholder {
      font-size: 40px; 
    }
    
    textarea:focus::placeholder {
      font-size: 40px; 
    } 
  
    .mensajeEnviado{
      font-size: 50px;
    }
    
  
    /* FOOTER */
  
    .footerSocial {
      margin-top: 1090px;}
  
  
  
  }
  
  
  
  
  @media all and (max-width:900px){
  
    /* NAVBAR */
    #navbar{
      display:none;
  }
  
  /* SERVICIOS */
  
  .serviciosGrid{
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
  }
  
  .servicios{
    height: auto;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  
  /* PRODUCTOS */
  
  .productos {
    margin: 40px;
  }
  
  .textoServicios {
    text-transform: uppercase;
    margin-top: 40px;
    margin-bottom: 40px;
    line-height: 1.2;
  }
  
  #productos h3{
    display: none;
  }
  
  #simmaEstabilidad, #emme, #emme2, #emap2{
    display: none;
  }
  
  .recuadroSimma, .recuadroEmqa, .recuadroEmme, .recuadroEmap {
    position: unset;
    width: 100%;
    height: 600px;
    justify-content: center;
    display: flex;
  }
  
  
  .simma, .emme, .emqa, .emap{
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    height: auto;
  }
  
  .tituloSimma p, .tituloEmap p, .tituloEmme p, .tituloEmqa p{
    justify-content: center;
    text-align: center;
    margin-right: 10px;
    margin-left: 10px;
  }
  
  .caracteristicasSimma, .caracteristicasEmme, .caracteristicasEmqa, .caracteristicasEmap{
    justify-content: center;
  }
  .caracteristicasSimma li{
    padding-left: 0px;
  }
  
  
  .fotoEmap, .fotoEmme, .fotoEmqa, .fotoSimma {
    display: none;
  }
  
  /* NOSOTROS */
  
  .cuadroNosotros {
    display:block ;
    height: fit-content;
  }
  
  .nosotros{
    margin-top: 80px;
    margin-bottom:70px;
    height: 50vh;
  }
  
  .tituloNosotros{
    position: unset;}
  
    .textoNosotros p {
      font-size: small;
    }
  
  
    /* CLIENTES*/
  
    #clientes{
      height: 30vh;
    }
  
  
    /* contacto */
  
  .contenido {
    margin: 25px;}
  
    /* footer */
  
    .footer {
      margin-right: 10px;
      margin-left: 10px;
  }
  
  
  
  }
  
  @media all and (max-width:460px){
  
    h2 {
      font-size: 2.5em;
      margin-right: 5px;
      margin-left: 5px;
    }
      /*NAVBAR*/
  
      #navbar {
        display: none;
      }
  
      /* SPLASHSCREEN */
      #logo {
        width: auto;
        height: 70px;
      }
  
    
    /* SERVICIOS */
    
    .serviciosGrid{
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      justify-items: center;
    }
    
    .servicios{
        height: auto;
        margin-top: 0px;
        margin-bottom: 0px;
    }
  
    .containerServicios {
      height: 250px;
    }
  
    .servicios p {
      font-size: 0.8em;
    }
  
    .servicios img {
      width: 90px;
      height: auto;
    }
    
    /* PRODUCTOS */
  
    .productos {
      margin: 20px;
    }
    
    #simmaEstabilidad, #emme, #emme2, #emap2{
      display: none;
    }
    .caracteristicasSimma li{
      padding-left: 0px;
    }
    
    .recuadroSimma, .recuadroEmqa, .recuadroEmme, .recuadroEmap{
      display: flex;
      position: unset;
      width: 100%;
      height: 600px;
      justify-content: center;
    }
   
  
    .simma, .emme, .emqa, .emap{
      margin-bottom: 40px;
      display: flex;
      flex-direction: column;
      height: auto;
    }
  
    .tituloSimma p, .tituloEmap p, .tituloEmme p, .tituloEmqa p{
      justify-content: center;
      text-align: center;
      margin-right: 10px;
      margin-left: 10px;
      font-size: 1.2em;
    }
    
    .caracteristicasSimma, .caracteristicasEmme, .caracteristicasEmqa, .caracteristicasEmap{
      justify-content: center;
    }
  
    .caracteristicasSimma ul, .caracteristicasEmme ul, .caracteristicasEmqa ul, .caracteristicasEmap ul{
      margin: 0 10px;
    }
    
  
    .fotoEmap, .fotoEmme, .fotoEmqa, .fotoSimma {
      display: none;
    }
    /* NOSOTROS */
    
    .cuadroNosotros {
      display:block ;
      height: fit-content;
    }
    
    .nosotros{
      margin-top: 80px;
      margin-bottom:70px;
    }
    
    .tituloNosotros{
      position: unset;
    }
  
    .textoNosotros p {
      font-size: 0.7em;
    }
  
    /* SERVICIOS */
  
    .textoServicios {
      text-transform: uppercase;
      margin-top: 40px;
      margin-bottom: 40px;
      line-height: 1.2;
  }
  
    /* CLIENTES*/
  
    #clientes{
      height: 30vh;
    }
  
    /* contacto */
  
    .contenido {
      margin: 25px;}
  
      .footer {
        margin-right: 10px;
        margin-left: 10px;
    }
    
  }
  
  @media all and (max-width:360px){
  
    h2 {
      font-size: 2em;
    }
      /*NAVBAR*/
  
      #navbar {
        display: none;
      }
  
      /* SPLASHSCREEN */
      #logo {
        width: auto;
        height: 70px;
      }
  
    
    /* SERVICIOS */
    
    .serviciosGrid{
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      justify-items: center;
    }
    
    .servicios{
        height: auto;
        margin-top: 0px;
        margin-bottom: 0px;
    }
  
    .containerServicios {
      height: 200px;
    }
  
    .servicios p {
      font-size: 0.7em;
    }
  
    .servicios img {
      width: 70px;
      height: auto;
    }
    
    /* PRODUCTOS */
  
    .productos {
      margin: 20px;
    }
    
    #simmaEstabilidad, #emme, #emme2, #emap2{
      display: none;
    }
    .caracteristicasSimma li{
      padding-left: 0px;
    }
    
    .recuadroSimma, .recuadroEmqa, .recuadroEmme, .recuadroEmap{
      display: flex;
      position: unset;
      width: 100%;
      height: 500px;
      justify-content: center;
    }
   
  
    .simma, .emme, .emqa, .emap{
      margin-bottom: 40px;
      display: flex;
      flex-direction: column;
      height: auto;
    }
  
    .tituloSimma p, .tituloEmap p, .tituloEmme p, .tituloEmqa p{
      justify-content: center;
      text-align: center;
      margin-right: 10px;
      margin-left: 10px;
      font-size: 0.8em;
    }
    
    .caracteristicasSimma, .caracteristicasEmme, .caracteristicasEmqa, .caracteristicasEmap{
      justify-content: center;
    }
  
    .caracteristicasSimma ul, .caracteristicasEmme ul, .caracteristicasEmqa ul, .caracteristicasEmap ul{
      margin: 0 10px;
      font-size: 0.8em;
    }
    
  
    .fotoEmap, .fotoEmme, .fotoEmqa, .fotoSimma {
      display: none;
    }
  
    #logoSIMMA, #logoEMME, #logoEMQA, #logoEMAP {
  width: 170px;
  height: auto;
    }
    /* NOSOTROS */
    
    .cuadroNosotros {
      display:block ;
      height: fit-content;
    }
    
    .nosotros{
      margin-top: 80px;
      margin-bottom:70px;
    }
    
    .tituloNosotros{
      position: unset;
    }
  
    .textoNosotros p {
      font-size: 0.6em;
    }
  
    /* SERVICIOS */
  
    .textoServicios {
      text-transform: uppercase;
      margin-top: 40px;
      margin-bottom: 40px;
      line-height: 1.2;
  }
  
    /* CLIENTES*/
  
    #clientes{
      height: 30vh;
    }
  
    /* contacto */
  
    .contenido {
      margin: 25px;}
  
      .footer {
        margin-right: 10px;
        margin-left: 10px;
    }
    
  
    
    
  
  }