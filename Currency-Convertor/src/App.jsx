import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [amount, setAmount] = useState(1)
  const [fcurrency, setFcurrency] = useState("USD")
  const [tcurrency, setTcurrency] = useState("INR")
  const [convertAmount, setConvertAmount] = useState(null)

  useEffect(() => {
      const getExchangeRate = async () => {
        try {
          const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fcurrency}`)
          const exchangeRate = response.data.rates[tcurrency]
          const convertAmount = amount * exchangeRate
          setConvertAmount(convertAmount.toFixed(2))
          } catch (error) {
            console.error("Error Fetching Exchange Rate",error)
            }
      }
      getExchangeRate();
    }, [fcurrency,tcurrency, amount])

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setAmount(value);
      }
  }

  const handleFromCurrency = (e) => {
    setFcurrency(e.target.value);
  }

  const handleToCurrency = (e) => {
    setTcurrency(e.target.value);
  }

  return (
    <>
      <div className='currency-calculator'>
      <div className='box'></div>
      <div className='data'>
        <h1>Currency Convertor</h1>
        <div className='input-container'>
          <label htmlFor='amt'>Amount: </label>
          <input type='number' id='amt' value={amount} onChange={handleAmountChange} ></input>
        </div>
        <div className='input-container'>
          <label>From Currency</label>
          <select id='fromCurrency' value={fcurrency} onChange={handleFromCurrency}>
          <option value='USD'>USD - United States Dollar</option>
          <option value='INR'>INR - Indian Rupee</option>
          <option value='KWD'>KWD - Kuwaiti Dinar</option>
          <option value='SAR'>SAR - Saudi Riyal</option>
          <option value='UAD'>UAD - United Arab Emirates Dirham</option>
          <option value='EUR'>EUR - Euro</option>
          <option value='GBP'>GBP - British Pound</option>
          <option value='JPY'>JPY - Japanese Yen</option>
          <option value='CAD'>CAD - Canadian Dollar</option>
          <option value='AUD'>AUD - Australian Dollar</option>
          </select>
        </div>
        <div className='input-container'>
          <label>To Currency</label>
          <select id='toCurrency' value={tcurrency} onChange={handleToCurrency}>
          <option value='USD'>USD - United States Dollar</option>
          <option value='INR'>INR - Indian Rupee</option>
          <option value='KWD'>KWD - Kuwaiti Dinar</option>
          <option value='SAR'>SAR - Saudi Riyal</option>
          <option value='UAD'>UAD - United Arab Emirates Dirham</option>
          <option value='EUR'>EUR - Euro</option>
          <option value='GBP'>GBP - British Pound</option>
          <option value='JPY'>JPY - Japanese Yen</option>
          <option value='CAD'>CAD - Canadian Dollar</option>
          <option value='AUD'>AUD - Australian Dollar</option>
          </select>
        </div> 
        <div className="result">
          <p>{amount} {fcurrency} is equal to {convertAmount} {tcurrency}</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
