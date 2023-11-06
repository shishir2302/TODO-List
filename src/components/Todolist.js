import React from 'react'

export default function Todolist(props) {
  return (
    <>
    <nav className='list-container flex items-center mt-[5px] '>

     <li className="list-item list-none border-4 border-[rgb(161, 158, 158)] text-xl pl-[5px] rounded-[5px] w-[100%] h-[40px] flex items-center  relative mt-[10px]">
        {props.item}
        <span className='icons absolute right-[10px]'>
        <i className="fa-solid fa-trash-can icon-delete" 
        onClick={e=>{
          props.deleteItem(props.index)
        }}></i>
        {/* <i className="fa-solid fa-pen-to-square" 
        onClick={e=>{
          props.editItem(props.index)
        }} ></i> */}
        </span>
    </li>
    </nav>
    </>
  )
}
