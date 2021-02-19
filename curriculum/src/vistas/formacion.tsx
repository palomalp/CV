import React from "react";
import {Link} from "react-router-dom";

export const PaginaFormacion: React.FC = () => {
    return (
        <>
        <h2>Hello from Pagina formación</h2>
        <Link to="/experiencia">Navegar a página experiencia</Link>
        </>
    )
};