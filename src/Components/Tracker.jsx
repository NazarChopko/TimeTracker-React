import React,{ useEffect, useState,useRef} from 'react'
import moment from 'moment';
import tz from 'moment-timezone'
import classNames from 'classnames'


function Tracker({timerName,deleteTimer}) {

    const [time,setTime] = useState(moment.duration(0).asMilliseconds());
    const [switchButton,setSwitchButton] = useState(false)
    const stop = useRef(null)
    const timeFormatRender = moment(time).tz('Europe/London').subtract(1,'hours').format('HH:mm:ss')
    
    useEffect(()=> {
        startTimer();
        return stopButton}, [])
        
    
    const startTimer =()=> 
        stop.current = setInterval(() => {
            setTime((prev)=> moment.duration(moment.duration(prev).asMilliseconds() + 1000, 'milliseconds').asMilliseconds())
        }, 1000);
            
    const startButton = () =>{
        startTimer();
        setSwitchButton(false);
    }

    const stopButton = () =>{
    clearInterval(stop.current);
    setSwitchButton(true);
    }

    const isActive = classNames(
    {'tracker__container__body__inner':switchButton,
     'tracker__container__body__active':!switchButton})
        

return (
        <div className="tracker__container__body">
        <div className={isActive}>
            <div  className="tracker__container__body__name"> {timerName} </div>
            <div className="tracker__container__body__time" >{timeFormatRender}</div> 
        </div>
            <div className="tracker__container__body__button">
                {!switchButton 
                ?<button className="btn" onClick={stopButton}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="35px" height="35px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg></button>
                :<button className="btn" onClick={startButton}><svg xmlns="http://www.w3.org/2000/svg"  height="35" viewBox="0 0 24 24" width="35"><g><rect fill="none" height="24" width="24"/><path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M11,16H9V8h2V16z M12,16V8l5,4L12,16z"/></g></svg></button>
                }
            <button className="btn" onClick={deleteTimer} ><svg className="delete" xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/></svg></button>
            </div>
        </div>
    )
}

export default Tracker
