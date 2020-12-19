import React, { useState } from "react";
import "./styles.css";

var taskDB = [];

export default function App() {
  var [task, setTask] = useState("");

  function showInfo() {
    alert("Todo list App\nBy Mohammad Bilal\nUsing React\nDt : 19/12/20");
  }

  function getBgc(index) {
    if (index % 2 === 0) {
      return "lightpink";
    } else {
      return "wheat";
    }
  }

  function deleteItem(name) {
    if (taskDB.length === 0) {
      setTask("");
    } else {
      var index = taskDB.indexOf(name);
      // console.log(index);
      taskDB.splice(index, 1);
      setTask(name);
      // console.log(taskDB);
      console.log(name);
    }
  }

  function clearAll() {
    while (taskDB.length > 0) {
      taskDB.pop();
    }
    setTask("");
  }

  function addToList() {
    var taskDetails = prompt("Enter task Details: ");
    if (taskDetails === "" || taskDetails == null) {
      alert("Please Enter Task !!");
    } else {
      setTask(taskDetails);
      taskDB.push(taskDetails);
    }
  }
  return (
    <div className="App">
      <button id="add" onClick={addToList}>
        +
      </button>

      <button id="clr-all" style={{ margin: "0.5rem" }} onClick={clearAll}>
        Clear all
      </button>
      <button id="info" onClick={showInfo}>
        i
      </button>

      {taskDB.map(function (task, index) {
        return (
          <h3>
            <ol
              id="res"
              style={{
                backgroundColor: getBgc(index),
                paddingTop: "0.5rem",
                fontFamily: "Courier"
              }}
            >
              {task}
              <button
                id="dlt"
                style={{ margin: "0.5rem" }}
                onClick={() => deleteItem(task)}
              >
                X
              </button>
              <hr></hr>
            </ol>
          </h3>
        );
      })}
    </div>
  );
}
