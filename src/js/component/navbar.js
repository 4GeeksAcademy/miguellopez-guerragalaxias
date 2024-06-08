import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const [contador, setContador] = useState(0); 
    const {store,actions} = useContext(Context)
    const incrementarContador = () => {
        setContador(contador + 1);
  
    };

    {
        const navigate = useNavigate();
      
        const handleTitleClick = () => {
          navigate('/');
        };



    return (
        <nav className="navbar navbar-light mb-3">
            <div className="loading">
                <svg width="64px" height="48px">
                    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
                    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
                </svg>
                </div>
                <div className="loading">
                <svg width="64px" height="48px">
                    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
                    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
                </svg>
                </div>
                <div className="loading">
                <svg width="64px" height="48px">
                    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
                    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
                </svg>
                </div>
                <div className="titulo" onClick={handleTitleClick}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt="La guerra de las galaxias" />
                </div>
               <div className="loading">
                <svg width="64px" height="48px">
                    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
                    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
                </svg>
                </div>
                <div className="loading">
                <svg width="64px" height="48px">
                    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
                    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
                </svg>
                </div>
                <div className="loading">
                <svg width="64px" height="48px">
                    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
                    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
                </svg>
                </div>
        </nav>
    );
};