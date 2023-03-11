import React, { useEffect, useState } from "react";
import axios from "axios";
import {FaAngleDoubleRight} from 'react-icons/fa';
const Preguntas = () =>{
    const [listaPreguntas, setLista] = useState([]);
    
    const GetList = () =>  {
        axios.get("http://localhost:1337/api/preguntas-frecuentes").then((value)=>{
        setLista(value.data.data);
        });
    };
    
    useEffect(()=>{
        GetList();
    });

    return(
        <React.Fragment>
            <div className="container">
                <div className="pregFrecuentes">
                        {listaPreguntas.map((itemPreguntas) =>{
                            return (
                            <div className="pregFrecuente" key={itemPreguntas.id}>
                               <h2><FaAngleDoubleRight/> {itemPreguntas.attributes.titulo}</h2>
                               <p>{itemPreguntas.attributes.contenido}</p>
                            </div>
                            )
                        })}
                    </div>
                </div>
                <div className="separador"></div>
        </React.Fragment >
    );
};
export default Preguntas;