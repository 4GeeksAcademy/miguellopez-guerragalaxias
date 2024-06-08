import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext"
import { useNavigate, useParams } from "react-router";

export const PersonajeIndividual = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const params = useParams();


    useEffect(() => {
       actions.cargarPersonajeIndividual(params.uid) 
    }, []);

      return (
        <div className="containerIndividual">
            <div className="card cardIndividual" style={{ width: "18rem" }}>
                <img src={store.imagenesPersonajes[params.index]} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Nombre: {store.personajeSeleccionado.name}</h5>
                    <p className="card-text">Color de Pelo: {store.personajeSeleccionado.hair_color}</p>
                    <p className="card-text">Nacimiento: {store.personajeSeleccionado.birth_year}</p>
                    <p className="card-text">Color de Ojos: {store.personajeSeleccionado.eye_color}</p>
                    <p className="card-text">Genero: {store.personajeSeleccionado.gender}</p>
                    <p className="card-text">Altura: {store.personajeSeleccionado.height}</p>
                    <p className="card-text">Peso: {store.personajeSeleccionado.mass}</p>
                    <p className="card-text">Color de Piel: {store.personajeSeleccionado.skin_color}</p>
                </div>
            </div>
        </div>
    );
};