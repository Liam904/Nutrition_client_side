import React from "react";
import "../css/style.css"

const NutritionalTable = ({ protein, carbs, fats }) => {
  return (
    <div id="container-2">
      <h3>Nutritional Value</h3>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Total</th>
            <th>Goal</th>
            <th>Left</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Protein</td>
            <td>{protein}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Carbs</td>
            <td>{carbs}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Fats</td>
            <td>{fats}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NutritionalTable;
