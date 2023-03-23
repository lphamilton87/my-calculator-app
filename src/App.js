import { useState } from "react";
import Button from "./components/Button"
import Input from "./components/Input"
import './App.css';
import * as math from "mathjs";

function App() {
const [calculation, setCalculation] = useState("")
const [result, setResult] = useState("")

const addToCalculation = (val) => {
  setCalculation((calculation) => 
    [...calculation, val]
  );
};

const calculateResult = () => {
   const input = calculation.join("");

   setResult(math.evaluate(input))
}

const resetCalculation = () => {
  setCalculation("")
  setResult("")
}

const orangeButtons = '#ff9900'

  return (
     <div className="App">
      <div className="calc-container">
        <Input calculation={calculation} result={result}/>
        <div className="row">
        <Button symbol="7" handleClick={addToCalculation} />
        <Button symbol="8" handleClick={addToCalculation}/>
        <Button symbol="9" handleClick={addToCalculation}/>
        <Button symbol="/" colour={orangeButtons} handleClick={addToCalculation} />
        </div>
        <div className="row">
        <Button symbol="4" handleClick={addToCalculation}/>
        <Button symbol="5" handleClick={addToCalculation}/>
        <Button symbol="6" handleClick={addToCalculation}/>
        <Button symbol="*" colour={orangeButtons} handleClick={addToCalculation}/>
        </div>
        <div className="row">
        <Button symbol="1" handleClick={addToCalculation}/>
        <Button symbol="2" handleClick={addToCalculation}/>
        <Button symbol="3" handleClick={addToCalculation}/>
        <Button symbol="+" colour={orangeButtons} handleClick={addToCalculation}/>
        </div>
        <div className="row">
        <Button symbol="0" handleClick={addToCalculation}/>
        <Button symbol="." handleClick={addToCalculation}/>
        <Button symbol="=" colour={orangeButtons} handleClick={calculateResult}/>
        <Button symbol="-" colour={orangeButtons} handleClick={addToCalculation}/>
        </div>
        <Button symbol="AC" handleClick={resetCalculation}/>
      </div>
     </div>
  )
}

export default App;
