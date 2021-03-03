import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import PaginaSobreMi from "../componentes/formatoPag"
import {AvatarImage} from "../img/imagen";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 700,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <h2>Paloma Ledesma Peña</h2>
        <div><AvatarImage/></div>
        <Tab label="Sobre mí" {...a11yProps(0)} />
        <Tab label="Formación" {...a11yProps(1)} />
        <Tab label="Experiencia" {...a11yProps(2)} />
        <Tab label="Habilidades" {...a11yProps(3)} />
        <Tab label="Contacto" {...a11yProps(4)} />

        
        {/* <div><Link to="/sobreMi">Sobre mí</Link></div>
        <Tab component={Link} label="Sobre mí" to="/sobreMi" {...a11yProps(0)} />
        <div><Link to="/formacion">Formación</Link></div>
        <div><Link to="/experiencia">Experiencia</Link></div>
        <div><Link to="/habilidades">Habilidades</Link></div>
        <div><Link to="/contacto">Contacto</Link></div> */}

      </Tabs>
      <TabPanel value={value} index={2}>
          <PaginaSobreMi/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Five
      </TabPanel>
    </div>
  );
}