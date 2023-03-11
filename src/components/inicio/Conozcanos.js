import React, { useEffect, useState } from "react";
import axios from "axios";

import Destacada from '../../assets/img/inicio/info-destacada.jpg';

const Conozcanos =() => {
    const [data, setLista] = useState([]);
    
    const GetList = () =>  {
        axios.get("http://localhost:1337/api/informacionbomberos?populate=*").then((value)=>{
        setLista(value.data.data);
        });
    };

    useEffect(()=>{
        GetList();
    });

    return (
        <React.Fragment>
            <div className="info-destacada">
                <div className="container">
                    {data.map((item) =>{
                        return(
                        <div className="box-info-destacada pt-4 pb-4" key={item.id}>
                            <div className="box-info-descatada-md">
                                <h1 className="box-info-titulo">{item.attributes.titulo}</h1>
                                <p className="box-info-text">{item.attributes.contenido}</p>
                            </div>
                            <div className="box-info-descatada-md">
                                <img src={item.attributes.imagen.data.attributes.url} alt=""></img>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
            <div className="separador"></div>
        </React.Fragment>
    );
}

export default Conozcanos;
