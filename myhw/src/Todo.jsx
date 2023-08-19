import React, { useState } from "react";
import "./App.css";
export default function Todo() {
  const [todo, setTodo] = useState([]);

  return (
    <div className="input">
      <label>enter text</label>
      <input type="text" name="input" onClick={(e)=>setTodo([...todo,e.target.value])} />
      {todo.map((items) => {return(<ul>{items}</ul>)})}
    </div>
  );
}
