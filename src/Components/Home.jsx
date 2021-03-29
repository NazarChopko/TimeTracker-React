import React, {useState} from 'react'
import moment from 'moment'
import {v4 as uuidv4} from 'uuid'

import Tracker from './Tracker'


function Home() {

const [inputName,setInputName] = useState('');
const [allName,setAllName] = useState([])

    
const obj = {
    propertyName:inputName,
    id:uuidv4(), 
};


const data = moment().format('DD.MM.YYYY');
    
const handleName = (e) =>{
    setInputName(e.target.value)
    };
   
 const addName = () =>{
     if(obj.propertyName === ''){
         obj.propertyName = data
     }
    setAllName((prev)=>[obj,...prev])
    setInputName('')
        
    }    

const pressEnter = (e)=>{
 if(e.code === "Enter"){
     addName()
 }
}

const HandleDeleteTimer = (id) =>{
    setAllName((prev)=> prev.filter(el=> el.id !== id))
}

return (
    <div className="tracker__container">
        <div className="tracker__container__header">
            <h1>Tracker</h1>
            <div className="input_wrapper">
            <input onChange={e=>handleName(e)}  onKeyUp={e=>pressEnter(e)} type='text' value={inputName} placeholder='Enter tracker name'></input>
            <span onClick={addName}  ><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="40" viewBox="0 0 24 24" width="40"><g><rect fill="none" height="24" width="24"/><path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M11,16H9V8h2V16z M12,16V8l5,4L12,16z"/></g></svg></span>
            </div>
        </div>
        <div>
            { allName.map((el)=><Tracker deleteTimer={()=>HandleDeleteTimer(el.id)} timerName={el.propertyName} key={el.id}/>)}
        </div>
        
    </div>
    )
}

export default Home
