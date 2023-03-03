import logo from './logo.svg';
import './App.css';
import  {React, useState, useEffect } from 'react';

function App() {

  const [t1, setT1] = useState('');

  function clickHandler() {
    fetch('http://test1.ua', {
      method: 'POST',
      header: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({action: 1})
    })
      .then(response => response.text())
      .then(response => {
      console.log(response)
      setT1(response)
     })
  }
  return (
    <div className="container">
      <h1>Hello World!</h1>
      <button onClick={clickHandler}>Go</button>
      <div>
        {t1}
      </div>
    </div>
  );
}

export default App;
