import React from "react";
import  {Link} from "react-router-dom";

export const PaginaSobreMi: React.FC = () => {
    return (
        <>
        <h2>Hello from Pagina sobre mí</h2>
        <Link to="/formacion">Navegar a página formación</Link>
        </>
    )
};