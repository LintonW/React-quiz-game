//importing react & useState
import React, { useState } from 'react'

//importing css 
import './App.css';

//importing components
import Landing from './components/Landing'
import Quiz from './components/Quiz'


function App() {
  //useState to set state
  const [start, setStart] = useState(false);
  
  //rendering the components with ternary operator
  return (
    <div className="App">
      { start ? <Quiz /> : <Landing props={setStart} />}

    </div>
  );
}

export default App;
