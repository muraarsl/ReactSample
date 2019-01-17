import React, { Component } from 'react';
import './App.css';
import {FirstComponent} from './first';

class App extends Component {
  render() {
    
    const liste= ["listenin ilk elemanı",
    "listenin ikinci elemanı",
    "listenin üçüncü elemanı",
    "listenin dördüncü elemanı"
    ];

    return (
      <div>
     
      <hr/>  
      <FirstComponent myliste={liste}/>
      </div>
    );
  }
}

export default App;
