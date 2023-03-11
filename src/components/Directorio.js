import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Directorio = () =>{
    const [lista, setLista] = useState([]);

    const GetList = () =>  {
        axios.get("http://192.168.100.10:1337/api/contactos?populate=*").then((value)=>{
        setLista(value.data.data);
        });
    };
    
    useEffect(()=>{
        GetList();
    });

    return(
        <React.Fragment>
        <div className="separador"></div>
            <div className="container directorioList">
                <h1>Directorio de Cuerpos de Bomberos</h1>
                <hr></hr>
                <br></br>
                <table className="table  table-bordered table-hover tablas">
                    <thead className="thead-dark">
                        <tr className="text-center">
                            <th>Cuerpo de Bomberos</th>
                            <th>Rol</th>
                            <th>Contacto</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody  className="text-center">
                    {lista.map((item) =>{
                        return (
                            <tr>
                                <td>{item.attributes.nombre}</td>
                                <td>{item.attributes.rol_bombero.data.attributes.rol}</td>
                                <td>{item.attributes.telefono}</td>
                                <td>{item.attributes.email}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            <div className="separador"></div>
        </React.Fragment>
            );
    };

export default Directorio;

