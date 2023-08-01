import React, {useState,useEffect} from 'react';
import './App.css';

function App() {

const [items,setItems]=useState([]);
const [visible,setVisible]=useState(3);


useEffect(()=>{
  fetch("https://themealdb.com/api/json/v1/1/filter.php?a=british")
  .then((res)=>res.json())
  .then((data)=> setItems(data.meals))
},[])


  return (
    <div className="App">
     <h1 className='header'>British Meals</h1>
    </div>
  );
}

export default App;
