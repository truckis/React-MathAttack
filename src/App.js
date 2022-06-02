import React, {useState} from "react";
import Navbar from "./components/Nav/Navbar";
import MathInput from "./components/Main/Math";

const App = () => {
  
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedMathType, setSelectedMathType] = useState('');


  const selectedDifficultyHandler = (selectedValue) => {
    console.log(selectedValue)
    setSelectedDifficulty(selectedValue);
  }

  const selectedMathTypeHandler = (selectedValue) => {
    console.log(selectedValue)
    setSelectedMathType(selectedValue);
  }


  return (
    <>
      <Navbar onSelectDifficulty={selectedDifficultyHandler} onSelectMathType={selectedMathTypeHandler} />
      <MathInput difficulty={selectedDifficulty} mathType={selectedMathType}/>
    </>
  );
};

export default App;
