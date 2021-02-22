import React from "react";
import  {Link} from "react-router-dom";
import {AvatarImage} from "../img/imagen";


export const PaginaInfoGeneral: React.FC = () => {
    return (
        <>
        <h2>Paloma Ledesma Peña</h2>
        <div><AvatarImage/></div>
        <div><Link to="/sobreMi">Sobre mí</Link></div>
        <div><Link to="/formacion">Formación</Link></div>
        <div><Link to="/experiencia">Experiencia</Link></div>
        <div><Link to="/habilidades">Habilidades</Link></div>
        <div><Link to="/contacto">Contacto</Link></div>
        </>
    )
};