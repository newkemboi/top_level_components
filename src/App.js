
import React, {useState} from 'react';
//import ReactDOM from 'react-dom'; 

import './App.css';

const Button = ({clickAction, clickValue}) => {
  return (
  <button onClick={() => clickAction(clickValue)}>+{clickValue}</button>
  )
};

const Display = ({ content }) => (
  <pre>{content}</pre>
);

const App = () => { 
  const [count, setCount] = useState(0);
  const incrementCounter = (incrementValue) => 
    setCount(count + incrementValue);
 
  return ( 
    <>
  <Button clickAction={incrementCounter} clickValue={1}/>  
  <Button clickAction={incrementCounter} clickValue={5}/>  
  <Button clickAction={incrementCounter} clickValue={10}/>  

  <Display content ={count}/>
  </>
  ); 
};



export default App;
