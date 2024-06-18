import React, { useEffect, useContext } from "react";
import {Context} from "../store/appContext"
import { useNavigate } from "react-router";

export const CartaVehiculos = () => {
    const {store, actions } = useContext(Context);

    const navigate = useNavigate();

    useEffect(() => {
        actions.cargarVehiculos();
    }, []);

    return (
        <div id="carouselVehiculos" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            {store.vehiculos.map((vehiculo, index) => (
            <button key={index} type="button" data-bs-target="#carouselVehiculos" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-current={index === 0 ? "true" : "false"} aria-label={`Slide ${index + 1}`}></button>
            ))}
        </div>
        <div className="carousel-inner">
            {store.vehiculos.map((vehiculo, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={vehiculo.uid}>
                <div className="card-container">
                <div className="card" style={{ width: "18rem" }}>
                    <div className="img">
                    <img src={store.imagenesVehiculos[index]} className="card-img-top" alt={`Imagen de ${vehiculo.name}`} />
                    </div>
                    <div className="card-body">
                    <h5 className="card-title">{vehiculo.name}</h5>
                    <button className="btn btn-primary botonCard" onClick={() => {navigate(`/vista-vehiculo-individual/${vehiculo.uid}/${index}`)}}>VER MAS</button>
                    <p onClick={() => actions.comprobarFavoritos(vehiculo.name)}>
                        <label className="container">
                        <input type="checkbox" defaultChecked={false} />
                        <div className="checkmark">
                            <svg viewBox="0 0 256 256">
                            <rect fill="none" height="256" width="256"></rect>
                            <path d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z" strokeWidth="20px" stroke="#FFF" fill="none"></path>
                            </svg>
                        </div>
                        </label>
                    </p>
                    </div>
                </div>
                </div>
            </div>
            ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselVehiculos" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselVehiculos" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    );
};