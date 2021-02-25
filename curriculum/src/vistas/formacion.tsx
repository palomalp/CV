import React from "react";
import  {Link} from "react-router-dom";

export const PaginaFormacion: React.FC = () => {
    return (
        <>
        <h2>Hello from Pagina formación</h2>
        <div><Link to="/">Ir a info general</Link></div>
        </>
    )
};