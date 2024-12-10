import React, { useState } from "react";
import ToDoLists from "./Components/ToDoLists";

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const showList = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };


  const deleteItem = (id)=>
  {
    setItems((oldItems)=>{
      return oldItems.filter((arrElement,index)=>{
        return index !== id;
      })
    })
  }
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add Item"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={showList}>+</button>
          <ol>
            {/* <li>{inputList}</li> */}
            {items.map((itemVal, index) => {
              return <ToDoLists text={itemVal} key={index} id={index} onSelect = {deleteItem}/>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
