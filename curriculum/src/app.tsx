import React from 'react';
import {HashRouter, Switch, Route} from "react-router-dom";
import {PaginaSobreMi} from "./vistas/sobreMi";
import {PaginaExperiencia} from "./vistas/experiencia"
import {PaginaFormacion} from "./vistas/formacion";
import {PaginaHabilidades} from "./vistas/habilidades";
import {PaginaContacto} from "./vistas/contacto";

export const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/">
                    <PaginaSobreMi/>
                </Route>
                <Route path="/formacion">
                    <PaginaFormacion/>
                </Route>  
                <Route path="/experiencia">
                    <PaginaExperiencia/>
                </Route>
                <Route path="/habilidades">
                    <PaginaHabilidades/>
                </Route>
                <Route path="/contacto">
                    <PaginaContacto/>
                </Route>
            </Switch>
        </HashRouter>
    )
};
