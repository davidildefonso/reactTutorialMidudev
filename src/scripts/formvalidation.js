import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component{ 

  constructor(props){
    super(props);
    this.state={username:"",age:null}
  }

  mySubmitHandler=(event)=>{
    event.preventDefault();
    let age=this.state.age;
    if(!Number(age)){
      alert("you are submiting the form")
    }
    
    }

  myChangeHandler=(event)=>{
      let nam=event.target.name;
      let val= event.target.value;
      let lastEntry=val[val.length-1];
      if(nam=="age"){        
        if(!/\d/.exec(lastEntry)){        
          if(!/[xX]/.exec(lastEntry)){
             if(!/[+\-=]/.exec(lastEntry)){   
                event.target.value= val.slice(0,val.length-1);;
                this.setState({[nam]:val.slice(0,val.length-2)});
             }
          }
       
        }
      }
      
    
    
  }

  render(){
    let header="";
    if(this.state.username){
      header = <h1>Hello {this.state.username} you have {this.state.age}</h1>
    }else{
      header="";
    }
    return(
      <form onSubmit={this.mySubmitHandler}>
        {header}
        <p>Enter your name:</p>
        <input type="text" name="username" onChange={this.myChangeHandler}/>
        <p>Enter your age:</p>
        <input type="text" name="age" onChange={this.myChangeHandler}/>
        <input type="submit" value="Submit"/>
      </form>
          )
  }
}


export default MyForm;