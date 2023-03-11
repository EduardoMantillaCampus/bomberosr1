import React, { Component } from 'react';

import img from '../assets/img/logo.png';

class SolicitarPqrds extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container presentarPqrds">
                    <h1>Presentar Pqrds</h1>
                    <hr></hr>
                    <div className="info-presentarPqrds">
                        <div className="mod-img">
                            <img src={img} width="100%" alt="Logo Bomberos"></img>
                        </div>
                        <div className="mod-info-pqrds">
                            <h3>Buzón de quejas, peticiones y reclamos</h3>
                            <p className="p-0 m-0"><strong >Apreciado ciudadano,</strong></p>
                            <p>La Ley 1437 de 2011 en su articulo 13 establece que "Toda actuación que inicie cualquier persona ante las autoridades implica el ejercicio del derecho de petición consagrado en el artículo 23 de la Constitución Política, sin que sea necesario invocarlo."</p>
                            <p>Recuerde que su petición estará sujeta a los términos interpuestos por la <a href="http://www.secretariasenado.gov.co/senado/basedoc/ley_1755_2015.html">ley 1755 de 2015</a></p>
                        </div>
                    </div>
                    <p className="campoObligatorio">Los campos con * son obligatorios</p>
                    <form class="row g-3">
                        <div class="col-12 col-md-4">
                            <label class="form-label">Nombre <span>*</span></label>
                            <input type="text" class="form-control form-control-sm" placeholder='Andres Fabian Correa Orduz'  required/>
                        </div>
                        <div class="col-12 col-md-4">
                            <label class="form-label">Telefono<span>*</span></label>
                            <input type="text" class="form-control form-control-sm" placeholder='316-1234567' required/>
                        </div>
                        <div class="col-12 col-md-4">
                            <label class="form-label">Email<span>*</span></label>
                            <input type="text" class="form-control form-control-sm" placeholder='andres@email.com' required/>
                        </div>
                        <div class="col-12 col-md-4">
                            <label class="form-label">Direccion<span>*</span></label>
                            <input type="text" class="form-control form-control-sm" placeholder='Lebrija Santander Barrio Popa' required/>
                        </div>
                        <div class="col-12 col-md-4">
                            <label class="form-label">Asunto<span>*</span></label>
                            <input type="text" class="form-control form-control-sm" placeholder='Solicitud pqrds' required/>
                        </div>
                        <div class="col-12 col-md-4">
                            <label class="form-label">Observacion<span>*</span></label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='contenido de prueba' rows="3"></textarea>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-success" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
                <div className="separador"></div>
            </React.Fragment>);
    }
}
export default SolicitarPqrds;
