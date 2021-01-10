import './App.css';
import React, { Component } from 'react';
import MovieGrid from "./Components/MovieGrid";
import EmployeeGrid from "./Components/EmployeeGrid";




class App extends Component {
 
  state = { 
    
    

   }

  
  render() { 
    return (  
    <React.Fragment> 

   <div className="row" style={{padding:"10px"}}>

     <div className="col-5">
     <MovieGrid setClass="table table-striped"/>
     </div>

     <div className="col-7">
     <EmployeeGrid setClass="table table-bordered"/>
  
     </div>



   </div>
    
      </React.Fragment> );
  }
   
}
 

export default App;
