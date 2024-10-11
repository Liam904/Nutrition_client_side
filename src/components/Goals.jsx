import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../css/goals.css'
function Goals() {
  const [weight, setWeight] = useState(0)
  const [calories, setCalories] = useState(0)
  const [protein, setProtein] = useState(0)
  const [carbs, setCarbs] = useState(0)
  const [fats, setFats] = useState(0)
  
  
  function getGoalsData(){
  axios.get("http://127.0.0.1:8000/all_goals",)
  .then(res => {
    console.log(res.data);
    const {calories, carbohydrates, exercise, fats, fibre, protein, weight} = res.data[0]

    setCalories(calories)
    setProtein(protein)
    setCarbs(carbohydrates)
    setFats(fats)
    setWeight(weight)
    
  })
}
  useEffect(()=> {
    getGoalsData();

  })
  return (
    <div>
        <div className="goals">
          <h2>Goals</h2>
                <p>weight: 99.5</p>
                <p>Goal weight: {weight} </p>
                <p>Calories {calories}</p>
                <p>Fats: {fats} </p>
                <p>Carbs: {carbs} </p>
        </div>
    </div>
  )
}

export default Goals