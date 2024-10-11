import React from "react";
import "../css/list.css"; 

const List = ({ title, items }) => (
  <div>
        {items.map((item, index) => (
          <li
            key={index}
            className="list-group-item"
          >         
              <div className="fw-bold">{item.title}</div>
              <div className="content">{item.content}</div>
              
          </li>
        ))}
    
  
  </div>
);

export default List;
