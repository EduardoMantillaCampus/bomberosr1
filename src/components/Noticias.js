import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink,Link } from "react-router-dom";
import foto from "../assets/img/inicio/loading.gif"
import { padding } from "@mui/system";

const Noticias = ()  =>{
    const [isLoading, setIsLoading] = useState(true); 
    const [lista, setLista] = useState([]);

    const GetList = () =>  {
        axios.get("http://localhost:1337/api/noticias?populate=*").then((value)=>{
        setLista(value.data.data);
        setIsLoading(false);
        }).catch(error =>{
            console.log(error);
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
        <div>
        <div className="separador"></div>
            <div className="container">
                <div className="pag-noticias">
                    <h1>Noticias</h1>
                    <hr></hr>
                    {lista.map((item) =>{
                        return (
                            <div className="pag-noticias-box" key={item.id}>
                                <div className="pag-img">
                                    <img src={item.attributes.Imagen.data.attributes.url} alt=""></img>
                                </div>
                                <div className="pag-noticia">
                                    <h1>{item.attributes.titulo}</h1>
                                    <p>{item.attributes.contenido}</p>
                                    <Link className="btn btn-detalleNoti" to={"verNoticia/"+item.id}> Conocer Mas</Link>
                                </div>
                            </div>
                            )
                    })}
                </div>
            </div>
        <div className="separador"></div>
        </div>
        );
    };

export default Noticias;