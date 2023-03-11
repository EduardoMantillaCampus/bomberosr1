import React, { useEffect, useState } from "react";
import { NavLink,Link } from "react-router-dom";
import axios from "axios";
import foto from "../assets/img/inicio/loading.gif";

const Servicios = () =>{
    const [lista, setLista] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const GetList = () =>  {
        axios.get("http://localhost:1337/api/servicios?populate=*").then((value)=>{
        setLista(value.data.data);
        setIsLoading(false);
        });
    };
    
    useEffect(()=>{
        GetList();
    });

    if (isLoading) {
        return (
        <div className="container d-flex justify-content-center">
            <img src={foto} style={{maxWidth:"100px", padding:"100px 0"}}></img>
        </div>);
    }

    return(
        <React.Fragment>
            <div className="separador"></div>
                <div className="servicios">
                    <div className="container">
                        <div className="servicios-info">
                            <div className="servicios-info-contenido">
                                <h1> <span>Nuestros </span> Servicios</h1>
                                <p>Los bomberos no solo apagamos incendios, para toda la comunidad y establecimientos comerciales de nuestro municipio, contamos con personal idóneamente capacitado para prestar eficiente y eficazmente los siguientes servicios</p>
                            </div>
                        </div>
                        <div className="servicios-brindados">
                            {lista.map((item) => {
                                return(
                                <div className="servicio-bomberos" key={item.id}>
                                    <div className="servicios-bomberos-contenido">
                                        <h1>{item.attributes.titulo}</h1>
                                        <p>{item.attributes.contenido}</p>
                                        <NavLink className="btn btn-solicitar" to="pqrds"> Solicitar</NavLink>
                                    </div>
                                    <div className="servicios-bomberos-img">
                                        <img src={item.attributes.imagen.data.attributes.url} alt="Servicios Bomberos"></img>
                                    </div>
                                </div>
                                )
                            })}
                            
                        </div>
                    </div>
                </div>
                <div className="separador"></div>
        </React.Fragment >
    );
};
export default Servicios;

