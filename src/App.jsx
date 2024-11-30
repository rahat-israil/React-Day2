
import './App.css'

function App() {

  function handleClick() {      // Normal Function
    alert('Yes connection successfully')
  };

  const handleClick2 = () => {      // Arrow Function
    alert('Button 2 is Clicked')
  } 

  return (
    <>
      <h1>Day 2 practice</h1>  
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Button 2</button>
      {/* In line Arrow Function */}
      <button onClick={() => {alert('Button 3 is Clicked')}}>Button 3</button>    
      
    </>
  )
}

export default App
