import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import {AvatarImage} from "../img/imagen";
import {PaginaSobreMi} from "../vistas/sobreMi";
import {PaginaFormacion} from "../vistas/formacion";
import { PaginaExperiencia } from '../vistas/experiencia';
import { PaginaHabilidades } from '../vistas/habilidades';
import { PaginaContacto } from '../vistas/contacto';


export const FormatoPag = () =>  {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
      >
        <h2>Paloma Ledesma Peña</h2>
        <div><AvatarImage/></div>
        <Tab label="Sobre mí" value={0}/>
        <Tab label="Formación" value={1}/>
        <Tab label="Experiencia" value={2}/>
        <Tab label="Habilidades" value={3}/>
        <Tab label="Contacto" value={4}/>

      </Tabs>
      {value === 0 ? <><PaginaSobreMi/></> : null}
      {value === 1 ? <><PaginaFormacion/></> : null}
      {value === 2 ? <><PaginaExperiencia/></> : null}
      {value === 3 ? <><PaginaHabilidades/></> : null}
      {value === 4 ? <><PaginaContacto/></> : null}
    </>
  );
}





