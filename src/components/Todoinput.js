import React,{ useState } from 'react'

export default function Todoinput(props) {
    const [inputText,setInputText] = useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }
  return (
    <div className="input-container flex justify-center mb-[10px]">
      <input
        type="text"
        className="input-box-todo pl-[10px] ml-[10px] w-[70%] h-[40px] rounded-[14px] border-4 border-black shadow-[0_10px_20px_rgba(0,0,0,0.3)] outline-none text-xl"
        placeholder="Enter your todo"
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
      />
      <button className="add-btn w-[40px] h-[40px] rounded-lg border-none bg-[#316fc1] font-bold text-2xl ml-[10px] cursor-pointer shadow-[0_10px_20px_rgba(0,0,0,0.3)]" 
      onClick={()=>{
        props.addList(inputText)
        setInputText("")
      }}>+</button>      
    </div>
  )
}
