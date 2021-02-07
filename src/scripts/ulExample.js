import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./styles/mysass.scss";

class MyUl extends React.Component{ 

  render(){

    const items=["HTMl","CSS","SASS"];
    const listItems= items.map((item)=>
      <li> <a href="#">{item}</a> </li>
    );
    

    return(
      <nav>
        <ul>
          {listItems}
        </ul>
      </nav>
      
    )
  }
}


export default MyUl;