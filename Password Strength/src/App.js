import React, { useState } from 'react';

function App() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [color1, setColor] = useState('');

  function changePassword(event) {
    setPassword(event.target.value);
    checkPassword();
    changeColor();

  }

  function changeColor() {
    var b = strength;
    if ((b === 'very weak') || (b === 'weak')) {
      setColor('Red')
    }
    if ((b === 'very strong') || (b === 'strong')) {
      setColor('Green')
    }
    if (b === 'medium') {
      setColor('Orange')
    }
  }

  function checkPassword() {
    var a = password;
    var count = 0;

    if (/.{8,}/.test(a)) {
      count++;
    }
    if (/[A-Z]/.test(a)) {
      count++;
    }
    if (/[a-z]/.test(a)) {
      count++;
    }
    if (/[0-9]/.test(a)) {
      count++;
    }
    if (/[^A-Za-z0-9]/.test(a)) {
      count++;
    }

    if (count === 5) {
      setStrength('very strong')
    }
    if (count === 4) {
      setStrength('strong')
    }
    if (count === 3) {
      setStrength('medium')
    }
    if (count === 2) {
      setStrength('weak')
    }
    if (count === 1) {
      setStrength('very weak')
    }


  }

  return (
    <div className="App">
      <h1 style={{ color: 'blue' }}>Password Checker</h1>
      <input value={password} type='password' placeholder='Enter ur password' onChange={changePassword}   style={{ backgroundColor: color1 }} />
      <p>Strength:{strength}</p>
    </div>
  );
}

export default App;
