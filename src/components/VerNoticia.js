import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import foto from "../assets/img/inicio/loading.gif";

const VerNoticia = () =>{
    const [isLoading, setIsLoading] = useState(true); 
    const [noticia, setNoticia] = useState({});
 
    let params = useParams();
    var ruta = "http://localhost:1337/api/noticias/"+params.id+"?populate=*";
 
    useEffect(()=>{
        axios.get(ruta).then(value=>{
            setNoticia(value.data.data);
            setIsLoading(false);
        }).catch(error =>{
            console.log(error);
        });
    },[]);
    
    if (isLoading) {
        return (
        <div className="container d-flex justify-content-center">
            <img src={foto} style={{maxWidth:"100px", padding:"100px 0"}}></img>
        </div>);
    }

    return(
        <div className="container">
            <div className="contenido-noticia">
                <h1>{noticia.attributes.titulo}</h1>
                <h2> Noticia | {noticia.attributes.fechaPublicacion} | Bomberos de Lebrija</h2>
                <img src={noticia.attributes.Imagen.data.attributes.url} style={{maxWidth:'400px'}} />
                <p>{noticia.attributes.contenido}</p>    
            </div>
        </div>
    );
}
export default VerNoticia;

