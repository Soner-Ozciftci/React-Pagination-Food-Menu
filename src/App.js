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
     <h1 className='header'>British Meals <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/640px-Flag_of_the_United_Kingdom_%283-5%29.svg.png'/h1>
   <div className='container'>
  {items.map(item => (
       <div className='card'>
        <div className='image'>
      <img src={item.strMealThumb} />
        </div>
        <p>{item.strMeal}</p>
       </div>
))}

   </div>
  </div>
  );
}

export default App;
