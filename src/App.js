
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

import Todoapp from './components/Todoapp';
function App() {

const [logo,setLogo]=useState([])
const [apple,setApple]=useState([])

useEffect(()=>{
  setLogo({
    logo:"data:image/png;base64,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",
     date:"28/10/2020",
     btn:"Case Study",
     name:"Amazon Gift",
     pay:"Pay",
     ds:"Desktop-Mobile",
   })
   setApple({
    logo:"data:image/png;base64,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",
     date:"17 sep 2020",
     btn:"Case Study",
     name:"Apple Gift",
     pay:"Payment",
     ds:"MacOS-Mobile",
   })

},[])


  return (
    <div className="App">
     <Todoapp logo={logo} apple={apple}/>
    </div>
  );
}

export default App;
