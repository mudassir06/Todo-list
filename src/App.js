import React, { useState } from "react";
import "./App.css";
import ToDoLists from "./components/ToDoLists";
const App = () => {
  const [inputList, SetInputList] = useState(" ");
  console.log(inputList);
  const [items, SetItems] = useState([]);
   console.log(items);
  const itemEvent = (event) => {
    SetInputList(event.target.value);
  };
  const listOfItems = () => {
    SetItems((oldItems) => {
      //(oldItems) access object or Array both.
      return [...oldItems, inputList];
    })
    SetInputList("");
  };
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input
  type="text"
  placeholder="Add Items"
  value={inputList}
  onChange={itemEvent}
/>

        <button onClick={listOfItems}>+</button>

        <ol>
          {/* <li>{inputList}</li> */}
          {items.map((itemval,index) => {
            // return <li key={index}>{itemval}</li>; //without Props
            return <ToDoLists key={index}
             list={itemval} />
            
            
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
