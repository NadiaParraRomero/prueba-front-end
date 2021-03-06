import React from 'react'
import { Route, Redirect, useLocation ,useHistory} from 'react-router-dom';
import '../../index.css';
import img1 from "../../img/img2.png";



const  Header = () =>{
    return (
    <>
     <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Main</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">           
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/buscar">Buscar</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/listar">Listado</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        
        <div className="solucion_contenido">
        <div  className="solucion_carrusel" data-bs-ride="carousel">
          <div >
            <img src={img1} className="d-block w-100 solucion_imagen" alt="..."/>
            </div>
          </div>
        </div>
    </>

    )
}


export default Header;