import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext"
import { useNavigate, useParams } from "react-router";

export const PlanetaIndividual = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        actions.cargarPlanetaIndividual(params.uid) 
     }, []);

      return (
        <div className="card-container containerIndividual">
            <div className="card cardIndividual" style={{ width: "18rem" }}>
                <img src={store.imagenesPlanetas[params.index]} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Nombre: {store.planetaSeleccionado.name}</h5>
                    <p className="card-text">Población: {store.planetaSeleccionado.population}</p>
                    <p className="card-text">Clima: {store.planetaSeleccionado.climate}</p>
                    <p className="card-text">Gravedad: {store.planetaSeleccionado.gravity}</p>
                </div>
            </div>
        </div>
    );
};