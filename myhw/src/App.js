
import React from 'react';
import "./App.css";
import {Route,Routes} from 'react-router-dom'
import Sign from './Sign';
import Newcontext from './Newcontext';
import Infopage from './Infopage';
function App() { 
 
  return ( 
    <div >
      <Routes>
        <Route path='/Sign' element={<Sign/>}/>
        <Route path='/Newcontext' element={<Newcontext/>}/>
        <Route path='/Infopage' element={<Infopage/>}/>
      </Routes>
    </div>
    
  );
} 
 
export default App; 
