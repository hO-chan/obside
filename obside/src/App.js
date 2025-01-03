import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

//여기서는 html과 유사한 jsx문법을 사용해서 해야한다.
function App() {


  let data1 = 'dt2';
  let [data2, data2Change] = useState('대충 아무 데이터');

  return (
    <div className="App">
      <div className="header" style={{ border: '1px solid black' }}>
        NavBar
      </div>

      <div className='body' style={{ border: '1px solid black' }}>
        <div className='bdyLBar'>
          leftSideBar
        </div>
        <div className='bdyContent'>
          <input></input>

        </div>
        <div className='bdyRBar'>
          rightSideBar
        </div>
      </div>

      <div className='footer' style={{ border: '1px solid black' }}>
        footer
      </div>
    </div>
  );
}

export default App;
