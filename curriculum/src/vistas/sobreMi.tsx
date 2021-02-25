import React from "react";
import  {Link} from "react-router-dom";



export const PaginaSobreMi: React.FC = () => {
    return (
        <>
        <h2>Sobre mí</h2>
        <div><Link to="/">Ir a info general</Link></div>
        </>
    )
};