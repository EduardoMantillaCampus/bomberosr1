import React, {Component} from 'react';

import img from '../assets/img/emergencias/emergencia2.jpg';

class Emergencias extends Component {

    render() {
        return(
        <React.Fragment>
            <div className="container">
            <div className="emergencias">
                <img src={img} alt=""></img>
                <div className="separador"></div>
                <h1>Tipos de <span style={{color:"brown"}}>Emergencias</span></h1>
                <hr></hr>
                <h3>Eventos</h3>
                <ol>
                    <li>ACTIVIDADES DE PREVENCION</li>
                    <li>ACOMPAÑAMIENTO EVENTOS MASIVOS</li>
                    <li>APOYO OPERATIVO</li>
                    <li>CAPACITACIONES</li>
                    <li>ENTREGA DE AYUDAS HUMANITARIAS</li>
                    <li>INSPECCIONES DE SEGURIDAD A EDIFICACIONES</li>
                    <li>MONITOREO FUENTES HIDRICAS</li>
                    <li>RESCATE CASOS SUICIDA</li>
                    <li>SERVICIOS ESPECIALES A LA COMUNIDAD</li>
                    <li>SIMULACROS</li>
                    <li>VERIFICACIÓN</li>
                </ol>
                <h3>Clasificacion Emergencias</h3>
                <ol>
                    <li>ACCIDENTE AEREO</li>
                    <li>ACCIDENTE MARITIMO</li>
                    <li>ACCIDENTE MINERO</li>
                    <li>ACCIDENTE FLUVIAL</li>
                    <li>ACCIDENTE DE TRANSITO</li>
                    <li>ATENCION PREHOSPITALARIA</li>
                    <li>AVALANCHA</li>
                    <li>BUSQUEDA Y RECUPERACION DE CUERPO</li>
                    <li>BUSQUEDA Y RESCATE DE PERSONA</li>
                    <li>RESCATE ANIMAL</li>
                    <li>COLAPSO</li>
                    <li>CAIDA DE ARBOL</li>
                    <li>CONTROL DE ABEJAS</li>
                    <li>CRECIENTE SUBITA</li>
                    <li>DERRAME DE HIDROCARBURO</li>
                    <li>DESABASTECIMIENTO DE AGUA</li>
                    <li>DESLIZAMIENTO</li>
                    <li>DESBORDAMIENTO</li>
                    <li>EXPLOSION</li>
                    <li>FUAGA DE GAS</li>
                    <li>FALSA ALARMA</li>
                    <li>FALLA ELECTRICA</li>
                    <li>GRANIZADA</li>
                    <li>INCENDIO ESTRUCTURAL</li>
                    <li>INCENDIO FORESTAL</li>
                    <li>INCENDIO VEHICULAR</li>
                    <li>INUNDACION</li>
                    <li>MATERIALES PELIGROS</li>
                    <li>OTROS</li>
                    <li>QUEMAS PROHIBIDAS</li>
                    <li>SEQUIA</li>
                    <li>SISMO</li>
                    <li>TRASLADO DE PACIENTE</li>
                    <li>TORMENTA ELECTRICA</li>
                    <li>VENDAVAL</li>
                </ol>
            </div>
        </div>

        <div className="separador"></div>
        </React.Fragment>
        );
    }
}

export default Emergencias;
