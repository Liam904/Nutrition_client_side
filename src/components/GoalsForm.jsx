import React, { useState } from 'react'
import axios from 'axios';
import Goals from './Goals';

function GoalsForm() {
    const [calories, setCalories] = useState(2500)
    const [protein, setProtein] = useState(0)
    const [carbs, setCarbs] = useState(0)
    const [fat, setFat] = useState(0)
    const [weight, setWeight] = useState(0)
    const [exercise, setExercise] = useState(0)


    function handleSubmit(event){
        
        event.preventDefault();
        axios.post("http://127.0.0.1:8000/add_goals", {
            calories,
            protein,
            carbs,
            fat,
            weight,
            exercise
    
        })
        .then((res) => {
            console.log("success");
            
            console.log(res.data);
            
            
        })
        .catch((error) =>{
            console.error("The following error occured", error)
        })
    
    }

  return (
    <div className='nf_form'>
        <h3>Goals</h3>


        <div className="container">
            <form action="POST" className="form" onSubmit={handleSubmit}>
                <label>Calories</label>
                <input 
                placeholder='calories'
                type='number'
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                />
                <br />

                <label>Weight</label>
                <input
                placeholder='weight'
                value={weight}
                onChange={(e)=> setWeight(e.target.value)}

                />

                <br />

                <label>Exercise</label>
                <input 
                placeholder='Exercise'
                value={exercise}
                onChange={(e) => setExercise(e.target.value)}

                />
                <br />

                <label>protein</label>
                <input
                placeholder='proetein'
                value={protein}
                onChange={(e) => setProtein(e.target.value)}
                />
                <br />

                <label>carbs</label>
                <input
                placeholder='carbs'
                value={carbs}
                onChange={(e) => setCarbs(e.target.value)}
                />
                <br />
                <label>fats</label>
                <input
                placeholder='carbs'
                value={fat}
                onChange={(e) => setFat(e.target.value)}
                />
                <br />

                <button type='submit'>Add</button>
                
            </form>
        </div>

    
    </div>
    
  )
}

 
export default GoalsForm