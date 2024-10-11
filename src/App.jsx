import React from 'react'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NutritionForm from './components/NutritionForm'
import Exercise from './components/Exercise'
import GoalsForm from './components/GoalsForm'
import Login from './auth/Login'
import Signup from './auth/Signup'
import Goals from './components/Goals'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/form' element={<NutritionForm />} />
      <Route path='/exercise' element={<Exercise />} />
      <Route path='/goal-form' element={<GoalsForm />} />
      <Route path='/login' element={<Login /> } />
      <Route path='/signup' element={<Signup />} />
      <Route path='/goals' element={<Goals />} />


      </Routes>
      </BrowserRouter>

  
    </div>

  )
}

export default App