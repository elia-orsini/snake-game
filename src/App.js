import './App.css';

import Environment from './Snake/Environment'
import React from 'react';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Environment></Environment>
      </div>
    );
  }
}

export default App;
