
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'

function App() {

  function handleClick() {      // Normal Function
    alert('Yes connection successfully')
  };

  const handleClick2 = () => {      // Arrow Function
    alert('Button 2 is Clicked')
  } 

  const addToFive = (num) => {
    alert(num + 5);
   }

  return (
    <>
      <h1>Day 2 practice</h1>  
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Button 2</button>
      {/* In line Arrow Function */}
      <button onClick={() => { alert('Button 3 is Clicked') }}>Button 3</button>    
      {/* With parameter Function  */}
      <button onClick={() => addToFive(5)}>Add to 5</button>

      <Counter></Counter>
      <Team></Team>

      <Users></Users>
      
    </>
  )
}

export default App
