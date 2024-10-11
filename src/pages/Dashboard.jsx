import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchNutritionalData, fetchSearchData } from "../api/nutritionApi"; // Centralized API calls
import NutritionalTable from "../components/NutritonalTable";
import List from "../components/List";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import Exercise from "../components/Exercise";
import '../css/style.css'


const Dashboard = ({exercise}) => {
  const [protein, setProtein] = useState([]);
  const [carbs, setCarbs] = useState([]);
  const [fats, setFats] = useState([]);
  const [input, setInput] = useState("");
  const [result, setResult] = useState([])
  const [kcalories, setCalories] = useState(0)
  
  
   

  const caloriesData = [
    { title: "Calories Remaining", content: 2500 - kcalories },
    { title: "Food", content: kcalories },
    { title: "Base Goal", content: 2500 },
  ];

  
  const exerciseData = [
    {title: "Exercise", content:"" },
    { title: "Step Count", content: "Content for list item" },
    { title: "Base Goal", content: "Content for list item" },
  ];

  const handleChange = (value) => {
    setInput(value);
    fetchSearchData(value)
      .then((res) => {
      
        setResult(res.data.common)
        console.log(result);
        
        
      })
      .catch((err) => {
        console.error("Error fetching data", err);
        
      });
  };


  useEffect(() => {
    fetchNutritionalData().then((res) => {
      const { calories, protein, carbs, fats,  } = res.data;
      setProtein(protein);
      setCarbs(carbs);
      setFats(fats);
      setCalories(calories)

      console.log(kcalories);
      
      console.log(res.data);
    
      
    });
  }, []);

  return (
    <div id="body">
      <Header input={input} handleChange={handleChange} />
      <SearchResults result={result} />
      
      <div id="container-wrapper">
        <div id="container-1">
          <List title="Calories" items={caloriesData} />
        </div>
        <div id="container-3" >
          <List title="Exercise" items={exerciseData} />
        </div>
      </div>
      <NutritionalTable protein={protein} carbs={carbs} fats={fats} />
    </div>
    
  );
};

export default Dashboard;
