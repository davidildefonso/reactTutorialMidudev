import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./styles/mysass.scss";

const Hola=(props)=>{
 // const msj="Hola mundo";
  return (
    <h2 style={{color:props.color}}>{props.msj}</h2>
  )
}

const Avatar=({size,src})=>{
  return (
    <img src={src} className={size?"small":"big"}></img>
  )
}


const Fecha=()=>{
  const date= new Date();
  const fecha= date.getDate()
        +"/"+(parseInt(date.getMonth())+1)+"/"+
        date.getFullYear();
  return (
    <h3>{ 'Hoy es: '+ fecha}</h3>  
  )
}


const App= ()=>{   
  
  const a=2;
  const b= 4;

  return(
     
      <div className="App">
        <Hola msj="Hola Mundo" color="dodgerblue"></Hola>
        <Fecha></Fecha>
        <Avatar size={"s"} src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png"></Avatar>
        


        
      </div>
    )
  
}


export default App;