import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext"
import { useNavigate, useParams } from "react-router";

export const VehiculoIndividual = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        actions.cargarVehiculoIndividual(params.uid) 
     }, []);

      return (
        <div className="card-container containerIndividual">
            <div className="card cardIndividual" style={{ width: "18rem" }}>
                <img src={store.imagenesVehiculos[params.index]} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Nombre: {store.vehiculoSeleccionado.name}</h5>
                    <p className="card-text">Modelo: {store.vehiculoSeleccionado.model}</p>
                    <p className="card-text">Pasajeros: {store.vehiculoSeleccionado.passengers}</p>
                    <p className="card-text">Capacidad: {store.vehiculoSeleccionado.cargo_capacity}</p>
                </div>
            </div>
        </div>
    );
};