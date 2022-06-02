import React, { useRef, useState, useEffect } from 'react';
import './Math.css'
import ScoreComponent from './Score';
import TimerComponent from './Timer'
import Controls from './Controls'

let score = 0;
let points = 10;

const MathInput = (props) => {

    const difficulty = props.difficulty;
    const mathType = props.mathType;
    // Sets the max num based on selected difficulty
    let setDifficultyInteger = 10;
    let setMathSign = '+';
    // Stores user input for the answer
    const answerRef = useRef();
    // Array of two randomly generated Numbers
    const [randomNumbers, setRandomNumbers] = useState([]);
    // Stores the state of the correct answer
    const [correctAnswer, setCorrectAnswer] = useState()



    /* Logic to set math controls based on selected 
        difficulty and math type */
    if(difficulty === 'medium'){
        setDifficultyInteger = 15
        points = 15
    }else if(difficulty === 'hard'){
        setDifficultyInteger = 20
        points = 20
    }else{
        setDifficultyInteger = 10
        points = 10
    }

    if(mathType === 'subtraction'){
        setMathSign = '-'
    }else if(mathType === 'multiplication'){
        setMathSign = 'x'
    }else {
        setMathSign = '+'
    }


    /* Generates two random numbers and sets State */
    const generateNumbers = () => {
        let first_number = Math.ceil(Math.random() * setDifficultyInteger);
        let second_number = Math.ceil(Math.random() * setDifficultyInteger);
        console.log(`Generate Number ${[first_number, second_number]}`)
        if(first_number > second_number){
            setRandomNumbers([first_number, second_number]);
        }else {
            setRandomNumbers([second_number, first_number]);
        }
    }

    

    // CheckAnswer function that returns 
    const checkAnswer = (mathSign) => {
        console.log(mathSign)
        if(mathSign === '+' && randomNumbers[0] + randomNumbers[1] == answerRef.current.value ){
            console.log(`Correct Answer ${randomNumbers[0] + randomNumbers[1]}`)
            score = score + points
            setCorrectAnswer(true)
            generateNumbers();
            console.log(`Score: ${score}`)

        }else if(mathSign === '-' && randomNumbers[0] - randomNumbers[1] == answerRef.current.value) {
            console.log(`Correct Answer for Subtraction`)
            score = score + points
            generateNumbers();
            setCorrectAnswer(true)
            
        }else if(mathSign === 'x' && randomNumbers[0] * randomNumbers[1] == answerRef.current.value){
            console.log(`Correct Answer for Multiplication`)
            score = score + points
            generateNumbers();
            setCorrectAnswer(true)
        }else {
            setCorrectAnswer(false)
            score = score - points
        }
    }


    const startHandler = () => {
        generateNumbers()
        answerRef.current.focus();
        console.log('startHandler Executed')
    }



    const resetHandler = () => {
        setRandomNumbers([])
        console.log('Reset Handler')
    }


    // Handles the submission of the answer
        const submitAnswerHandler = (event) => {
            event.preventDefault();
            checkAnswer(setMathSign, randomNumbers)
            answerRef.current.value = ''
        }

   

    return (
        <>
        <div className='utilities-container'>
            <TimerComponent />
            <Controls onStart={startHandler} onReset={resetHandler}/>
            <ScoreComponent score={score}  />
        </div>
        <form className='math-container' onSubmit={submitAnswerHandler}>
            <h1>{randomNumbers[0]}</h1>
            <h2>{setMathSign}</h2>
            <h1>{randomNumbers[1]}</h1>
            <h2>=</h2>
            <input type='text' ref={answerRef} />
        </form>
        </>
    )
}


export default MathInput;