import React from "react";
import "../App.css";

const ToDoLists = (props) => {
  return (
    <>
      <div className="todo_style">
        <i className="fa fa-times " aria-hidden="true"/>
        <li>{props.list}</li>
      </div>
    </>
  );
};

export default ToDoLists;
