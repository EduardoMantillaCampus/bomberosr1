import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Invitacion extends Component {

    render() {
        return (
                <div className="convocatoria">
                    <div className="container" >
                        <div className="contenido-convocatoria">
                            <div className="title-convocatoria">
                                <h1>¿Te gustaria hacer parte de nuestro equipo de trabajo?</h1>
                            </div>
                            <div className="text-convocatoria">
                                <p className="alert alert-primary">Recibe el respaldo de una institución con mas de 20 años de experiencia en el servicio a la comunidad de Lebrija. Vincúlate como Voluntario si cumple los siguientes requisitos:</p>
                                <h1>Requisitos:</h1>
                                <ul>
                                    <li>Tener mínimo 18 años de Edad</li>
                                    <li>Ser ciudadano Colombiano o extranjero con cédula de extranjería</li>
                                    <li>Tener definida la situación militar</li>
                                    <li>Ser bachiller como mínimo</li>
                                    <li>Aprobar el proceso de selección estipulado por la institución</li>
                                    <li>No tener antecedentes judiciales</li>
                                    <li>Cursar y aprobar el curso de formación de Bombero I con una intensidad de 310 horas</li>
                                </ul>
                            </div>
                            <div className="boton-contacto">
                                <NavLink className="btn btn-sm btn-light" to="contacto"> Contactanos</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Invitacion;
