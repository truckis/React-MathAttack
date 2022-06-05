import './Controls.css'
import Button from '../UI/Button/Button'

const Controls = (props) => {

    const startHandler = () => {
        return props.onStart()
    }

    const resetHandler = () => {
        return props.onReset()
    }

    return (
        <div className='controls-container'>
            <Button onClick={startHandler}>Start</Button>
            <Button onClick={resetHandler}>Reset</Button>
        </div>
    )
}

export default Controls