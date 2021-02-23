import React from "react";
// import "./stylesImage.css";
const classes= require("./stylesImage.css");
const img= require("./myphoto.jpg");

export const AvatarImage: React.FC = () => {
    return (
        <div>
            <img className={classes.imagenPerfil} src={img} alt=""/>
        </div>
    )
}




// import React from "react";
// import * as styles from "./img.css";

// export const AvatarImage: React.FC = () => {
//     return (
//         <div className={styles.ejemplofoto}>
//             <img src="./myphoto.jpg" alt=""/>
//         </div>
//     )
// }