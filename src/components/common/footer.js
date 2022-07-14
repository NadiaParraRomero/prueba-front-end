import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom';
import '../../index.css';


const  Footer = () =>{
    return (
    <>

    <footer class="text-center text-lg-start bg-light text-muted"  >
        <section class="justify-content-center justify-content-lg-between p-3 border-bottom">
            <div class="me-5  d-lg-block">
              <span><p class="fs-6 px-4  pt-4">Nadia Parra &copy; Todos Los Derechos Reservados 2022 sección TI2031/D-B50-N3-P12-C1/D</p></span>
            </div>
          </section>
    </footer>
       
    </>
      )
    }
    
    
    export default Footer;