import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import imgLogo from '../../assets/img/logo.png';

const Header = () =>{

    return (
        <React.Fragment>
        <header>
            <p className='m-0'> Bomberos de Lebrija</p>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src={imgLogo}></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <NavLink className="nav-link " activeClassName="active-menu" to="/home">Inicio</NavLink>
                        <NavLink className="nav-link" activeClassName="active-menu" to="/servicios">Servicios</NavLink>
                        <NavLink className="nav-link" activeClassName="active-menu" to="/noticias">Noticias</NavLink>
                        <NavLink className="nav-link" activeClassName="active-menu" to="/emergencias">Emergencias</NavLink>
                        <NavLink className="nav-link" activeClassName="active-menu" to="/contacto">Contacto</NavLink>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Tramites 
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <NavLink className="dropdown-item" to="pqrds">Pqrds</NavLink>
                            <NavLink className="dropdown-item" to="compraAgua">Compra Agua</NavLink>
                            </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
        </React.Fragment>
    )
    
}

export default Header;