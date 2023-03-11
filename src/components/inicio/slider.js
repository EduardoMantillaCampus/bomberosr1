import React, { useEffect, useState } from "react";
import axios from "axios";


const Slider = () =>{
    const [lista, setLista] = useState([]);
    
    const GetList = () =>  {
        axios.get("http://localhost:1337/api/sliders?populate=*").then((value)=>{
        setLista(value.data.data);
        });
    };
    
    useEffect(()=>{
        GetList();
    });

    return(
        <React.Fragment>
                 <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                {lista.map((item) =>{
                    var secuencia = "carousel-item";
                    if(item.id==1){
                        secuencia = "carousel-item active";
                    }else{
                        secuencia = "carousel-item";
                    }
                    return (
                    <div className={secuencia} key={item.id}>
                        <img src={item.attributes.sliderImg.data.attributes.url} className=""></img>
                    </div>
                    )
                })}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
        </div>
            </React.Fragment >
    );
};
export default Slider;