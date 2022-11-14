import React, { useState } from 'react'

import weatherStyle from '../styles/Weather.module.css'
import todoStyle from '../styles/Todo.module.css'

const Weather = () => {

  const [input, setInput] = useState('')
  const [check, setCheck] = useState([])

  const getWeather = async () => {
    try {
      let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=5065884fbf7ce189606eda903c001225`)
      const data = await res.json()
      // console.log(data);
      setCheck([data])
    } catch (error) {
      console.log(error);
    }
  }
  const handleInput = (e) => {
    setInput(e.target.value)
    console.log(input);
  }
  console.log(check);
  return (
    <>
      <div className={weatherStyle.container}>
        <h1 className={todoStyle.title}>
          <span>Weather</span> App
        </h1>
        <div className={weatherStyle.main}>
          <div className={weatherStyle.grid}>
            <div className={weatherStyle.card}>
              <input type="text" name="city" id="city" value={input} onChange={handleInput} />
              <button className={weatherStyle.button} onClick={() => { getWeather(), setInput('') }}>Submit</button>
              {
                check[0] && <div>
                  <h2>{check[0].name} {check[0].sys.country}</h2>
                  <p>{check[0].main.temp}</p>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



export default Weather