import React from 'react';
import "./style.css";


const App=()=>{
  const employee={
    id:'ABC',
    name:'Antony',
    salary:'$10',
    address:{
      street:'210 Washington Street',
      country:'Canada',
      province:'Ontario',
      zones:{
        plantZone:'78',
        allenZone:'41',
      }
    }
  }
  const {name,id,address}=employee;
  const {street,country,province}=address;
  return(
    <div>
    <h1>{name}</h1>
    <h2>{id}</h2>
    <h3>{street,country,province}</h3>
    </div>
  )
}
export default App;