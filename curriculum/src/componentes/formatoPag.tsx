// import React from 'react';
// import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import {AvatarImage} from "../img/imagen";

// //formato general de la página:
// const DrawerWidth = 240;

// const UseStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: 'flex',
//     },
//     appBar: {
//       width: `calc(100% - ${DrawerWidth}px)`,
//       marginLeft: DrawerWidth,
//     },
//     drawer: {
//       width: DrawerWidth,
//       flexShrink: 0,
//     },
//     drawerPaper: {
//       width: DrawerWidth,
//     },
//     // necessary for content to be below app bar
//     toolbar: theme.mixins.toolbar,
//     content: {
//       flexGrow: 1,
//       backgroundColor: theme.palette.background.default,
//       padding: theme.spacing(3),
//     },
//   }),
// );


// export default function PermanentDrawerLeft() {
//   const classes = UseStyles();

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       {/* <AppBar position="fixed" className={classes.appBar}> */}
//         {/* <Toolbar>
//           {/* <Typography variant="h6" noWrap>
//             Permanent drawer
//           </Typography> */}
//         {/* </Toolbar> */} 
//       {/* </AppBar> */}
//       <Drawer
//         className={classes.drawer}
//         variant="permanent"
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//         anchor="left"
//       >
//         <Toolbar>
//             <div><p>Paloma Ledesma Peña</p></div>
//             <div><AvatarImage/></div>
//         </Toolbar>
//         <Divider />
//         <List>
//           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <main className={classes.content}>
//         <div className={classes.toolbar} />
//         <Typography paragraph>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//           ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
//           facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
//           gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
//           donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//           adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
//           Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
//           imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
//           arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
//           donec massa sapien faucibus et molestie ac.
//         </Typography>
//       </main>
//     </div>
//   );
// }
