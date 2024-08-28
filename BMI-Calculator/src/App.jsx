import { useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState(null)
  const [bmiStatus, setBmiStatus] = useState("")
  const [error, setError] = useState("")

  const calculateBmi = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if (isValidHeight && isValidWeight) {
      const heightInMeters = height / 100;
      const weightInKg = weight;
      const bmiValue = weightInKg / (heightInMeters ** 2);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5){
        setBmiStatus("Underweight");
      }
      else if (bmiValue >= 18.5 && bmiValue < 25){
        setBmiStatus("Normal");
      }
      else if (bmiValue >= 25 && bmiValue < 30){
        setBmiStatus("Overweight");
      }
      else{
        setBmiStatus("Obese");
      }
      setError("")
    }else{
    setBmiStatus("");
    setBmi(null);
    setError("Please Enter Valid Numeric Values for Height and Weight");
  }
}

const clearAll = () =>{
  setHeight("");
  setWeight("");
  setBmiStatus("");
  setBmi(null);
}
  

  return (
    <>
      <div className='bmi-calculator'>
      <div className='box'></div>
      <div className='data'>
        <h1>BMI Calculator</h1>
        {error && <p className='error'>{error}</p>}
        <div className='input-container'>
          <label htmlFor='weigth'>Weight (kg):</label>
          <input type='text' id='weigth' value={weight} onChange={(e)=> setWeight(e.target.value)}></input>
        </div>
        <div className='input-container'>
          <label htmlFor='heigth'>Height (cm):</label>
          <input type='text' id='heigth' value={height} onChange={(e)=> setHeight(e.target.value)}></input>
        </div>
        <button className='calculate-btn' onClick={calculateBmi}>Calculate</button>
        <button onClick={clearAll}>Clear</button>
        {bmi !== null && (
          <div className='result'>
          <p>Your BMI is: {bmi}</p>
          <p>Status: {bmiStatus}</p>
        </div> 
      )}
      </div>
      </div>
    </>
  )
}

export default App
