import React, {useState, useEffect} from 'react'
import './Timer.css'

const TimerComponent = (props) => {

    const [seconds, setSeconds] = useState(60);
    const [isActive, setIsActive] = useState(props.onActivateTimer);

    console.log(isActive)


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
        </div>
    )
}

export default TimerComponent