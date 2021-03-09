import React from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import {PaginaSobreMi} from "./vistas/sobreMi";
import {PaginaExperiencia} from "./vistas/experiencia"
import {PaginaFormacion} from "./vistas/formacion";
import {PaginaHabilidades} from "./vistas/habilidades";
import {PaginaContacto} from "./vistas/contacto";
// import {PaginaInfoGeneral} from "./vistas/infoGeneral";
import {FormatoPag} from "./componentes/formatoPag";
// import {AvatarImage} from "./img/imagen";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
      <Switch>
        <Route exact path ="/">
          <FormatoPag/>
        </Route>
        <Route path="/sobreMi">
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
    </div>
  </BrowserRouter>
  )
};