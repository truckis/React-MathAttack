import './Score.css'

const ScoreComponent = (props) => {
    return(
        <div className='score-container'>
            <h2>Score: {props.score}</h2>
        </div>
    )
}

export default ScoreComponent