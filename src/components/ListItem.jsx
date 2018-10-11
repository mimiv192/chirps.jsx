// import React from 'react';
// import Chirp from './Chirp';

// export default (props) => {
//     return (
//         <div className= "d-flex flex-wrap align-items-center">
//         {props.chirp.map((chirp))}
//     )
// }

import React, {PureComponent} from "react";
import ListBody from './ListBody';

const styles = {
    li: {
        display: "flex",
        justifyContent:"flex-start",
        background:"white",
        boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.2)",
        color: "#707070",
        marginBottom: "1em",
        cursor:"pointer"
    },
    leftWall: color => ({
        width: "0.5em",
        backgroundColor: color
    })

};
export default class ListItem extends PureComponent {
    render() {
        return (
            <li 
            style={styles.li} 
            onClick = {() => this.props.handOnClick(this.props.id)} 
            >
            <div style = {styles.leftWall(this.props.completed ? "green" : "red")}/>
           <ListBody name = {this.props.name} description ={this.props.description}/> 
            </li>
        );
    }
}