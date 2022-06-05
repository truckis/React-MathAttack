import React, {useState, useEffect} from 'react'
import './Timer.css'

const TimerComponent = (props) => {

    const [seconds, setSeconds] = useState(60);
    const [isActive, setIsActive] = useState(false);

    const selectTimeHandler = (event) => {
        setSeconds(event.target.value)
    }



   useEffect(() => {
       let interval = null;
       if (isActive && seconds !== 0) {
           interval = setInterval(() => {
               setSeconds(seconds => seconds - 1);
           }, 1000);
       }else if(isActive && seconds == 0) {
           clearInterval(interval);
           setIsActive(false)
       }
       return () => clearInterval(interval)
   }, [isActive, seconds]);

    return(
        <div className='timer-container'>
            <h3>Time</h3>
            <h2>{seconds}s</h2>
            <select onChange={selectTimeHandler} className='select-item'>
                <option value='15'>15</option>
                <option value='30'>30</option>
                <option value='45'>45</option>
                <option value='60'>60</option>
            </select>
        </div>
    )
}

export default TimerComponent