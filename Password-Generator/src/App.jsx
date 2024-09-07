import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [upper, setUpper] = useState(true)
  const [lower, setLower] = useState(true)
  const [number, setNumber] = useState(true)
  const [symbol, setSymbol] = useState(true)
  const [password, setPassword] = useState('')

  const generatePassword = () => {
    let charset = "";
    if (upper) {charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";}
      if (lower) {charset += "abcdefghijklmnopqrstuvwxyz";}
        if (number) {charset += "0123456789";}
          if (symbol) {charset += "!@#$%^&*()_+~`|}{[]:;?><"}
            let password = "";
            for (let i = 0; i < length; i++) {
              password += charset.charAt(Math.floor(Math.random() * charset.length));
            }
              setPassword(password);
  }

  const copyClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password Copied")
  }

  return (
    <>
      <div className='password-generator'>
        <h2>Password Generator</h2>
        <div className='input-group'>
          <label htmlFor='num'>Password Length: </label>
          <input type="number" id="num" value={length} onChange={(e)=>{
            setLength(parseInt(e.target.value))
          }} />
        </div>
        <div className="checkbox-group">
          <input type='checkbox' id='upper' checked={upper} onChange={(e)=>{setUpper(e.target.checked)}} ></input>
          <label htmlFor='upper'>Include Upper Case</label>
        </div>
        <div className="checkbox-group">
          <input type='checkbox' id='lower' checked={lower} onChange={(e)=>{setLower(e.target.checked)}} ></input>
          <label htmlFor='lower'>Include lower Case</label>
        </div>
        <div className="checkbox-group">
          <input type='checkbox' id='numbers' checked={number} onChange={(e)=>{setNumber(e.target.checked)}} ></input>
          <label htmlFor='numbers'>Include Numbers</label>
        </div>
        <div className="checkbox-group">
          <input type='checkbox' id='symbol' checked={symbol} onChange={(e)=>{setSymbol(e.target.checked)}} ></input>
          <label htmlFor='symbol'>Include symbol</label>
        </div>
        <button className='generate-btn' onClick={generatePassword} >Generate Password</button>
        <div className="generate-password">
          <input type='text' value={password} readOnly></input>
          <button className='copy-btn' onClick={copyClipboard}>Copy</button>
        </div>
      </div>
    </>
  )
}

export default App
