import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/nf_form.css';
import axios from 'axios';

function NutritionForm() {
  const location = useLocation();
  const { food_items = "N/A", quantity = 1, serving_unit = "N/A" } = location.state || {}; 
  
  const [meal_type, setMeal] = useState("lunch");
  const [qty, setQty] = useState(quantity); 


  function handleSubmit(event) {
    event.preventDefault();

    axios.post("http://127.0.0.1:8000/add_meal", {
      food_items, 
      meal_type,
      quantity: qty, 
    })
    .then((res) => {
      alert("Meal added successfully!");
    })
    .catch((err) => {
      console.error("Error submitting meal:", err);
      alert("Failed to submit meal");
    });
  }

  return (
    <div className='nf_form'>
      <h3>Food</h3>
      <p>Name: {food_items}</p>
      <p>Serving unit: {serving_unit}</p>

      <div className="container">
        <form className='form' onSubmit={handleSubmit}> 
          <label>Meal</label>
          <input 
            placeholder='Select a meal' 
            type="text" 
            value={meal_type} 
            onChange={(e) => setMeal(e.target.value)} 
          />
          <br />

          <label>Serving Quantity</label>
          <input
            placeholder={quantity} 
            type='number'           
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            min="1"                
          />
          
          <br />

          <button type='submit'>Add</button>
        </form>
      </div>
    </div>
  );
}

export default NutritionForm;
