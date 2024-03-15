
import { useState } from 'react'
import './App.css'
import Receipeingredients from './Componenets/Ingredients'

function App() {

  return (
    <>
      <div className="App">
        <div> 
          <Receipephoto/>
        </div>
        <div>
          <ReceipeDescription />;
          <Receipeingredients/>;
        </div>
      </div>
    </>
  );
}

export default App;