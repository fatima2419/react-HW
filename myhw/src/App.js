
import React from 'react';
import "./App.css";
import Cartoon from './Cartoon';
import {Route,Routes} from 'react-router-dom'
import Sign from './Sign'
function App() { 
 
  return ( 
    <div >
      <Routes>
        <Route path='/' element={<Cartoon/>}/>
      </Routes>
      <Sign/>
    </div>
    
  );
} 
 
export default App; 
