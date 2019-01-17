import React, { Component } from 'react';
import './App.css';
import {FirstComponent} from './first';

class App extends Component {
  render() {
    const propsabit="ilk prop örneği"

    return (
      <div>
     
      <hr/>  
      <FirstComponent ilkprobs={propsabit}/>
      </div>
    );
  }
}

export default App;
