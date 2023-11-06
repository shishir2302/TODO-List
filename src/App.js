
import './App.css';
import React, { useState } from 'react'
import Todoinput from './components/Todoinput'
import Todolist from './components/Todolist';

function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  
  return (
    <>
    <div className="main-container flex justify-center items-center h-[100vh]">
      <div className="center-container h-[500px] w-[350px]">
        <Todoinput addList={addList}/>
        <h1 className="app-heading p-[4px] uppercase">TODO</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return (
            <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}  />
          )
        })}
      </div>
    </div>
    </>
  );
}

export default App;
