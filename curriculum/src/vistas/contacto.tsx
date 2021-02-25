import React from "react";
import {Link} from "react-router-dom";

export const PaginaContacto: React.FC = () => {
    return (
        <>
        <h2>Hello from Contacto</h2>
        <div><Link to="/">Ir a info general</Link></div>
        </>
    )
};