import Button from "./components/Button"
import Input from "./components/Input"
import { useState } from "react";
import './App.css';

function App() {
const [calculation, setCalculation] = useState("0")
const [result, setResult] = useState("")

const orangeButtons = '#ff9900'

  return (
     <div className="App">
      <div className="calc-container">
        <Input calculation={calculation} result={result}/>
        <div className="row">
        <Button symbol="7"/>
        <Button symbol="8"/>
        <Button symbol="9"/>
        <Button symbol="/" colour={orangeButtons}/>
        </div>
        <div className="row">
        <Button symbol="4"/>
        <Button symbol="5"/>
        <Button symbol="6"/>
        <Button symbol="*" colour={orangeButtons}/>
        </div>
        <div className="row">
        <Button symbol="1"/>
        <Button symbol="2"/>
        <Button symbol="3"/>
        <Button symbol="+" colour={orangeButtons}/>
        </div>
        <div className="row">
        <Button symbol="0"/>
        <Button symbol="."/>
        <Button symbol="=" colour={orangeButtons}/>
        <Button symbol="-" colour={orangeButtons}/>
        </div>
        <Button symbol="Clear"/>
      </div>
     </div>

  )
}

export default App;
