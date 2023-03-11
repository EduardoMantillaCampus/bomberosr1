import React, { useEffect, useState } from "react";
import axios from "axios";
import {FaEye} from 'react-icons/fa';
import { NavLink,Link } from "react-router-dom";

const Noticias = () =>{
    const [lista, setLista] = useState([]);
    
    const GetList = () =>  {
        axios.get("http://localhost:1337/api/noticias?populate=*").then((value)=>{
        setLista(value.data.data);
        });
    };
    
    useEffect(()=>{
        GetList();
    });

    return(
        <React.Fragment>
                <div className="separador">
                </div>
                <div className="enterate">
                    <div className="container">
    
                            <div className="box-enterate-contenido">
                                <h1>Entérate</h1>
                                {/*<div id="noticia"></div>*/}
                                <div className="noticias-inicio">
                                {lista.map((item, index) =>{
                                    if(index <=2){
                                        return (
                                            <div className="noticia-inicio" key={item.id}>
                                                <div className="noticia-inicio-fecha">
                                                    <p>{item.attributes.fechaPublicacion}</p>
                                                </div>
                                                <div className="noticia-inicio-contenido">
                                                    <div className="noticia-inicio-img">
                                                    <img  src={item.attributes.Imagen.data.attributes.url } alt="contenido fallo" width="100%"></img>
                                                    </div>
                                                    <div className="noticia-contenido">
                                                        <h2>{item.attributes.titulo}</h2>
                                                        <p className="limitado">{item.attributes.contenido}</p>
                                                    </div>
                                                </div>
                                                <Link to={"VerNoticia/"+item.id} className="btn btn-sm"><FaEye/></Link>
                                            </div>
                                        )
                                    }
                                    
                                })}
                                </div>
                                <div className="w-100 d-flex justify-content-center pt-5">
                                <NavLink className="btn btn-conocermas" to="noticias"> Conocer Mas</NavLink></div>
                            </div>
                    </div>

                </div>
                <div className="separador">
                    <hr></hr>
                </div>
            </React.Fragment >
                
            
    );
};
export default Noticias;