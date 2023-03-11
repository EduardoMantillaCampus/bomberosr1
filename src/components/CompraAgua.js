import React, {Component} from 'react';

class CompraAgua extends Component {

    render() {
        return(
        <React.Fragment>
            <div className="container presentarPqrds">
                    <h1>Compra Agua</h1>
                    <hr></hr>
                    <p className="campoObligatorio">Los campos con * son obligatorios</p>
                    <form class="row g-3">
                        <div class="col-12 col-md-6">
                            <label class="form-label">Nombre <span>*</span></label>
                            <input type="text" class="form-control form-control-sm" placeholder='Andres Fabian Correa Orduz'  required/>
                        </div>
                        <div class="col-12 col-md-6">
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
                            <input type="text" class="form-control form-control-sm" placeholder='Compra Agua' required/>
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
        </React.Fragment>
        );
    }
}

export default CompraAgua;
