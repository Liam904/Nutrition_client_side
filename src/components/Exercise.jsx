import axios from 'axios'
import React, { useState } from 'react'

function Exercise() {
    const [exercise, setExercise] = useState("")
    const [duration, setDuration] = useState("")
    

    function handleSubmit(event){
        event.preventDefault();

const options = {
  method: 'POST',
  url: 'https://trackapi.nutritionix.com/v2/natural/exercise',
  headers: {
    'Content-Type': 'application/json',
    'x-app-id': 'e475c6ce',
    'x-app-key': '122305c7af14862e9c798ce5380630df'
  },
  data: {
    query: `${exercise} for ${duration}`
  }
};

axios(options)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

    }


  return (
    <div className='nf_form'>
      <h3>Exercise</h3>
        

        <div className="container">
        <form onSubmit={handleSubmit} className='form'>
          <label>Exercise</label>
            <input type="text" placeholder='exercise'
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
            />
            <br />
            <label>Duration</label>
            <input type="text" placeholder='duration'
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            />
            <br />
            
            <button>Submit</button>
        </form>

        </div>
    </div>
  )
}


export default Exercise